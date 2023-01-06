const insertProblema = require("./insertProblema");
const insertProblemaImage = require("./insertProblemaImage");
const SelectProblemas = require("./SelectProblemas");
const SelectProblemaId = require("./SelectProblemaId");
const resolveStatusProblema = require("./resolveStatusProblema");
const unresolveStatusProblema=require("./unresolveStatusProblema")

module.exports = {
  insertProblema,
  insertProblemaImage,
  SelectProblemas,
  SelectProblemaId,
  resolveStatusProblema,
  unresolveStatusProblema,
};