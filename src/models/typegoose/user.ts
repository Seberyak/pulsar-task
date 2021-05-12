import { IUser } from "../../../schemas/auth/helper-schemas";
import { ObjectId } from "bson";
import { modelOptions, Prop, ReturnModelType } from "@typegoose/typegoose";
import { getTypegooseOptions } from "../../core/utils/db-config";
import { IAPOSTLogin } from "../../../schemas/auth/validators";

@modelOptions(getTypegooseOptions("users"))
export class User implements Omit<IUser, "_id"> {
	@Prop()
	login: string;

	@Prop()
	password: string;

	@Prop()
	createdAt: Date;

	@Prop()
	updatedAt: Date;
}

export type IUserModel = ReturnModelType<typeof User>;
