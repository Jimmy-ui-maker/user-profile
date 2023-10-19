import { Schema, model, models } from "mongoose";

const userSchema = new Schema(
  {
    f_name: String,
    m_name: String,
    l_name: String,
    age: String,
    phone: String,
    email: String,
    password: String,
    imgUrl: String,
  },
  { timestamps: true }
);

const Users = models.Users || model("Users", userSchema);
export default Users;
