import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

export const setupSwagger = async (app) => {
  const config = new DocumentBuilder()
    .addBearerAuth()
    .setTitle('Redis Test')
    .setDescription('This is a server for redis test')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config, {
    include: [],
  });
  const urlPath = `swagger`;
  SwaggerModule.setup(urlPath, app, document);
};
