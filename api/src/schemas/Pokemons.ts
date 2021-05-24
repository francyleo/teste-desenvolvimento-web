import mongoose, { Document, Schema, PaginateModel } from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';
import PokemonType from '../@types/Pokemons';

export type PokemonDocument = Document & PokemonType;
type PokemonModel = PaginateModel<PokemonDocument>;

const PokemonsSchema = new Schema({
  id: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
    unique: true,
  },
  pokedex_number: {
    type: String,
  },
  img_name: {
    type: String,
    required: true,
  },
  generation: {
    type: String,
    required: true,
  },
  evolution_age: {
    type: String,
  },
  evolved: {
    type: String,
    required: true,
  },
  family_id: {
    type: String,
  },
  cross_gen: {
    type: String,
    required: true,
  },
  type_one: {
    type: String,
    required: true,
  },
  type_two: {
    type: String,
  },
  weather_one: {
    type: String,
    required: true,
  },
  weather_two: {
    type: String,
  },
  stat_total: {
    type: String,
  },
  atk: {
    type: String,
    required: true,
  },
  def: {
    type: String,
    required: true,
  },
  sta: {
    type: String,
    required: true,
  },
  status_total: {
    type: String,
    required: true,
  },
  legendary: {
    type: String,
    required: true,
  },
  aquireable: {
    type: String,
    required: true,
  },
  spawns: {
    type: String,
    required: true,
  },
  regional: {
    type: String,
    required: true,
  },
  raidable: {
    type: String,
    required: true,
  },
  hatchable: {
    type: String,
    required: true,
  },
  shiny: {
    type: String,
    required: true,
  },
  nest: {
    type: String,
    required: true,
  },
  is_new: {
    type: String,
    required: true,
  },
  not_gettable: {
    type: String,
    required: true,
  },
  future_evolve: {
    type: String,
    required: true,
  },
  cp_39: {
    type: String,
  },
  cp_40: {
    type: String,
  },
});

PokemonsSchema.plugin(mongoosePaginate);

const Pokemons = mongoose.model<PokemonDocument, PokemonModel>(
  'Pokemons',
  PokemonsSchema,
);

export default Pokemons;
