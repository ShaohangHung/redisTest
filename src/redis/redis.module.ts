import { Module } from '@nestjs/common';
import {
  RedisModule as RedisModuleLib,
  RedisModuleOptions,
} from '@liaoliaots/nestjs-redis';
import { CacheService } from '../cache/cache.service';
import { ConfigService } from '@nestjs/config';

// const redisConfig = async (
//   config: ConfigService,
// ): Promise<ClusterModuleOptions> => ({
//   closeClient: true,
//   readyLog: true,
//   config: {
//     nodes: [
//       {
//         host: config.get<string>('redis.host'),
//         port: config.get<number>('redis.port'),
//       },
//     ],
//   },
// });

@Module({
  imports: [
    RedisModuleLib.forRootAsync({
      useFactory: (configService: ConfigService) => {
        const options: RedisModuleOptions = {
          config: {
            host: configService.get<string>('redis.host'),
            port: configService.get<number>('redis.port'),
          },
        };
        return options;
      },
      inject: [ConfigService],
    }),
    // ClusterModule.forRootAsync({
    //   imports: [ConfigModule],
    //   useFactory: redisConfig,
    //   inject: [ConfigService],
    // }),
  ],
  providers: [CacheService],
  exports: [CacheService],
})
export class RedisModule {}
