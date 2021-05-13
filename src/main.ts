import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { ErrorFilter } from "./api/error-filter";

async function bootstrap() {
	const app = await NestFactory.create(AppModule);
	app.useGlobalFilters(new ErrorFilter());
	app.use;
	await app.listen(3000);
}

bootstrap();
