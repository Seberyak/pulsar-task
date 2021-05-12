import { IAPOSTLogin } from "../../../schemas/auth/validators";
import { ObjectId } from "bson";
import { IUser } from "../../../schemas/auth/helper-schemas";
import { XOR } from "../utils/xor";

export interface IUserService {
	getUserId(args: IAPOSTLogin): Promise<XOR<ObjectId, undefined>>;
	create(args: IAPOSTLogin): Promise<IUser>;
}
