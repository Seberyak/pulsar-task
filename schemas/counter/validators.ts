import { ObjectId } from "bson";

export interface IAGetCounts {
	userId: ObjectId;
}
export interface IRGetCounts {
	count: number;
}
