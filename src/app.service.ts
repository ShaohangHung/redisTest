import { Injectable } from '@nestjs/common';
import os from 'node:os';

@Injectable()
export class AppService {
  getHello(): string {
    return `Hello World, my hostname is ${os.hostname()}`;
  }
}
