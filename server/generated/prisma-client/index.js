"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prisma_lib_1 = require("prisma-client-lib");
var typeDefs = require("./prisma-schema").typeDefs;

var models = [
  {
    name: "User",
    embedded: false
  },
  {
    name: "Story",
    embedded: false
  },
  {
    name: "Hashtag",
    embedded: false
  },
  {
    name: "Like",
    embedded: false
  },
  {
    name: "Love",
    embedded: false
  },
  {
    name: "Neutral",
    embedded: false
  },
  {
    name: "Sad",
    embedded: false
  },
  {
    name: "Clap",
    embedded: false
  }
];
exports.Prisma = prisma_lib_1.makePrismaClientClass({
  typeDefs,
  models,
  endpoint: `https://us1.prisma.sh/zareef-baksh/larivo/dev`
});
exports.prisma = new exports.Prisma();
