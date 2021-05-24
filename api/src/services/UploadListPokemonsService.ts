import fs from 'fs';
import csv from 'csv-parser';

class UploadListPokemonsService {
  async execute(pokemonsFileInfo: Express.Multer.File): Promise<void> {
    const { path } = pokemonsFileInfo;

    fs.createReadStream(path)
      .pipe(csv())
      .on('data', data => {
        console.log(data);
      });
  }
}

export default UploadListPokemonsService;
