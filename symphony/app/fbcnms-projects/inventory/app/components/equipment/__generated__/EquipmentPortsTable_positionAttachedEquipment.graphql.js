/**
 * @generated
 * Copyright 2004-present Facebook. All Rights Reserved.
 *
 **/

 /**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type EquipmentBreadcrumbs_equipment$ref = any;
export type FutureState = "INSTALL" | "REMOVE" | "%future added value";
export type PropertyKind = "bool" | "date" | "datetime_local" | "email" | "enum" | "equipment" | "float" | "gps_location" | "int" | "location" | "range" | "string" | "%future added value";
export type WorkOrderStatus = "DONE" | "PENDING" | "PLANNED" | "%future added value";
import type { FragmentReference } from "relay-runtime";
declare export opaque type EquipmentPortsTable_positionAttachedEquipment$ref: FragmentReference;
declare export opaque type EquipmentPortsTable_positionAttachedEquipment$fragmentType: EquipmentPortsTable_positionAttachedEquipment$ref;
export type EquipmentPortsTable_positionAttachedEquipment = {|
  +id: string,
  +name: string,
  +ports: $ReadOnlyArray<?{|
    +id: string,
    +definition: {|
      +id: string,
      +name: string,
      +index: ?number,
      +visibleLabel: ?string,
      +portType: ?{|
        +id: string,
        +name: string,
        +propertyTypes: $ReadOnlyArray<?{|
          +id: string,
          +name: string,
          +type: PropertyKind,
          +index: ?number,
          +stringValue: ?string,
          +intValue: ?number,
          +booleanValue: ?boolean,
          +floatValue: ?number,
          +latitudeValue: ?number,
          +longitudeValue: ?number,
          +rangeFromValue: ?number,
          +rangeToValue: ?number,
          +isEditable: ?boolean,
          +isInstanceProperty: ?boolean,
          +isMandatory: ?boolean,
        |}>,
        +linkPropertyTypes: $ReadOnlyArray<?{|
          +id: string,
          +name: string,
          +type: PropertyKind,
          +index: ?number,
          +stringValue: ?string,
          +intValue: ?number,
          +booleanValue: ?boolean,
          +floatValue: ?number,
          +latitudeValue: ?number,
          +longitudeValue: ?number,
          +rangeFromValue: ?number,
          +rangeToValue: ?number,
          +isEditable: ?boolean,
          +isInstanceProperty: ?boolean,
          +isMandatory: ?boolean,
        |}>,
      |},
    |},
    +parentEquipment: {|
      +id: string,
      +name: string,
      +equipmentType: {|
        +id: string,
        +name: string,
        +portDefinitions: $ReadOnlyArray<?{|
          +id: string,
          +name: string,
          +visibleLabel: ?string,
          +portType: ?{|
            +id: string,
            +name: string,
          |},
          +bandwidth: ?string,
        |}>,
      |},
    |},
    +link: ?{|
      +id: string,
      +futureState: ?FutureState,
      +ports: $ReadOnlyArray<?{|
        +id: string,
        +definition: {|
          +id: string,
          +name: string,
          +visibleLabel: ?string,
          +portType: ?{|
            +linkPropertyTypes: $ReadOnlyArray<?{|
              +id: string,
              +name: string,
              +type: PropertyKind,
              +index: ?number,
              +stringValue: ?string,
              +intValue: ?number,
              +booleanValue: ?boolean,
              +floatValue: ?number,
              +latitudeValue: ?number,
              +longitudeValue: ?number,
              +rangeFromValue: ?number,
              +rangeToValue: ?number,
              +isEditable: ?boolean,
              +isInstanceProperty: ?boolean,
              +isMandatory: ?boolean,
            |}>
          |},
        |},
        +parentEquipment: {|
          +id: string,
          +name: string,
          +futureState: ?FutureState,
          +equipmentType: {|
            +id: string,
            +name: string,
            +portDefinitions: $ReadOnlyArray<?{|
              +id: string,
              +name: string,
              +visibleLabel: ?string,
              +bandwidth: ?string,
              +portType: ?{|
                +id: string,
                +name: string,
              |},
            |}>,
          |},
          +$fragmentRefs: EquipmentBreadcrumbs_equipment$ref,
        |},
      |}>,
      +workOrder: ?{|
        +id: string,
        +status: WorkOrderStatus,
      |},
      +properties: $ReadOnlyArray<?{|
        +id: string,
        +propertyType: {|
          +id: string,
          +name: string,
          +type: PropertyKind,
          +isEditable: ?boolean,
          +isMandatory: ?boolean,
          +isInstanceProperty: ?boolean,
          +stringValue: ?string,
        |},
        +stringValue: ?string,
        +intValue: ?number,
        +floatValue: ?number,
        +booleanValue: ?boolean,
        +latitudeValue: ?number,
        +longitudeValue: ?number,
        +rangeFromValue: ?number,
        +rangeToValue: ?number,
        +equipmentValue: ?{|
          +id: string,
          +name: string,
        |},
        +locationValue: ?{|
          +id: string,
          +name: string,
        |},
      |}>,
      +services: $ReadOnlyArray<?{|
        +id: string,
        +name: string,
      |}>,
    |},
    +properties: $ReadOnlyArray<{|
      +id: string,
      +propertyType: {|
        +id: string,
        +name: string,
        +type: PropertyKind,
        +isEditable: ?boolean,
        +isMandatory: ?boolean,
        +isInstanceProperty: ?boolean,
        +stringValue: ?string,
      |},
      +stringValue: ?string,
      +intValue: ?number,
      +floatValue: ?number,
      +booleanValue: ?boolean,
      +latitudeValue: ?number,
      +longitudeValue: ?number,
      +rangeFromValue: ?number,
      +rangeToValue: ?number,
      +equipmentValue: ?{|
        +id: string,
        +name: string,
      |},
      +locationValue: ?{|
        +id: string,
        +name: string,
      |},
    |}>,
  |}>,
  +equipmentType: {|
    +portDefinitions: $ReadOnlyArray<?{|
      +id: string,
      +name: string,
      +visibleLabel: ?string,
      +bandwidth: ?string,
    |}>
  |},
  +$refType: EquipmentPortsTable_positionAttachedEquipment$ref,
|};
export type EquipmentPortsTable_positionAttachedEquipment$data = EquipmentPortsTable_positionAttachedEquipment;
export type EquipmentPortsTable_positionAttachedEquipment$key = {
  +$data?: EquipmentPortsTable_positionAttachedEquipment$data,
  +$fragmentRefs: EquipmentPortsTable_positionAttachedEquipment$ref,
};
*/


