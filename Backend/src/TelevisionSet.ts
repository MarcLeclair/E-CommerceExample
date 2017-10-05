
	
import { dbconnection } from "./dbconnection";
import { Electronic } from "./electronic";

var db = new dbconnection().getDBConnector();

export  class TelevisionSet extends Electronic{
    private dimensions: string;
    private type: string;

    constructor(id: string, weight: number, modelNumber: string, brand: string, price: number, dimensions: string , type : string) {
        super(id, weight, modelNumber, brand, price,"TelevisionSet");
        this.dimensions = dimensions;
        this.type = type;
    }

    private setDimensions(dimensions: string) {this.dimensions = dimensions; }

    private setType(type : string) { this.type = type; }



    getDimension() : string {return this.dimensions; }

    getType(): string{   return this.type; }

   


	//Save Television Set onto database
    save(): boolean {
        db.none("INSERT INTO televisionsets VALUES ('" + this.id + "'," + this.weight + ",'" + this.modelNumber + "','" + this.brand + "'," + this.price + ",'" + this.dimensions + "','" + this.type + "')")
            .then(function () {
                console.log("Television added to db");
            })
            .catch(function (err) {
                console.log("Error in adding Television to the db");
                return false;
            });
        return true;
    }


	//Retrieve a set based on a unique ID
    public static find(id: string): Electronic {
        let televisionSet: TelevisionSet;
        db.one('SELECT * FROM televisionsets WHERE id =' + id + ';')
            .then(function (row) {
                televisionSet = new TelevisionSet(row.id, row.weight, row.modelNumber, row.brand, row.price, row.dimensions, row.type)
            }).catch(function (err) {
                console.log("No matching object found");
                return null;
            });
        return televisionSet;
    }

    public static delete(tv: TelevisionSet): boolean {

        let deletedOrNot: boolean;
        db.query('Delete * FROM televisionsets WHERE id=' + tv.id + ';', function (err, result) {
            if (err) {
                deletedOrNot = false;
                throw err;
            }
            console.log("Number of records deleted: " + result.affectedRows);
            if (result.length > 0) deletedOrNot = true;
        });

        return deletedOrNot;
    }

    
}

