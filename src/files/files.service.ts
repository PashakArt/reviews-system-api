import { Injectable } from '@nestjs/common';
import { path } from 'app-root-path';
import { promises } from 'fs';

@Injectable()
export class FilesService {
  async saveFiles(file: Express.Multer.File): Promise<void> {
    const dateFolder = new Date().toISOString().slice(0, 10);
    const uploadFolder = `${path}/uploads/${dateFolder}`;
    try {
      await promises.access(uploadFolder);
    } catch (err) {
      await promises.mkdir(uploadFolder, { recursive: true });
    } finally {
      return promises.writeFile(
        `${uploadFolder}/${file.originalname}`,
        file.buffer,
      );
    }
  }
}
