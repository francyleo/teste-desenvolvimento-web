import fs from 'fs';
import csvParser from 'csv-parse';
import Pokemons from '@schemas/Pokemons';

class UploadListPokemonsService {
  async execute(pokemonsFileInfo: Express.Multer.File): Promise<void> {
    const { path } = pokemonsFileInfo;

    const parsers = fs
      .createReadStream(path)
      .pipe(csvParser({ delimiter: ';', from_line: 2 }));

    parsers.on('data', async line => {
      const [
        id,
        name,
        pokedex_number,
        img_name,
        generation,
        evolution_age,
        evolved,
        family_id,
        cross_gen,
        type_one,
        type_two,
        weather_one,
        weather_two,
        stat_total,
        atk,
        def,
        sta,
        status_total,
        legendary,
        aquireable,
        spawns,
        regional,
        raidable,
        hatchable,
        shiny,
        nest,
        is_new,
        not_gettable,
        future_evolve,
        cp_39,
        cp_40,
      ] = line;

      await Pokemons.create({
        id,
        name,
        pokedex_number,
        img_name,
        generation,
        evolution_age,
        evolved,
        family_id,
        cross_gen,
        type_one,
        type_two,
        weather_one,
        weather_two,
        stat_total,
        atk,
        def,
        sta,
        status_total,
        legendary,
        aquireable,
        spawns,
        regional,
        raidable,
        hatchable,
        shiny,
        nest,
        is_new,
        not_gettable,
        future_evolve,
        cp_39,
        cp_40,
      });
    });

    await new Promise(resolve => parsers.on('end', resolve));
  }
}

export default UploadListPokemonsService;
