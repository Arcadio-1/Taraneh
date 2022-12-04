import { hash, compare } from "bcrypt";
export const getHashedPassword = async (password) => {
  const hashedPass = await hash(password, 12);
  return hashedPass;
};

export const varifiypassword = async (password, hashedPass) => {
  const isValid = await compare(password, hashedPass);
  return isValid;
};
