import { Global, Module } from '@nestjs/common';
import { ConfigModule as NestConfigModule } from '@nestjs/config';
import redisConfig from './redis.config';

@Global()
@Module({
  imports: [
    NestConfigModule.forRoot({
      load: [redisConfig],
      cache: true,
      isGlobal: true,
    }), // Config module
  ],
})
export class ConfigModule {}
