"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FlowField_1 = require("./FlowField");
var FlowObjectData_1 = require("./FlowObjectData");
var FlowObjectDataArray_1 = require("./FlowObjectDataArray");
var FlowObjectDataProperty = /** @class */ (function () {
    function FlowObjectDataProperty(property) {
        this.ContentFormat = "";
        this.ContentType = FlowField_1.eContentType.unknown;
        this.DeveloperName = "";
        this.TypeElementId = "";
        this.TypeElementPropertyId = "";
        if (property) {
            this.DeveloperName = property.developerName;
            this.ContentType = FlowField_1.eContentType[property.contentType];
            this.ContentFormat = property.contentFormat ? property.contentFormat : "";
            this.TypeElementId = property.typeElementId ? property.typeElementId : "";
            this.TypeElementPropertyId = property.typeElementPropertyId;
            switch (this.ContentType) {
                case FlowField_1.eContentType.ContentObject:
                    this.Value = property.objectData ? new FlowObjectData_1.FlowObjectData(property.objectData) : undefined;
                    break;
                case FlowField_1.eContentType.ContentList:
                    this.value = property.objectData ? new FlowObjectDataArray_1.FlowObjectDataArray(property.objectData) : new FlowObjectDataArray_1.FlowObjectDataArray([]);
                    break;
                default:
                    this.value = property.contentValue ? property.contentValue : "";
                    break;
            }
        }
    }
    FlowObjectDataProperty.newInstance = function (developerName, contentType, value) {
        var cv = "";
        var objd = [];
        switch (contentType) {
            case FlowField_1.eContentType.ContentObject:
                var od = value;
                objd.push(od.iObjectData());
                break;
            case FlowField_1.eContentType.ContentList:
                var oda = value;
                objd = oda.iFlowObjectDataArray();
                break;
            default:
                cv = value;
                break;
        }
        var data = {
            contentFormat: "",
            contentType: FlowField_1.eContentType[contentType],
            contentValue: cv,
            developerName: developerName,
            objectData: objd,
            typeElementId: "",
            typeElementPropertyId: "",
        };
        return new this(data);
    };
    Object.defineProperty(FlowObjectDataProperty.prototype, "contentFormat", {
        get: function () {
            return this.ContentFormat;
        },
        set: function (contentFormat) {
            this.contentFormat = contentFormat;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlowObjectDataProperty.prototype, "contentType", {
        get: function () {
            return this.ContentType;
        },
        set: function (contentType) {
            this.ContentType = contentType;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlowObjectDataProperty.prototype, "developerName", {
        get: function () {
            return this.DeveloperName;
        },
        set: function (developerName) {
            this.DeveloperName = developerName;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlowObjectDataProperty.prototype, "typeElementId", {
        get: function () {
            return this.TypeElementId;
        },
        set: function (typeElementId) {
            this.TypeElementId = typeElementId;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlowObjectDataProperty.prototype, "typeElementPropertyId", {
        get: function () {
            return this.TypeElementPropertyId;
        },
        set: function (typeElementPropertyId) {
            this.TypeElementPropertyId = typeElementPropertyId;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlowObjectDataProperty.prototype, "value", {
        get: function () {
            switch (this.contentType) {
                case FlowField_1.eContentType.ContentNumber:
                    return parseFloat(this.Value ? this.Value : '0');
                case FlowField_1.eContentType.ContentBoolean:
                    return new String(this.Value).toLowerCase() === 'true';
                default:
                    return this.Value;
            }
        },
        set: function (value) {
            this.Value = value;
        },
        enumerable: true,
        configurable: true
    });
    FlowObjectDataProperty.prototype.clone = function () {
        var value;
        switch (this.contentType) {
            case FlowField_1.eContentType.ContentList:
                value = new FlowObjectDataArray_1.FlowObjectDataArray();
                this.value.items.forEach(function (item) {
                    value.addItem(item.clone(item.developerName));
                });
                break;
            case FlowField_1.eContentType.ContentObject:
                value = this.value.clone(this.value.developerName);
                break;
            default:
                value = this.value;
        }
        var clone = FlowObjectDataProperty.newInstance(this.developerName, this.contentType, value);
        return clone;
    };
    FlowObjectDataProperty.prototype.iFlowObjectDataProperty = function () {
        var contentValue = "";
        var objectData = [];
        switch (this.ContentType) {
            case FlowField_1.eContentType.ContentObject:
                var od = this.Value;
                // if it has no developerName then skip it
                if (od && od.developerName && od.developerName.length > 0) {
                    objectData.push(od.iObjectData());
                }
                break;
            case FlowField_1.eContentType.ContentList:
                var oda = this.Value;
                objectData = oda.iFlowObjectDataArray();
                break;
            default:
                contentValue = this.Value;
                break;
        }
        var output = {
            contentFormat: this.ContentFormat,
            contentType: FlowField_1.eContentType[this.ContentType],
            contentValue: contentValue,
            developerName: this.DeveloperName,
            objectData: objectData,
            typeElementId: this.TypeElementId,
            typeElementPropertyId: this.TypeElementPropertyId,
        };
        return output;
    };
    Object.defineProperty(FlowObjectDataProperty.prototype, "displayString", {
        get: function () {
            var label = '';
            if (this.Value) {
                switch (this.ContentType) {
                    case FlowField_1.eContentType.ContentString:
                    case FlowField_1.eContentType.ContentNumber:
                        label = this.Value;
                        break;
                    case FlowField_1.eContentType.ContentBoolean:
                        if (this.Value === true) {
                            label = 'True';
                        }
                        else {
                            label = 'False';
                        }
                        break;
                    case FlowField_1.eContentType.ContentDateTime:
                        var d = Date.parse(this.Value);
                        if (!isNaN(d)) {
                            var dt = new Date(d);
                            if (label.length <= 10) {
                                return dt.toLocaleDateString();
                            }
                            else {
                                return dt.toLocaleString();
                            }
                        }
                        break;
                    default:
                        label = FlowField_1.eContentType[this.ContentType];
                        break;
                }
            }
            else {
                label = 'Undefined';
            }
            return label;
        },
        enumerable: true,
        configurable: true
    });
    return FlowObjectDataProperty;
}());
exports.FlowObjectDataProperty = FlowObjectDataProperty;
