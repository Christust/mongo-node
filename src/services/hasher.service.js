import bcrypt from "bcrypt";

const saltRounds = 10;

export const hashPassword = async (password) => {
  console.log(password);
  return await bcrypt.hash(password, parseInt(saltRounds));
};

export const comparePassword = async (password, encryptedPassword) => {
  return await bcrypt.compare(password, encryptedPassword);
};
