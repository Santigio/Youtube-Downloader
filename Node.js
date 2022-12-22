const ffmpeg = require('fluent-ffmpeg');

ffmpeg('input.mp4')
  .output('output.avi')
  .run();

const express = require('express');
const app = express();

app.listen(8080, '0.0.0.0', () => {
  console.log('Server listening on port 8080');
});
