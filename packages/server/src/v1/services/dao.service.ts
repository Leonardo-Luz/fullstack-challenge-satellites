import { Model, ModelStatic } from "sequelize";
import { MakeNullishOptional } from "sequelize/types/utils";

export class DAO<I extends Model<any, any> ,T extends MakeNullishOptional<I["_creationAttributes"]> | undefined, V>{
    
    public getAll = async ( model: ModelStatic<I> ) => {
        return await model.findAll();
    }

    public getById = async ( model: ModelStatic<I>, value: V ) => {
        return await model.findByPk(value as string | number);
    }

    public create = async (  model: ModelStatic<I>, toCreate: T ) => {
        return await model.build({ ...toCreate }).save()
    }

    public update = async ( toUpdate: I ) => {
        return await toUpdate.save();
    }
    
    public delete = async ( toDelete: I ) => {
        return await toDelete.destroy();
    }
}