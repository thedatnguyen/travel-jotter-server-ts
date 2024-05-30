import { Module } from '@nestjs/common';
import { DropboxService } from './dropbox/dropbox.service';
import { WeavyService } from './weavy/weavy.service';

@Module({
  providers: [DropboxService],
})
export class ConfigsModule {}
