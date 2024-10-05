import readUserAction from "./read.user.action";
import createUserAction from "./create.user.action";
import { UserType, UserModel } from "./user.model";

// DECLARE CONTROLLER FUNCTIONS
async function readUsers(): Promise<UserType[]> {
  const users = await readUserAction();
  return users;
}

async function readUserById(id: string): Promise<UserType | null> {
  const user = await UserModel.findById(id);
  return user;
}

async function createUser(user: UserType): Promise<UserType> {
  const newUser = await createUserAction(user);
  return newUser;
}

// EXPORT CONTROLLER FUNCTIONS
export { readUsers, readUserById, createUser };