import { ObjectId } from "bson";
import Joi from "../src/@input/joi";

export const BasicDocumentSchema = Joi.object({
	_id: Joi.objectId().required(),
	createdAt: Joi.date().required(),
	updatedAt: Joi.date().required(),
});

export interface IBasicDocument {
	_id: ObjectId;
	createdAt: Date;
	updatedAt: Date;
}

///

export const InsertStripKeysSchema = {
	_id: Joi.any().strip(),
	createdAt: Joi.any().strip(),
	updatedAt: Joi.any().strip(),
};

export type toInsertKeys = "_id" | "createdAt" | "updatedAt";

export const UpdateStripKeysSchema = {
	createdAt: Joi.any().strip(),
	updatedAt: Joi.any().strip(),
};

export type toUpdateKeys = "createdAt" | "updatedAt";

///
