// DB 연결
const mongoose = require("mongoose");
require("dotenv").config();

const dbConnect = async () => {
  try {
    const connect = await mongoose.connect(process.env.DB_CONNECT);
    console.log("db_connetect success");
  } catch (error) {
    console.log("db_connetect failure");
  }
};

module.exports = dbConnect;
