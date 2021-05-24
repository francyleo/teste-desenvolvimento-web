import mongoose, { ConnectOptions } from 'mongoose';

const db_user = process.env.MONGO_USER;
const db_password = process.env.MONGO_PASSWORD;
const db_name = process.env.MONGO_DATABASE;

const options: ConnectOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
};

mongoose.Promise = global.Promise;
mongoose.connect(
  `mongodb+srv://${db_user}:${db_password}@cluster0.gpujl.mongodb.net/${db_name}?retryWrites=true&w=majority`,
  options,
);
