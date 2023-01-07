import { Module } from '@nestjs/common';
import { FilesController } from './files.controller';
import { FilesService } from './files.service';
import { ServeStaticModule } from '@nestjs/serve-static';
import { resolve } from 'path';

@Module({
  imports: [ServeStaticModule.forRoot({
    rootPath: resolve(__dirname, '..', '..', 'uploads'),
    serveRoot: '/static/',
  })],
  controllers: [FilesController],
  providers: [FilesService],
})
export class FilesModule {}
