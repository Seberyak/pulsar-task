import { IAPOSTLogin, IRPOSTLogin } from "../../../schemas/auth/validators";

export interface IAuthService {
	login(args: IAPOSTLogin): Promise<IRPOSTLogin>;
}
