import multer, { Options } from 'multer';
import crypto from 'crypto';
import path from 'path';

const options: Options = {
  dest: path.resolve(__dirname, '..', '..', 'tmp', 'uploads'),
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, path.resolve(__dirname, '..', '..', 'tmp', 'uploads'));
    },
    filename: (req, file, cb) => {
      crypto.randomBytes(16, (err, hash) => {
        const filename = `${hash.toString('hex')}-${file.originalname}`;

        if (err) cb(err, filename);

        cb(null, filename);
      });
    },
  }),
};

export default options;
