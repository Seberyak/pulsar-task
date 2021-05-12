import Joi from "../../src/@input/joi";
import { BasicDocumentSchema, IBasicDocument } from "../helper-schemas";

export const UserSchema = BasicDocumentSchema.keys({
	login: Joi.string()
		.min(4)
		.required(),
	password: Joi.string()
		.min(8)
		.required(),
});

export interface IUser extends IBasicDocument {
	login: string;
	password: string;
}
