const multer = require("multer");
const AWS = require("aws-sdk");
const ACCESS_KEY = process.env.ACCESS_KEY;
const SECRET_ACCESS_KEY = process.env.SECRET_ACCESS_KEY;

const s3 = new AWS.S3({
  accessKeyId: ACCESS_KEY,
  secretAccessKey: SECRET_ACCESS_KEY,
});

module.exports.uploadS3 = (fileData) => {
  return new Promise((resovle, reject) => {
    const params = {
      Bucket: process.env.BUCKET,
      Key: `${Date.now().toString()}.jpg`,
      Body: fileData,
    };
    s3.upload(params, (err, data) => {
      if (err) {
        console.log(err);
        reject(err);
      } else {
        return resovle(data);
      }
    });
  });
};
