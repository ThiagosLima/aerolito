const AWS = require("aws-sdk");
const uuid = require("uuid/v1");
const express = require("express");
const router = express.Router();

const s3 = new AWS.S3({
  accessKeyId: process.env.ACCESS_KEY_ID,
  secretAccessKey: process.env.SECRET_ACCESS_KEY
});

router.get("/cover/:type", (req, res) => {
  const type = req.params.type;
  const awsSerieId = req.query.awsSerieId;

  const awsId = uuid();
  const key = `cover.${type}`;

  let path = `${awsId}/${key}`;

  // If awsSerieId is defined, this is a chapter cover
  // Otherwise this is a serie cover
  if (awsSerieId) path = `${awsSerieId}/${path}`;

  s3.getSignedUrl(
    "putObject",
    {
      Bucket: "aerolito-teste1",
      ContentType: `image/${type}`,
      Key: path
    },
    (error, url) => {
      if (error) res.send(error);
      res.send({ awsId, key, url });
    }
  );
});

router.get("/page/:awsSerieId/:awsChapterId/:name/:type", (req, res) => {
  const { awsSerieId, awsChapterId, name, type } = req.params;

  s3.getSignedUrl(
    "putObject",
    {
      Bucket: "aerolito-teste1",
      ContentType: `image/${type}`,
      Key: `${awsSerieId}/${awsChapterId}/${name}`
    },
    (error, url) => {
      if (error) res.send(error);
      res.send({ url, name });
    }
  );
});

module.exports = router;
