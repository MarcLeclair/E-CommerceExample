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

    protected abstract getProcessor(): string;
    protected abstract getRam(): number;
    protected abstract getCpus(): number;
    protected abstract getHardDrive(): number;
    protected abstract getOs(): string;

    protected abstract setProcessor(processor: string);
    protected abstract setRam(ram: number);
    protected abstract setCpus(cpus: number);
    protected abstract setHardDrive(hardDrive: number);
    protected abstract setOs(os: string);
}