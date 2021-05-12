import { IUser } from "./helper-schemas";
import { ICounter } from "../counter/helper-schemas";
import { XOR } from "../../src/core/utils/xor";
import Joi from "../../src/@input/joi";

export const APOSTLoginSchema = Joi.object({
	login: Joi.string()
		.min(4)
		.required(),
	password: Joi.string()
		.min(8)
		.required(),
});

export type IAPOSTLogin = Pick<IUser, "login" | "password">;

type IWelcomeMessage = {
	data: "Welcome message";
};
type ICountData = Pick<ICounter, "count"> & {
	isLuckyPerson?: true;
};

export type IRPOSTLogin = XOR<IWelcomeMessage, ICountData>;
