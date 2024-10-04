import { UserType, UserModel } from "./user.model";

async function createUserAction(user: UserType): Promise<UserType> {
  const newUser = new UserModel(user);
  await newUser.save();
  return newUser;
}

export default createUserAction;