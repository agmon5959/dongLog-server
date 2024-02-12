// shcema 를 만들고 해당 schema를 model로 변환해줘야 한다.
const mongoose = require("mongoose");
const contactSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
    },
    phone: {
      type: String,
      required: [true, "전화번호는 반드시 입력해주세요."],
    },
  },
  { timestamps: true }
);

// model로 변환
const Contact = mongoose.model("Contact", contactSchema);

module.exports = Contact;
