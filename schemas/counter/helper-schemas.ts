import Joi from "../../src/@input/joi";
import { IBasicDocument } from "../helper-schemas";
import { ObjectId } from "bson";

export const CounterSchema = Joi.object({
	count: Joi.number().required(),
});

export interface ICounter extends IBasicDocument {
	userId: ObjectId;
	count: number;
}
