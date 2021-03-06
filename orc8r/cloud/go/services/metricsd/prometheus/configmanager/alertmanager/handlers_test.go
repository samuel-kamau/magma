/*
 * Copyright (c) Facebook, Inc. and its affiliates.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

package main

import (
	"encoding/json"
	"errors"
	"net/http"
	"net/http/httptest"
	"net/url"
	"strings"
	"testing"

	"magma/orc8r/cloud/go/services/metricsd/prometheus/configmanager/alertmanager/receivers"
	"magma/orc8r/cloud/go/services/metricsd/prometheus/configmanager/alertmanager/receivers/mocks"

	"github.com/labstack/echo"
	"github.com/prometheus/alertmanager/config"
	"github.com/stretchr/testify/assert"
)

const (
	testNID = "test"
)

var (
	testWebhookURL, _ = url.Parse("http://test.com")
	sampleReceiver    = receivers.Receiver{
		Name: "testSlackReceiver",
		SlackConfigs: []*receivers.SlackConfig{{
			APIURL:   "http://slack.com/12345",
			Channel:  "test_channel",
			Username: "test_username",
		}},
		WebhookConfigs: []*config.WebhookConfig{{
			NotifierConfig: config.NotifierConfig{
				VSendResolved: true,
			},
			URL: &config.URL{
				URL: testWebhookURL,
			},
		}},
	}

	sampleRoute = config.Route{
		Receiver: "testSlackReceiver",
		Match:    map[string]string{"networkID": testNID},
		Routes: []*config.Route{{
			Receiver: "childReceiver",
			Match:    map[string]string{"severity": "critical"},
		}},
	}
)

func TestGetReceiverPostHandler(t *testing.T) {
	// Successful Post
	client := &mocks.AlertmanagerClient{}
	client.On("CreateReceiver", testNID, sampleReceiver).Return(nil)
	client.On("ReloadAlertmanager").Return(nil)
	c, rec := buildContext(sampleReceiver, http.MethodPost, "/", ReceiverPath, testNID)

	err := GetReceiverPostHandler(client)(c)
	assert.NoError(t, err)
	assert.Equal(t, http.StatusOK, rec.Code)
	client.AssertExpectations(t)

	// Client Error
	client = &mocks.AlertmanagerClient{}
	client.On("CreateReceiver", testNID, receivers.Receiver{}).Return(errors.New("error"))
	c, _ = buildContext(nil, http.MethodPost, "/", ReceiverPath, testNID)

	err = GetReceiverPostHandler(client)(c)
	assert.Equal(t, http.StatusBadRequest, err.(*echo.HTTPError).Code)
	assert.EqualError(t, err, `code=400, message=error`)
	client.AssertExpectations(t)

	// Alertmanager Error
	client = &mocks.AlertmanagerClient{}
	client.On("ReloadAlertmanager").Return(errors.New("error"))
	client.On("CreateReceiver", testNID, receivers.Receiver{}).Return(nil)
	c, _ = buildContext(nil, http.MethodPut, "/", ReceiverPath, testNID)

	err = GetReceiverPostHandler(client)(c)
	assert.Equal(t, http.StatusInternalServerError, err.(*echo.HTTPError).Code)
	assert.EqualError(t, err, `code=500, message=error`)
	client.AssertExpectations(t)
}

func TestGetGetReceiversHandler(t *testing.T) {
	// Successful Get
	client := &mocks.AlertmanagerClient{}
	client.On("GetReceivers", testNID).Return([]receivers.Receiver{sampleReceiver}, nil)
	c, rec := buildContext(nil, http.MethodGet, "/", ReceiverPath, testNID)

	err := GetGetReceiversHandler(client)(c)
	assert.NoError(t, err)
	assert.Equal(t, http.StatusOK, rec.Code)
	client.AssertExpectations(t)

	var receiver []receivers.Receiver
	err = json.Unmarshal(rec.Body.Bytes(), &receiver)
	assert.Equal(t, 1, len(receiver))
	assert.Equal(t, sampleReceiver, receiver[0])

	// Client Error
	client = &mocks.AlertmanagerClient{}
	client.On("GetReceivers", testNID).Return([]receivers.Receiver{}, errors.New("error"))
	c, _ = buildContext(nil, http.MethodGet, "/", ReceiverPath, testNID)

	err = GetGetReceiversHandler(client)(c)
	assert.Equal(t, http.StatusInternalServerError, err.(*echo.HTTPError).Code)
	assert.EqualError(t, err, `code=500, message=error`)
	client.AssertExpectations(t)
}

func TestGetUpdateReceiverHandler(t *testing.T) {
	// Successful Update
	client := &mocks.AlertmanagerClient{}
	client.On("UpdateReceiver", testNID, &sampleReceiver).Return(nil)
	client.On("ReloadAlertmanager").Return(nil)

	c, rec := buildContext(sampleReceiver, http.MethodPut, "/", ReceiverPath, testNID)

	err := GetUpdateReceiverHandler(client)(c)
	assert.NoError(t, err)
	assert.Equal(t, http.StatusOK, rec.Code)
	client.AssertExpectations(t)

	// Client Error
	client = &mocks.AlertmanagerClient{}
	client.On("UpdateReceiver", testNID, &receivers.Receiver{}).Return(errors.New("error"))
	c, _ = buildContext(nil, http.MethodPut, "/", ReceiverPath, testNID)

	err = GetUpdateReceiverHandler(client)(c)
	assert.Equal(t, http.StatusBadRequest, err.(*echo.HTTPError).Code)
	assert.EqualError(t, err, `code=400, message=error`)
	client.AssertExpectations(t)

	// Alertmanager Error
	client = &mocks.AlertmanagerClient{}
	client.On("UpdateReceiver", testNID, &receivers.Receiver{}).Return(nil)
	client.On("ReloadAlertmanager").Return(errors.New("error"))
	c, _ = buildContext(nil, http.MethodPut, "/", ReceiverPath, testNID)

	err = GetUpdateReceiverHandler(client)(c)
	assert.Equal(t, http.StatusInternalServerError, err.(*echo.HTTPError).Code)
	assert.EqualError(t, err, `code=500, message=error`)
	client.AssertExpectations(t)
}

func TestGetDeleteReceiverHandler(t *testing.T) {
	// Successful Delete
	client := &mocks.AlertmanagerClient{}
	client.On("DeleteReceiver", testNID, sampleReceiver.Name).Return(nil)
	client.On("ReloadAlertmanager").Return(nil)

	q := make(url.Values)
	q.Set(ReceiverNameQueryParam, sampleReceiver.Name)
	c, rec := buildContext(nil, http.MethodGet, "/?"+q.Encode(), ReceiverPath, testNID)

	err := GetDeleteReceiverHandler(client)(c)
	assert.NoError(t, err)
	assert.Equal(t, http.StatusOK, rec.Code)
	client.AssertExpectations(t)

	// Client Error
	client = &mocks.AlertmanagerClient{}
	client.On("DeleteReceiver", testNID, sampleReceiver.Name).Return(errors.New("error"))
	c, _ = buildContext(nil, http.MethodGet, "/?"+q.Encode(), ReceiverPath, testNID)

	err = GetDeleteReceiverHandler(client)(c)
	assert.Equal(t, http.StatusBadRequest, err.(*echo.HTTPError).Code)
	assert.EqualError(t, err, `code=400, message=error`)
	client.AssertExpectations(t)

	// Alertmanager Error
	client = &mocks.AlertmanagerClient{}
	client.On("DeleteReceiver", testNID, sampleReceiver.Name).Return(nil)
	client.On("ReloadAlertmanager").Return(errors.New("error"))
	c, _ = buildContext(nil, http.MethodGet, "/?"+q.Encode(), ReceiverPath, testNID)

	err = GetDeleteReceiverHandler(client)(c)
	assert.Equal(t, http.StatusInternalServerError, err.(*echo.HTTPError).Code)
	assert.EqualError(t, err, `code=500, message=error`)
	client.AssertExpectations(t)
}

func TestGetGetRouteHandler(t *testing.T) {
	// Successful Get
	client := &mocks.AlertmanagerClient{}
	client.On("GetRoute", testNID).Return(&sampleRoute, nil)
	c, rec := buildContext(nil, http.MethodGet, "/", RoutePath, testNID)

	err := GetGetRouteHandler(client)(c)
	assert.NoError(t, err)
	assert.Equal(t, http.StatusOK, rec.Code)
	client.AssertExpectations(t)

	// Client Error
	client = &mocks.AlertmanagerClient{}
	client.On("GetRoute", testNID).Return(nil, errors.New("error"))
	c, _ = buildContext(nil, http.MethodGet, "/", RoutePath, testNID)

	err = GetGetRouteHandler(client)(c)
	assert.Equal(t, http.StatusBadRequest, err.(*echo.HTTPError).Code)
	assert.EqualError(t, err, `code=400, message=error`)
	client.AssertExpectations(t)
}

func TestGetUpdateRouteHandler(t *testing.T) {
	// Successful Update
	client := &mocks.AlertmanagerClient{}
	client.On("ModifyNetworkRoute", testNID, &sampleRoute).Return(nil)
	client.On("ReloadAlertmanager").Return(nil)
	c, rec := buildContext(sampleRoute, http.MethodPost, "/", ReceiverPath, testNID)

	err := GetUpdateRouteHandler(client)(c)
	assert.NoError(t, err)
	assert.Equal(t, http.StatusOK, rec.Code)
	client.AssertExpectations(t)

	// Client Error
	client = &mocks.AlertmanagerClient{}
	client.On("ModifyNetworkRoute", testNID, &sampleRoute).Return(errors.New("error"))
	c, _ = buildContext(sampleRoute, http.MethodPost, "/", ReceiverPath, testNID)

	err = GetUpdateRouteHandler(client)(c)
	assert.Equal(t, http.StatusBadRequest, err.(*echo.HTTPError).Code)
	assert.EqualError(t, err, `code=400, message=error`)
	client.AssertExpectations(t)

	// Alertmanager Error
	client = &mocks.AlertmanagerClient{}
	client.On("ModifyNetworkRoute", testNID, &sampleRoute).Return(nil)
	client.On("ReloadAlertmanager").Return(errors.New("error"))
	c, _ = buildContext(sampleRoute, http.MethodPost, "/", ReceiverPath, testNID)

	err = GetUpdateRouteHandler(client)(c)
	assert.Equal(t, http.StatusInternalServerError, err.(*echo.HTTPError).Code)
	assert.EqualError(t, err, `code=500, message=error`)
	client.AssertExpectations(t)
}

func TestDecodeReceiverPostRequest(t *testing.T) {
	// Successful Decode
	c, _ := buildContext(sampleReceiver, http.MethodPost, "/", ReceiverPath, testNID)
	conf, err := decodeReceiverPostRequest(c)
	assert.NoError(t, err)
	assert.Equal(t, sampleReceiver, conf)

	// error decoding route
	c, _ = buildContext(struct {
		Name bool `json:"name"`
	}{false}, http.MethodPost, "/", ReceiverPath, testNID)
	conf, err = decodeReceiverPostRequest(c)
	assert.EqualError(t, err, `error unmarshalling payload: json: cannot unmarshal bool into Go struct field Receiver.name of type string`)
}

func TestDecodeRoutePostRequest(t *testing.T) {
	// Successful Decode
	c, _ := buildContext(sampleRoute, http.MethodPost, "/", ReceiverPath, testNID)
	conf, err := decodeRoutePostRequest(c)
	assert.NoError(t, err)
	assert.Equal(t, sampleRoute, conf)

	// error decoding route
	c, _ = buildContext(struct {
		Receiver bool `json:"receiver"`
	}{false}, http.MethodPost, "/", ReceiverPath, testNID)
	conf, err = decodeRoutePostRequest(c)
	assert.EqualError(t, err, `error unmarshalling route: json: cannot unmarshal bool into Go struct field Route.receiver of type string`)
}

func buildContext(body interface{}, method, target, path, networkID string) (echo.Context, *httptest.ResponseRecorder) {
	bytes, _ := json.Marshal(body)
	req := httptest.NewRequest(method, target, strings.NewReader(string(bytes)))
	rec := httptest.NewRecorder()
	c := echo.New().NewContext(req, rec)
	c.SetPath(path)
	c.SetParamNames("file_prefix")
	c.SetParamValues(networkID)
	return c, rec
}
