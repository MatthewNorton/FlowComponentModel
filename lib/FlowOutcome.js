"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FlowAttribute_1 = require("./FlowAttribute");
var ePageActionBindingType;
(function (ePageActionBindingType) {
    ePageActionBindingType["Save"] = "SAVE";
    ePageActionBindingType["PartialSave"] = "PARTIAL_SAVE";
    ePageActionBindingType["NoSave"] = "NO_SAVE";
})(ePageActionBindingType = exports.ePageActionBindingType || (exports.ePageActionBindingType = {}));
var ePageActionType;
(function (ePageActionType) {
    ePageActionType["New"] = "NEW";
    ePageActionType["Query"] = "QUERY";
    ePageActionType["Insert"] = "INSERT";
    ePageActionType["Update"] = "UPDATE";
    ePageActionType["Upsert"] = "UPSERT";
    ePageActionType["Delete"] = "DELETE";
    ePageActionType["Remove"] = "REMOVE";
    ePageActionType["Add"] = "ADD";
    ePageActionType["Edit"] = "EDIT";
    ePageActionType["Next"] = "NEXT";
    ePageActionType["Back"] = "BACK";
    ePageActionType["Done"] = "DONE";
    ePageActionType["Save"] = "SAVE";
    ePageActionType["Cancel"] = "CANCEL";
    ePageActionType["Apply"] = "APPLY";
    ePageActionType["Import"] = "IMPORT";
    ePageActionType["Close"] = "CLOSE";
    ePageActionType["Open"] = "OPEN";
    ePageActionType["Submit"] = "SUBMIT";
    ePageActionType["Escalate"] = "ESCALATE";
    ePageActionType["Reject"] = "REJECT";
    ePageActionType["Delegate"] = "DELEGATE";
})(ePageActionType = exports.ePageActionType || (exports.ePageActionType = {}));
var FlowOutcome = /** @class */ (function () {
    function FlowOutcome(outcome) {
        this.DeveloperName = outcome.developerName;
        this.Id = outcome.id;
        this.IsBulkAction = outcome.isBulkAction;
        this.IsOut = outcome.isOut;
        this.Label = outcome.label;
        this.Order = outcome.order;
        this.PageActionBindingType = outcome.pageActionBindingType;
        this.PageActionType = outcome.pageActionType;
        this.PageObjectBindingId = outcome.pageObjectBindingId;
        this.Attributes = {};
        if (outcome.attributes) {
            for (var _i = 0, _a = Object.keys(outcome.attributes); _i < _a.length; _i++) {
                var key = _a[_i];
                this.Attributes[key] = new FlowAttribute_1.FlowAttribute(key, outcome.attributes[key]);
            }
        }
        this.Outcome = outcome;
    }
    Object.defineProperty(FlowOutcome.prototype, "developerName", {
        get: function () {
            return this.DeveloperName;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlowOutcome.prototype, "id", {
        get: function () {
            return this.Id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlowOutcome.prototype, "isBulkAction", {
        get: function () {
            return this.IsBulkAction;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlowOutcome.prototype, "isOut", {
        get: function () {
            return this.IsOut;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlowOutcome.prototype, "label", {
        get: function () {
            return this.Label;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlowOutcome.prototype, "order", {
        get: function () {
            return this.Order;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlowOutcome.prototype, "pageActionBindingType", {
        get: function () {
            return this.PageActionBindingType;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlowOutcome.prototype, "pageActionType", {
        get: function () {
            return this.PageActionType;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlowOutcome.prototype, "pageObjectBindingId", {
        get: function () {
            return this.PageObjectBindingId;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlowOutcome.prototype, "attributes", {
        get: function () {
            return this.Attributes;
        },
        enumerable: true,
        configurable: true
    });
    FlowOutcome.prototype.iFlowOutcome = function () {
        return this.Outcome;
    };
    return FlowOutcome;
}());
exports.FlowOutcome = FlowOutcome;
