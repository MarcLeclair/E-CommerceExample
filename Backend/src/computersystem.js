"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var electronic_1 = require("./electronic");
var ComputerSystem = (function (_super) {
    __extends(ComputerSystem, _super);
    function ComputerSystem(id, weight, modelNumber, brand, price, electronicType, processor, ram, cpus, hardDrive, os) {
        var _this = _super.call(this, id, weight, modelNumber, brand, price, electronicType) || this;
        _this.processor = processor;
        _this.ram = ram;
        _this.cpus = cpus;
        _this.hardDrive = hardDrive;
        _this.os = os;
        return _this;
    }
    ComputerSystem.prototype.getProcessor = function () { return this.processor; };
    ComputerSystem.prototype.getRam = function () { return this.ram; };
    ComputerSystem.prototype.getCpus = function () { return this.cpus; };
    ComputerSystem.prototype.getHardDrive = function () { return this.hardDrive; };
    ComputerSystem.prototype.getOs = function () { return this.os; };
    ComputerSystem.prototype.setProcessor = function (processor) { this.processor = processor; };
    ComputerSystem.prototype.setRam = function (ram) { this.ram = ram; };
    ComputerSystem.prototype.setCpus = function (cpus) { this.cpus = cpus; };
    ComputerSystem.prototype.setHardDrive = function (hardDrive) { this.hardDrive = hardDrive; };
    ComputerSystem.prototype.setOs = function (os) { this.os = os; };
    return ComputerSystem;
}(electronic_1.Electronic));
exports.ComputerSystem = ComputerSystem;
//# sourceMappingURL=computersystem.js.map