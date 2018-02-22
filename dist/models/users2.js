"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = require("../decorators/joi");
const resource_1 = require("../decorators/resource");
class User {
    constructor() {
        this.type = 'users';
    }
}
__decorate([
    resource_1.PrimaryKey('autoincrement'),
    __metadata("design:type", String)
], User.prototype, "id", void 0);
__decorate([
    joi_1.JoiField,
    __metadata("design:type", String)
], User.prototype, "name", void 0);
__decorate([
    joi_1.JoiNumber({ max: 100 }),
    __metadata("design:type", Number)
], User.prototype, "age", void 0);
const u = new User();
console.log(u);
console.log(User);
//# sourceMappingURL=users2.js.map