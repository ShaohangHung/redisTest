import { Injectable } from '@nestjs/common';
import * as os from 'os';

@Injectable()
export class AppService {
  getHello(): string {
    console.log(os.networkInterfaces());
    return `Hello World, my hostname = ${os.hostname()}`;
  }
}
