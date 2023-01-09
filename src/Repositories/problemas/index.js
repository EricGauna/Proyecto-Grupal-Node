const insertProblema = require("./insertProblema");
const insertProblemaImage = require("./insertProblemaImage");
const SelectProblemas = require("./SelectProblemas");
const SelectProblemaId = require("./SelectProblemaId");
const resolveStatusProblema = require("./resolveStatusProblema");
const unresolveStatusProblema = require("./unresolveStatusProblema")
const deleteProblemaDb = require("./deleteProblemaDb");
const updateProblemaId = require("./updateProblemaId")
const selectProblemaImages=require("./selectProblemaImages")

module.exports = {
  insertProblema,
  insertProblemaImage,
  SelectProblemas,
  SelectProblemaId,
  resolveStatusProblema,
  unresolveStatusProblema,
  deleteProblemaDb,
  updateProblemaId,
  selectProblemaImages,
};