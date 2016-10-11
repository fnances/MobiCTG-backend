"use strict";

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const Survey = require("./app/models/survey");

mongoose.connect("mongodb://soap:korektor2@ds015574.mlab.com:15574/mobictg");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const port = process.env.PORT || 8080;

const router = express.Router();

router.route("/survey")
  .post((req, res) => {
    const body = req.body;
    const survey = new Survey(body);

    survey.save(err => {
      if (err) {
        res.send(err);
      }

      res.json({ mesage: "Survey added" });
    });
  });

app.use("/api", router);

app.listen(port);
console.log("listening on port ", port);
