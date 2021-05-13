import { IUserService } from "../../interfaces/user-service";
import { IAPOSTLogin } from "../../../../schemas/auth/validators";
import { ObjectId } from "bson";
import { IUser } from "../../../../schemas/auth/helper-schemas";
import { toInsertKeys } from "../../../../schemas/helper-schemas";
import { IUserModel, User } from "../../../models/typegoose/user";
import { InjectModel } from "nestjs-typegoose";
import { AppGateWay } from "../../../socket/gateway";

export class UserService implements IUserService {
	constructor(
		@InjectModel(User)
		private readonly _userModel: IUserModel,
		private readonly _appGateWay: AppGateWay
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
		const newUser = await model.save();
		await this.handleUsersCount();
		return newUser;
	}
	async handleUsersCount(): Promise<void> {
		const usersCount = await this._userModel.estimatedDocumentCount();
		if (usersCount === 3) {
			this._appGateWay.sentToClients(
				"luckyPerson",
				"You’re lucky person :)"
			);
		}
	}
}
