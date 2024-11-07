import { UserType, users } from "./user.model";

// DECLARE ACTION FUNCTION
function createUserAction(user: UserType): UserType | null {
  const existingUser = users.find(u => u.id === user.id);
  if (existingUser) {
    return null; // Usuario ya existe
  }
  users.push(user);
  return user;
}

// EXPORT ACTION FUNCTION
export default createUserAction;