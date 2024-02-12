// Get All Contact
// GET /contacts
const getAllContacts = async (req, res) => {
  try {
    res.send(`Select All Contacts!!`);
  } catch (err) {
    res.send(err);
  }
};

module.exports = { getAllContacts };
