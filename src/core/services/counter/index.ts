import { Injectable } from "@nestjs/common";
import { ICounterService } from "../../interfaces/counter-servcie";
import {
	IAGetCounts,
	IRGetCounts,
} from "../../../../schemas/counter/validators";
import { Counter, ICounterModel } from "../../../models/typegoose/counters";
import { InjectModel } from "nestjs-typegoose";
import { ICounter } from "../../../../schemas/counter/helper-schemas";
import { toInsertKeys } from "../../../../schemas/helper-schemas";
import { ObjectId } from "bson";

@Injectable()
export class CounterService implements ICounterService {
	constructor(
		@InjectModel(Counter) private readonly _counterModel: ICounterModel
	) {}

	public async create(args: { userId: ObjectId }): Promise<ICounter> {
		const dataToSave: Omit<ICounter, toInsertKeys> = {
			count: 1,
			...args,
		};
		const counterModel = new this._counterModel(dataToSave);
		return counterModel.save();
	}

	async getByUserId(args: IAGetCounts): Promise<IRGetCounts> {
		const countData = await this._counterModel.findOne(args);
		if (!countData) {
			const { count } = await this.create(args);
			return { count };
		}
		countData.count++;
		await countData.save();
		return { count: countData.count };
	}
}
