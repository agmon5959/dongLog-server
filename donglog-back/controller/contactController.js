// asyncHandler로 비동기 함수를 묶어준다면, try - catch 문을 간략히 사용할 수 있다.
// 오류는 asyncHandler에게 맡기고 우리는 실행할 명령만 적어주면 된다.
const asyncHandler = require("express-async-handler");
// Get All Contact
// GET /contacts
const getAllContacts = asyncHandler(async (req, res) => {
  res.send(`Select All Contacts!!`);
});

// POST
// POST /contacts
const postContacts = asyncHandler(async (req, res) => {
  const { name, age, weight } = req.body;
  res.send(`Create Contacts ${name} ${age} ${weight}`);
});

module.exports = { getAllContacts, postContacts };
