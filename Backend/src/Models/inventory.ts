import { dbconnection } from "./dbconnection";
import { Electronic} from "./electronic";

var db =   new dbconnection().getDBConnector();

export class Inventory {

    private static electronics :Electronic[] = new Array<Electronic>();
    private serialNumber: string;
	private inventoryType: Electronic;

    constructor( serialNumber: string, inventoryType: Electronic) {
        this.serialNumber = serialNumber;
        this.inventoryType = inventoryType;
    }

    public setserialNumber(serialNumber:string): void{this.serialNumber = serialNumber;}
    public getserialNumber():string{return this.serialNumber;}

    public setinventoryType(inventoryType:Electronic): void{this.inventoryType = inventoryType;}
    public getinventoryType():Electronic{return this.inventoryType;}

    public static setElectronics(eletronics:Electronic[]):void{
        Inventory.electronics = eletronics;
    }
    public static getElectronics():Electronic[]{
        return Inventory.electronics;
    }
    public async delete(): Promise<boolean>{
        return db.none("DELETE FROM inventories WHERE \"serialNumber\" ='"+ this.serialNumber + "';")
            .then(function () {
                return true;
            }).catch(function (err) {
                console.log("No matching object found for delete:"+ err);
                return false;
            });
    }
    public async save(): Promise<boolean> {
		return db.none("INSERT INTO inventories VALUES ('"+this.serialNumber +"','"+this.inventoryType.getId()+"');")
			.then(function(){
				console.log("monitor added to db");
				return true;
			}).catch(function (err) {
				console.log("Error adding monitor to the db: " + err);
				return false;
			});
	}

    public static find(serialNumber:string): Promise<Inventory>
    {
       return db.one('SELECT * FROM clients WHERE serialNumber =' + serialNumber + ';')
            .then(function (row) {
                return new Inventory(row.serialNumber, null);
            }).catch(function (err) {
                console.log("No matching object found: "+ err);
                return null;
            });
    }

    public static async findAll(): Promise<Inventory[]> {
        return db.many('SELECT * FROM inventories')
            .then(function (data) {
                let inventoryObjects: Inventory[] = new Array<Inventory>();
                for(let i=0;i<data.length;i++){
                    inventoryObjects.push(new Inventory(data[i].serialNumber, Inventory.getProduct(data[i].electronicID)));
                }
                return inventoryObjects;
            }).catch(function (err) {
                console.log("Error in getting all inventory:" + err);
                return null;
            });
    } 

    public static getProduct(productId:string): Electronic {
		let elecIterator = Inventory.getElectronics();
		for(var iter = 0; iter < elecIterator.length; iter++){
			if(productId == elecIterator[iter].getId())
				return elecIterator[iter];
		}
		return null;
	}

}