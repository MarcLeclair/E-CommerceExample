import { Electronic } from "./electronic";

export abstract class ComputerSystem extends Electronic {
    processor: string;
    ram: number;
    cpus: number;
    hardDrive: number;
    os: string;

    constructor(id: string, weight: number, modelNumber: string, brand: string, price: number, electronicType: string, processor: string, ram: number, cpus: number, hardDrive: number, os: string) {
        super(id, weight, modelNumber, brand, price, electronicType);
        this.processor = processor;
        this.ram = ram;
        this.cpus = cpus;
        this.hardDrive = hardDrive;
        this.os = os;
    }
    abstract save(): boolean;

    protected getProcessor(): string { return this.processor;}
    protected getRam(): number { return this.ram;}
    protected getCpus(): number { return this.cpus; }
    protected getHardDrive(): number { return this.hardDrive;}
    protected getOs(): string { return this.os;}

    protected setProcessor(processor: string): void { this.processor = processor;}
    protected setRam(ram: number): void { this.ram = ram; }
    protected setCpus(cpus: number): void { this.cpus = cpus; }
    protected setHardDrive(hardDrive: number): void { this.hardDrive = hardDrive; }
    protected setOs(os: string): void { this.os = os; }
}