import multer from 'multer';

import {extname, resolve} from 'path';

export default {
    storage: multer.diskStorage({
        destination: resolve(__dirname, '..', '..','src', 'tmp', 'uploads'),
        filename: (req, file, cb, err) => {
            if(err) return cb(err);
            return cb(null, file.fieldname + "-" + Date.now() + "-" + file.originalname)
        }
    })
}