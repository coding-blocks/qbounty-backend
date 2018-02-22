"use strict";
// tslint:disable: no-unused-expression
Object.defineProperty(exports, "__esModule", { value: true });
const jagapi = require("jagapi");
require("reflect-metadata");
const Joi = jagapi.Joi;
function addAttribute(target, key, type) {
    if (!target.constructor.attributes) {
        target.constructor.attributes = {};
    }
    target.constructor.attributes[key] = Joi[type]();
}
function JoiField(target, key) {
    let joiType = 'any';
    switch (Reflect.getMetadata('design:type', target, key)) {
        case Boolean:
            joiType = 'boolean';
            break;
        case Number:
            joiType = 'number';
            break;
        case String:
            joiType = 'string';
            break;
    }
    addAttribute(target, key, joiType);
}
exports.JoiField = JoiField;
function JoiString(target, key) {
    addAttribute(target, key, 'string');
}
exports.JoiString = JoiString;
function JoiNumberOnly(target, key) {
    addAttribute(target, key, 'number');
}
function JoiNumberWithParams(params) {
    return (target, key) => {
        addAttribute(target, key, 'number');
        const attributes = target.constructor.attributes;
        params.max ? attributes[key] = attributes[key].max(params.max) : void 0;
        params.min ? attributes[key] = attributes[key].min(params.min) : void 0;
        params.greater ? attributes[key] = attributes[key].greater(params.greater) : void 0;
        params.less ? attributes[key] = attributes[key].less(params.less) : void 0;
    };
}
exports.JoiNumber = (targetOrParams, key) => {
    if (!key && typeof !(targetOrParams.constructor === 'function')) {
        return JoiNumberWithParams(targetOrParams);
    }
    else {
        JoiNumberOnly(targetOrParams, key);
    }
};
//# sourceMappingURL=joi.js.map