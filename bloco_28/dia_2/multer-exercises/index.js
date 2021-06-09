require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const multer = require('multer');

const { PORT } = process.env;

const controllers = require('./controllers');
const middlewares = require('./middlewares');

const app = express();

app.use(
  cors({
    origin: `http://localhost:${PORT}`,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Authorization'],
  }),
);

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    // if (file.mimetype !== 'image/png') {
    //   const error = { "message": "Extension must be `png`" };
    //   callback(error, null)
    // }
    callback(null, 'uploads');
  },
  filename: (req, file, callback) => {
    callback(null, `${Date.now()}-${file.originalname}`);
  }
})

const fileFilter = (req, file, cb) => {
  if (file.mimetype !== 'image/png') {
    req.fileValidationError = true;
    return cb(null, false);
  }
  cb(null, true);
}
const upload = multer({ storage, fileFilter })

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/ping', controllers.ping);

app.post('/upload', upload.single('file'), (req, res) => {
  if (req.fileValidationError)
    return res.status(403).send({ error: { message: "Extension must be `png`" } });
  res.status(200).json({ message: 'Upload realizado com sucesso!' })
});

app.use(middlewares.error);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
