const fs = require('fs');

const path = './storage/storage.json';

function getAllSkill() {
  const data = JSON.parse(fs.readFileSync(path));
  return data;
}

function getById(id) {
  const data = JSON.parse(fs.readFileSync(path));
  const filtered = data.filter(el => el.id == id);
  if (!filtered.length) throw new Error('id не найдено');
  return filtered;
}

function createSkill(title) {
  const data = JSON.parse(fs.readFileSync(path));
  const item = { id: data.length + 1, title };
  data.push(item);
  fs.writeFileSync(path, JSON.stringify(data));
  return data;
}

function putSkillData(id, title) {
  const data = JSON.parse(fs.readFileSync(path));
  const filtered = data.filter(el => el.id != id);
  if (filtered.length == data.length) throw new Error('такого id нет');
  const obj = { id, title };
  filtered.push(obj);
  fs.writeFileSync(path, JSON.stringify(data));
  return filtered;
}

function deleteSkill(id) {
  const data = JSON.parse(fs.readFileSync(path));
  const filtered = data.filter(el => el.id != id);
  if (filtered.length == data.length) throw new Error('id not found');
  fs.writeFileSync(path, JSON.stringify(filtered));
  return filtered;
}

module.exports = { getAllSkill, getById, createSkill, putSkillData, deleteSkill };
