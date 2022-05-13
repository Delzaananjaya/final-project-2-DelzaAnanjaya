/* eslint-disable no-var */
export default function handler(_, res) {
  // eslint-disable-next-line global-require
  var crypto = require('crypto');
  var token = crypto.randomBytes(20).toString('hex');

  res
    .status(200)
    .json({ email: 'admin@bukapedia.com', password: 'admin123', token });
}
