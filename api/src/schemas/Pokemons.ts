import PokemonType from '../@types/Pokemons';
import mongoose, { Document, Model, Schema } from 'mongoose';

export type PokemonDocument = Document & PokemonType;

type PokemonModel = Model<PokemonDocument>;

const PokemonsSchema = new Schema({
  id: {
    type: Number,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
    unique: true,
  },
  pokedex_number: {
    type: Number,
    required: true,
  },
  img_name: {
    type: String,
    required: true,
  },
  generation: {
    type: Number,
    required: true,
  },
  evolution_age: {
    type: Number,
    required: true,
  },
  evolved: {
    type: Number,
    required: true,
  },
  family_id: {
    type: Number,
    required: true,
  },
  cross_gen: {
    type: Number,
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
    type: Number,
  },
  atk: {
    type: Number,
    required: true,
  },
  def: {
    type: Number,
    required: true,
  },
  sta: {
    type: Number,
    required: true,
  },
  legendary: {
    type: Number,
    required: true,
  },
  aquireable: {
    type: Number,
    required: true,
  },
  spawns: {
    type: Number,
    required: true,
  },
  regional: {
    type: Number,
    required: true,
  },
  raidable: {
    type: Number,
    required: true,
  },
  hatchable: {
    type: Number,
    required: true,
  },
  shiny: {
    type: Number,
    required: true,
  },
  nest: {
    type: Number,
    required: true,
  },
  new: {
    type: Number,
    required: true,
  },
  not_gettable: {
    type: Number,
    required: true,
  },
  future_evolve: {
    type: Number,
    required: true,
  },
});

const Pokemons = mongoose.model<PokemonDocument, PokemonModel>(
  'Pokemons',
  PokemonsSchema,
);

export default Pokemons;