const node/*: ReaderFragment*/ = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "index",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "visibleLabel",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "type",
  "args": null,
  "storageKey": null
},
v5 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "stringValue",
  "args": null,
  "storageKey": null
},
v6 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "intValue",
  "args": null,
  "storageKey": null
},
v7 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "booleanValue",
  "args": null,
  "storageKey": null
},
v8 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "floatValue",
  "args": null,
  "storageKey": null
},
v9 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "latitudeValue",
  "args": null,
  "storageKey": null
},
v10 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "longitudeValue",
  "args": null,
  "storageKey": null
},
v11 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "rangeFromValue",
  "args": null,
  "storageKey": null
},
v12 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "rangeToValue",
  "args": null,
  "storageKey": null
},
v13 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "isEditable",
  "args": null,
  "storageKey": null
},
v14 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "isInstanceProperty",
  "args": null,
  "storageKey": null
},
v15 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "isMandatory",
  "args": null,
  "storageKey": null
},
v16 = [
  (v0/*: any*/),
  (v1/*: any*/),
  (v4/*: any*/),
  (v2/*: any*/),
  (v5/*: any*/),
  (v6/*: any*/),
  (v7/*: any*/),
  (v8/*: any*/),
  (v9/*: any*/),
  (v10/*: any*/),
  (v11/*: any*/),
  (v12/*: any*/),
  (v13/*: any*/),
  (v14/*: any*/),
  (v15/*: any*/)
],
v17 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "linkPropertyTypes",
  "storageKey": null,
  "args": null,
  "concreteType": "PropertyType",
  "plural": true,
  "selections": (v16/*: any*/)
},
v18 = [
  (v0/*: any*/),
  (v1/*: any*/)
],
v19 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "portType",
  "storageKey": null,
  "args": null,
  "concreteType": "EquipmentPortType",
  "plural": false,
  "selections": (v18/*: any*/)
},
v20 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "bandwidth",
  "args": null,
  "storageKey": null
},
v21 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "futureState",
  "args": null,
  "storageKey": null
},
v22 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "properties",
  "storageKey": null,
  "args": null,
  "concreteType": "Property",
  "plural": true,
  "selections": [
    (v0/*: any*/),
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "propertyType",
      "storageKey": null,
      "args": null,
      "concreteType": "PropertyType",
      "plural": false,
      "selections": [
        (v0/*: any*/),
        (v1/*: any*/),
        (v4/*: any*/),
        (v13/*: any*/),
        (v15/*: any*/),
        (v14/*: any*/),
        (v5/*: any*/)
      ]
    },
    (v5/*: any*/),
    (v6/*: any*/),
    (v8/*: any*/),
    (v7/*: any*/),
    (v9/*: any*/),
    (v10/*: any*/),
    (v11/*: any*/),
    (v12/*: any*/),
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "equipmentValue",
      "storageKey": null,
      "args": null,
      "concreteType": "Equipment",
      "plural": false,
      "selections": (v18/*: any*/)
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "locationValue",
      "storageKey": null,
      "args": null,
      "concreteType": "Location",
      "plural": false,
      "selections": (v18/*: any*/)
    }
  ]
};
return {
  "kind": "Fragment",
  "name": "EquipmentPortsTable_positionAttachedEquipment",
  "type": "Equipment",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    (v0/*: any*/),
    (v1/*: any*/),
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "ports",
      "storageKey": null,
      "args": null,
      "concreteType": "EquipmentPort",
      "plural": true,
      "selections": [
        (v0/*: any*/),
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "definition",
          "storageKey": null,
          "args": null,
          "concreteType": "EquipmentPortDefinition",
          "plural": false,
          "selections": [
            (v0/*: any*/),
            (v1/*: any*/),
            (v2/*: any*/),
            (v3/*: any*/),
            {
              "kind": "LinkedField",
              "alias": null,
              "name": "portType",
              "storageKey": null,
              "args": null,
              "concreteType": "EquipmentPortType",
              "plural": false,
              "selections": [
                (v0/*: any*/),
                (v1/*: any*/),
                {
                  "kind": "LinkedField",
                  "alias": null,
                  "name": "propertyTypes",
                  "storageKey": null,
                  "args": null,
                  "concreteType": "PropertyType",
                  "plural": true,
                  "selections": (v16/*: any*/)
                },
                (v17/*: any*/)
              ]
            }
          ]
        },
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "parentEquipment",
          "storageKey": null,
          "args": null,
          "concreteType": "Equipment",
          "plural": false,
          "selections": [
            (v0/*: any*/),
            (v1/*: any*/),
            {
              "kind": "LinkedField",
              "alias": null,
              "name": "equipmentType",
              "storageKey": null,
              "args": null,
              "concreteType": "EquipmentType",
              "plural": false,
              "selections": [
                (v0/*: any*/),
                (v1/*: any*/),
                {
                  "kind": "LinkedField",
                  "alias": null,
                  "name": "portDefinitions",
                  "storageKey": null,
                  "args": null,
                  "concreteType": "EquipmentPortDefinition",
                  "plural": true,
                  "selections": [
                    (v0/*: any*/),
                    (v1/*: any*/),
                    (v3/*: any*/),
                    (v19/*: any*/),
                    (v20/*: any*/)
                  ]
                }
              ]
            }
          ]
        },
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "link",
          "storageKey": null,
          "args": null,
          "concreteType": "Link",
          "plural": false,
          "selections": [
            (v0/*: any*/),
            (v21/*: any*/),
            {
              "kind": "LinkedField",
              "alias": null,
              "name": "ports",
              "storageKey": null,
              "args": null,
              "concreteType": "EquipmentPort",
              "plural": true,
              "selections": [
                (v0/*: any*/),
                {
                  "kind": "LinkedField",
                  "alias": null,
                  "name": "definition",
                  "storageKey": null,
                  "args": null,
                  "concreteType": "EquipmentPortDefinition",
                  "plural": false,
                  "selections": [
                    (v0/*: any*/),
                    (v1/*: any*/),
                    (v3/*: any*/),
                    {
                      "kind": "LinkedField",
                      "alias": null,
                      "name": "portType",
                      "storageKey": null,
                      "args": null,
                      "concreteType": "EquipmentPortType",
                      "plural": false,
                      "selections": [
                        (v17/*: any*/)
                      ]
                    }
                  ]
                },
                {
                  "kind": "LinkedField",
                  "alias": null,
                  "name": "parentEquipment",
                  "storageKey": null,
                  "args": null,
                  "concreteType": "Equipment",
                  "plural": false,
                  "selections": [
                    (v0/*: any*/),
                    (v1/*: any*/),
                    (v21/*: any*/),
                    {
                      "kind": "LinkedField",
                      "alias": null,
                      "name": "equipmentType",
                      "storageKey": null,
                      "args": null,
                      "concreteType": "EquipmentType",
                      "plural": false,
                      "selections": [
                        (v0/*: any*/),
                        (v1/*: any*/),
                        {
                          "kind": "LinkedField",
                          "alias": null,
                          "name": "portDefinitions",
                          "storageKey": null,
                          "args": null,
                          "concreteType": "EquipmentPortDefinition",
                          "plural": true,
                          "selections": [
                            (v0/*: any*/),
                            (v1/*: any*/),
                            (v3/*: any*/),
                            (v20/*: any*/),
                            (v19/*: any*/)
                          ]
                        }
                      ]
                    },
                    {
                      "kind": "FragmentSpread",
                      "name": "EquipmentBreadcrumbs_equipment",
                      "args": null
                    }
                  ]
                }
              ]
            },
            {
              "kind": "LinkedField",
              "alias": null,
              "name": "workOrder",
              "storageKey": null,
              "args": null,
              "concreteType": "WorkOrder",
              "plural": false,
              "selections": [
                (v0/*: any*/),
                {
                  "kind": "ScalarField",
                  "alias": null,
                  "name": "status",
                  "args": null,
                  "storageKey": null
                }
              ]
            },
            (v22/*: any*/),
            {
              "kind": "LinkedField",
              "alias": null,
              "name": "services",
              "storageKey": null,
              "args": null,
              "concreteType": "Service",
              "plural": true,
              "selections": (v18/*: any*/)
            }
          ]
        },
        (v22/*: any*/)
      ]
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "equipmentType",
      "storageKey": null,
      "args": null,
      "concreteType": "EquipmentType",
      "plural": false,
      "selections": [
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "portDefinitions",
          "storageKey": null,
          "args": null,
          "concreteType": "EquipmentPortDefinition",
          "plural": true,
          "selections": [
            (v0/*: any*/),
            (v1/*: any*/),
            (v3/*: any*/),
            (v20/*: any*/)
          ]
        }
      ]
    }
  ]
};
})();
// prettier-ignore
(node/*: any*/).hash = '2b141397ce0b3ae9eba21ce5f801f010';
module.exports = node;
