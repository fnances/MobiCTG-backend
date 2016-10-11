"use strict";

const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const SurveySchema = new Schema({
    age: Number,
    date: Date,
    steps: Array,
    pregnancy: String,
    ktg: String,
    stressLevel: String,
    satisfactionLevel: String,

}, { autoIndex: false });

module.exports = mongoose.model("Survey", SurveySchema);
