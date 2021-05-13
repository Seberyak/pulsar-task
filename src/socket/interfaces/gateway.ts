export interface IAppGateWay {
	sentToClients(eventName: string, args: any): void;
}
