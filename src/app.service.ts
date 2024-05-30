import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  checkServerAlive(): string {
    return `
    <h3 style="text-align: center;">🎉 🎉 🎉 server alive 🎉 🎉 🎉</h3>
    <div style="position: absolute;bottom:5px; width: 100%; text-align:center">
    &copy; copyright by jiathinhj
    </div>
    `;
  }
}
