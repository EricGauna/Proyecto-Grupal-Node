const insertProblemas = require("./insertProblemas");
const insertProblemasImage = require("./insertProblemasImage");
const SelectProblemas = require("./SelectProblemas");
const SelectProblemasId = require("./SelectProblemasId");
const resolveStatusProblemas = require("./resolveStatusProblemas");
const unresolveStatusProblemas = require("./unresolveStatusProblema")
const deleteProblemasDb = require("./deleteProblemaDb");
const updateProblemasId = require("./updateProblemasId")
const selectProblemasImages=require("./selectProblemasImages")

module.exports = {
  insertProblemas,
  insertProblemasImage,
  SelectProblemas,
  SelectProblemasId,
  resolveStatusProblemas,
  unresolveStatusProblemas,
  deleteProblemasDb,
  updateProblemasId,
  selectProblemasImages,
};