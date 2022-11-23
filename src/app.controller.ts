import {
  Body,
  Controller,
  Get,
  Post,
  Res,
  HttpStatus,
  Query,
} from '@nestjs/common';
import { AppService } from './app.service';
import { CacheService } from './cache/cache.service';
import { GetKeyValueDto } from './get-key-value.dto';
import { PostKeyValueDto } from './post-key-value.dto';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly cacheService: CacheService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post(`keyValue`)
  async setKeyValue(@Body() body: PostKeyValueDto, @Res() res): Promise<any> {
    await this.cacheService.set(body.key, body.value, body.seconds);

    return res.status(HttpStatus.OK).send(`success`);
  }

  @Get(`keyValue`)
  async getKeyValue(@Query() query: GetKeyValueDto, @Res() res): Promise<any> {
    const result = await this.cacheService.get(query.key);

    return res.status(HttpStatus.OK).send({ data: result });
  }
}
