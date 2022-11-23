import { Injectable } from '@nestjs/common';
import { RedisService } from '@liaoliaots/nestjs-redis';

@Injectable()
export class CacheService {
  public client;
  constructor(private redisService: RedisService) {
    this.getClient();
  }
  getClient() {
    this.client = this.redisService.getClient();
  }

  async set(key: string, value: any, seconds?: number): Promise<void> {
    value = JSON.stringify(value);
    if (!this.client) {
      this.getClient();
    }
    if (!seconds) {
      await this.client.set(key, value);
    } else {
      await this.client.set(key, value, 'EX', seconds);
    }
  }

  async get(key: string) {
    if (!this.client) {
      this.getClient();
    }
    const data = await this.client.get(key);
    return !data ? null : JSON.parse(data);
  }
}
