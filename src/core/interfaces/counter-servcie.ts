import { IAGetCounts, IRGetCounts } from "../../../schemas/counter/validators";
import { ObjectId } from "bson";
import { ICounter } from "../../../schemas/counter/helper-schemas";

export interface ICounterService {
	getByUserId(args: IAGetCounts): Promise<IRGetCounts>;
	create(args: { userId: ObjectId }): Promise<ICounter>;
}
