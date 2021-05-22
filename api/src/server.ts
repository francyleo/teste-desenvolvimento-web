import 'dotenv/config';
import app from './app';

app.listen(process.env.PORT || 3000, () => {
  console.log(`🔥 Server runing in ${process.env.API_URL}:${process.env.PORT}`);
});
