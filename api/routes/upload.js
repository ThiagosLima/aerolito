const AWS = require("aws-sdk");
const uuid = require("uuid/v1");
const express = require("express");
const router = express.Router();

const s3 = new AWS.S3({
  accessKeyId: process.env.ACCESS_KEY_ID,
  secretAccessKey: process.env.SECRET_ACCESS_KEY
});

router.get("/", (req, res) => {
  const awsId = uuid();
  const key = `cover.png`;

  s3.getSignedUrl(
    "putObject",
    {
      Bucket: "aerolito-teste1",
      ContentType: "image/png",
      Key: `${awsId}/cover.png`
    },
    (error, url) => res.send({ awsId, key, url })
  );
});

module.exports = router;
