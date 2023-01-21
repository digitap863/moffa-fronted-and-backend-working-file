const multer = require("multer");
const AWS = require("aws-sdk");
const ACCESS_KEY = "AKIA43UOWL5CVPQY5B4V";
const SECRET_ACCESS_KEY = "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";

const s3 = new AWS.S3({
  accessKeyId: ACCESS_KEY,
  secretAccessKey: SECRET_ACCESS_KEY,
});

module.exports.uploadS3 = (fileData) => {
  return new Promise((resovle, reject) => {
    const params = { 
      Bucket: "moffaa",
      Key: `${Date.now().toString()}.jpg`,
      Body: fileData,
    };
    s3.upload(params, (err, data) => {
      if (err) {
        console.log(err);
        reject(err);
      } else {
        console.log(data);
        return resovle(data);
      }
    });
  });
};
