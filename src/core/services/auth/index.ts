import { Injectable } from "@nestjs/common";
import { IAuthService } from "../../interfaces/auth-service";
import { IAPOSTLogin, IRPOSTLogin } from "../../../../schemas/auth/validators";
import { CounterService } from "../counter";
import { ObjectId } from "bson";
import { IUserModel, User } from "../../../models/typegoose/user";
import { InjectModel } from "nestjs-typegoose";
import { UserService } from "../user";

@Injectable()
export class AuthService implements IAuthService {
	constructor(
		@InjectModel(User)
		private readonly _userModel: IUserModel,
		private readonly _counterService: CounterService,
		private readonly _userService: UserService
	) {}

	async login(args: IAPOSTLogin): Promise<IRPOSTLogin> {
		const userId = await this._userService.getUserId(args);
		const { count } = await this._counterService.getByUserId({
			userId,
		});
		if (count === 1) {
			return { data: "Welcome message" };
		} else if (count === 4) {
			return { count, isLuckyPerson: true };
		}
		// return { count: 1 };
		return { count };
	}
}
