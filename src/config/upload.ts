import path from 'path';
import crypto from 'crypto';
import multer from 'multer';

const destinationPath = path.resolve(__dirname, '..', '..', 'tmp');

export default {
  directory: destinationPath,
  storage: multer.diskStorage({
    destination: destinationPath,
    filename(req, file, callback) {
      const fileHash = crypto.randomBytes(10).toString('hex');
      const fileName = `${fileHash} - ${file.originalname}`;

      return callback(null, fileName);
    },
  }),
};
