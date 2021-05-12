import { User } from "./models/typegoose/user";
import { TypegooseModule } from "nestjs-typegoose";
import { Counter } from "./models/typegoose/counters";
import { AuthController } from "./api/auth/controller";
import { AuthService } from "./core/services/auth";
import { CounterService } from "./core/services/counter";
import { UserService } from "./core/services/user";

require("dotenv").config();

export const Resources = {
	Controllers: [AuthController],
	Providers: [AuthService, CounterService, UserService],
	Imports: [
		TypegooseModule.forRoot(
			`mongodb://${process.env.MONGO_IP ?? "localhost"}:${process.env
				.MONGODB_PORT ?? 27017}/nest`,
			{
				useNewUrlParser: true,
			}
		),
		TypegooseModule.forFeature([User, Counter]),
	],
};
