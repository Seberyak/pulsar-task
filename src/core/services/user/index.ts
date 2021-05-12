import { IUserService } from "../../interfaces/user-service";
import { IAPOSTLogin } from "../../../../schemas/auth/validators";
import { ObjectId } from "bson";
import { IUser } from "../../../../schemas/auth/helper-schemas";
import { toInsertKeys } from "../../../../schemas/helper-schemas";
import { IUserModel, User } from "../../../models/typegoose/user";
import { InjectModel } from "nestjs-typegoose";

export class UserService implements IUserService {
	constructor(
		@InjectModel(User)
		private readonly _userModel: IUserModel
	) {}
	async getUserId(args: IAPOSTLogin): Promise<ObjectId> {
		const user = await this._userModel.findOne(args);
		if (!user) {
			const { _id } = await this.create(args);
			return _id;
		}
		return user._id;
	}
	async create(args: IAPOSTLogin): Promise<IUser> {
		const docToSave: Omit<IUser, toInsertKeys> = args;
		const model = new this._userModel(docToSave);
		return model.save();
	}
}
