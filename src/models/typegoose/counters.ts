import { ICounter } from "../../../schemas/counter/helper-schemas";
import { ObjectId } from "bson";
import { modelOptions, Prop, ReturnModelType } from "@typegoose/typegoose";
import { getTypegooseOptions } from "../../core/utils/db-config";

@modelOptions(getTypegooseOptions("counters"))
export class Counter implements Omit<ICounter, "_id"> {
	@Prop()
	count: number;

	@Prop()
	userId: ObjectId;

	@Prop()
	createdAt: Date;

	@Prop()
	updatedAt: Date;
}
export type ICounterModel = ReturnModelType<typeof Counter>;
