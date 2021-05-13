import {
	ConnectedSocket,
	MessageBody,
	OnGatewayInit,
	SubscribeMessage,
	WebSocketGateway,
	WsResponse,
	WebSocketServer,
} from "@nestjs/websockets";
import { Logger } from "@nestjs/common";
import { Server } from "socket.io";
import { IAppGateWay } from "./interfaces/gateway";

@WebSocketGateway(3001)
export class AppGateWay implements OnGatewayInit, IAppGateWay {
	private logger: Logger = new Logger();
	@WebSocketServer() wss: Server;

	afterInit(server: Server): any {
		this.logger.log("Socket Initialized");
	}

	@SubscribeMessage("messageToServer")
	handleEvent(
		@MessageBody() data: string,
		@ConnectedSocket() client: AppGateWay
	): WsResponse<string> {
		return { event: "messageToClient", data: "Hello World!" };
	}

	sentToClients(eventName: string, args: any): void {
		this.wss.emit(eventName, args);
	}
}
