
const path = require('path');
const { promisify } = require('util');

const express = require('express');
const fs = require('fs-extra');
const gm = require('gm').subClass({ imageMagick: true });
const tempy = require('tempy');

const app = express();
const port = process.env.PORT || 3000;
const baseimage = path.resolve(process.cwd(), 'static/base.png');

async function processPng(text, options = {}) {
  const tempfile = tempy.file({ extension: 'png' });
  fs.mkdirpSync(path.dirname(tempfile));

  options = {
    fontSize: 16,
    x: 0,
    y: -2,
    gravity: 'South',
    ...options,
  };

  const image = gm(baseimage);
  image.font('Noto-Sans-Mono-CJK-SC-Regular');
  image.fontSize(options.fontSize);
  image.drawText(options.x, options.y, text, options.gravity);

  let ok = false;

  await promisify(image.write).call(image, tempfile)
  .then(() => {
    ok = true;
    console.log('...done!');
  })
  .catch((e) => console.error('...failed:', e));

  return { filename: tempfile, ok };
}

app.get('/', (req, res) => {
  res.sendFile(baseimage);
});

app.get('/:text.png', (req, res) => {
  console.log('processing png image:', req.params.text);
  processPng(req.params.text, req.query)
  .then((file) => {
    if (file.ok) {
      res.sendFile(file.filename);
    } else {
      res.sendFile(baseimage);
    }
  });
});

app.listen(port, () => console.log('hi~domo~\nmybf is already running!'));
