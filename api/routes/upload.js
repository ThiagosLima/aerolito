const AWS = require("aws-sdk");
const uuid = require("uuid/v1");
const express = require("express");
const router = express.Router();

const s3 = new AWS.S3({
  accessKeyId: process.env.ACCESS_KEY_ID,
  secretAccessKey: process.env.SECRET_ACCESS_KEY
});

router.get("/chapter/cover/:id", (req, res) => {
  const awsId = uuid();
  const key = `cover.png`;

  s3.getSignedUrl(
    "putObject",
    {
      Bucket: "aerolito-teste1",
      ContentType: "image/png",
      Key: `${req.params.id}/${awsId}/cover.png`
    },
    (error, url) => {
      if (error) res.send(error);
      res.send({ awsId, key, url });
    }
  );
});

// router.get("/", (req, res) => {
//   const awsId = uuid();
//   const key = `cover.png`;

//   s3.getSignedUrl(
//     "putObject",
//     {
//       Bucket: "aerolito-teste1",
//       ContentType: "image/png",
//       Key: `${awsId}/cover.png`
//     },
//     (error, url) => {
//       if (error) res.send(error);
//       res.send({ awsId, key, url });
//     }
//   );
// });

router.get("/cover/:type", (req, res) => {
  const type = req.params.type;

  const awsId = uuid();
  const key = `cover.${type}`;

  s3.getSignedUrl(
    "putObject",
    {
      Bucket: "aerolito-teste1",
      ContentType: `image/${type}`,
      Key: `${awsId}/cover.${type}`
    },
    (error, url) => {
      if (error) res.send(error);
      res.send({ awsId, key, url });
    }
  );
});

router.post("/chapter/pages/", (req, res) => {
  const { awsSerieId, awsId, name } = req.body;

  s3.getSignedUrl(
    "putObject",
    {
      Bucket: "aerolito-teste1",
      ContentType: "image/png",
      Key: `${awsSerieId}/${awsId}/${name}`
    },
    (error, url) => {
      if (error) res.send(error);
      res.send({ url, name });
    }
  );
});

module.exports = router;
