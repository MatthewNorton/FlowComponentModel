"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FlowObjectData_1 = require("./FlowObjectData");
var FlowObjectDataArray_1 = require("./FlowObjectDataArray");
var eContentType;
(function (eContentType) {
    eContentType[eContentType["unknown"] = 0] = "unknown";
    eContentType[eContentType["ContentString"] = 1] = "ContentString";
    eContentType[eContentType["ContentNumber"] = 2] = "ContentNumber";
    eContentType[eContentType["ContentObject"] = 3] = "ContentObject";
    eContentType[eContentType["ContentBoolean"] = 4] = "ContentBoolean";
    eContentType[eContentType["ContentList"] = 5] = "ContentList";
    eContentType[eContentType["ContentPassword"] = 6] = "ContentPassword";
    eContentType[eContentType["ContentContent"] = 7] = "ContentContent";
    eContentType[eContentType["ContentDateTime"] = 8] = "ContentDateTime";
    eContentType[eContentType["ContentEncrypted"] = 9] = "ContentEncrypted";
})(eContentType = exports.eContentType || (exports.eContentType = {}));
var FlowField = /** @class */ (function () {
    function FlowField(field) {
        this.ContentType = eContentType.unknown;
        this.DeveloperName = "";
        this.TypeElementDeveloperName = "";
        this.TypeElementId = "";
        this.TypeElementPropertyDeveloperName = "";
        this.TypeElementPropertyId = "";
        this.ValueElementId = "";
        if (field) {
            this.ContentType = eContentType[field.contentType];
            this.DeveloperName = field.developerName;
            this.TypeElementDeveloperName = field.typeElementDeveloperName;
            this.TypeElementId = field.typeElementId;
            this.TypeElementPropertyDeveloperName = field.typeElementPropertyDeveloperName;
            this.TypeElementPropertyId = field.typeElementPropertyId;
            this.ValueElementId = field.valueElementId;
            switch (this.ContentType) {
                case eContentType.ContentObject:
                    this.Value = field.objectData ? new FlowObjectData_1.FlowObjectData(field.objectData) : undefined;
                    break;
                case eContentType.ContentList:
                    this.Value = field.objectData && field.objectData[0] ? new FlowObjectDataArray_1.FlowObjectDataArray(field.objectData) : new FlowObjectDataArray_1.FlowObjectDataArray([]);
                    break;
                default:
                    this.Value = field.contentValue;
                    break;
            }
        }
    }
    Object.defineProperty(FlowField.prototype, "contentType", {
        get: function () {
            return this.ContentType;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlowField.prototype, "developerName", {
        get: function () {
            return this.DeveloperName;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlowField.prototype, "typeElementDeveloperName", {
        get: function () {
            return this.TypeElementDeveloperName;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlowField.prototype, "typeElementId", {
        get: function () {
            return this.TypeElementId;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlowField.prototype, "typeElementPropertyDeveloperName", {
        get: function () {
            return this.TypeElementPropertyDeveloperName;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlowField.prototype, "typeElementPropertyId", {
        get: function () {
            return this.TypeElementPropertyId;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlowField.prototype, "valueElementId", {
        get: function () {
            return this.ValueElementId;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlowField.prototype, "value", {
        get: function () {
            return this.Value;
        },
        set: function (value) {
            this.Value = value;
        },
        enumerable: true,
        configurable: true
    });
    FlowField.prototype.iFlowField = function () {
        var contentValue = "";
        var objectData = [];
        switch (this.ContentType) {
            case eContentType.ContentObject:
                var od = this.Value;
                objectData.push(od.iObjectData());
                break;
            case eContentType.ContentList:
                var oda = this.Value;
                objectData = oda.iFlowObjectDataArray();
                break;
            default:
                contentValue = this.Value ? this.Value : "";
                break;
        }
        var output = {
            contentType: eContentType[this.ContentType],
            contentValue: contentValue,
            developerName: this.DeveloperName,
            objectData: objectData,
            typeElementDeveloperName: this.TypeElementDeveloperName,
            typeElementId: this.TypeElementId,
            typeElementPropertyDeveloperName: this.TypeElementPropertyDeveloperName,
            typeElementPropertyId: this.TypeElementPropertyId,
            valueElementId: this.ValueElementId,
        };
        return output;
    };
    return FlowField;
}());
exports.FlowField = FlowField;
