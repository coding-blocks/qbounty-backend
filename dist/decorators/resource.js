"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
function PrimaryKey(indexType) {
    return (target, key) => {
        target.constructor.primaryKey = indexType;
    };
}
exports.PrimaryKey = PrimaryKey;
function Examples(target, key) {
}
exports.Examples = Examples;
//# sourceMappingURL=resource.js.map