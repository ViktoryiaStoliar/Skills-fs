const express = require('express');
const { buildResponse } = require('../helper/buildResponse');
const { isValidSkillId, isValidSkillTitle } = require('../helper/validation');
const { getAllSkill, getById, createSkill, putSkillData, deleteSkill } = require('../service/skill.service');
const router = express.Router();

router.get('/', (req, res) => {
  try {
    const data = getAllSkill();
    buildResponse(res, 200, data);
  } catch (error) {
    buildResponse(res, 404, error.message);
  }
});

router.get('/:id', isValidSkillId, (req, res) => {
  try {
    const { id } = req.params;
    const data = getById(id);
    buildResponse(res, 200, data);
  } catch (error) {
    buildResponse(res, 404, error.message);
  }
});

router.post('/', (req, res) => {
  try {
    const { title } = req.body;
    const data = createSkill(title);
    buildResponse(res, 200, data);
  } catch (error) {
    buildResponse(res, 404, error.message);
  }
});

router.put('/:id', isValidSkillId, isValidSkillTitle, (req, res) => {
  try {
    const { id } = req.params;
    const { title } = req.body;
    const data = putSkillData(id, title);
    buildResponse(res, 200, data);
  } catch (error) {
    buildResponse(res, 404, error.message);
  }
});

router.delete('/:id', isValidSkillId, (req, res) => {
  try {
    const { id } = req.params;
    const data = deleteSkill(id);
    buildResponse(res, 200, data);
  } catch (error) {
    buildResponse(res, 404, error.message);
  }
});

module.exports = router;
