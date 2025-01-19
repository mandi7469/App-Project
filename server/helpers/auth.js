// imports
const bcrypt = require("bcrypt");

// hashes password using bcrypt
const hashPassword = (password) => {
  return new Promise((resolve, reject) => {
    bcrypt.genSalt(12, (err, salt) => {
      if (err) {
        reject(err);
      }
      bcrypt.hash(password, salt, (err, hash) => {
        if (err) {
          reject(err);
        }
        resolve(hash);
      });
    });
  });
};

// compare plain test password with hashed password
const comparePassword = (password, hashed) => {
  return bcrypt.compare(password, hashed);
};

// exports
module.exports = {
  hashPassword,
  comparePassword,
};
