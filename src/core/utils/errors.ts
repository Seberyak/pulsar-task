export class MError extends Error {
	errorCode: number;
	errorMessage: string | Record<string, any>;
	errorMessageType: string;

	constructor(errorCode: number, errorMessage: string | Record<string, any>) {
		super(JSON.stringify(errorMessage));
		this.errorCode = errorCode;
		this.errorMessageType = "json";
		this.errorMessage = { message: errorMessage };
	}
}
