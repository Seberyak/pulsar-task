import { Controller, Post } from "@nestjs/common";
import { wValidatedArg } from "../../core/utils/decorators/validation";
import {
	APOSTLoginSchema,
	IAPOSTLogin,
} from "../../../schemas/auth/validators";
import { AuthService } from "../../core/services/auth";

@Controller("api/auth")
export class AuthController {
	constructor(private readonly _authService: AuthService) {}

	@Post("login")
	async login(
		@wValidatedArg(APOSTLoginSchema) args: IAPOSTLogin
	): Promise<any> {
		return this._authService.login(args);
	}
}
