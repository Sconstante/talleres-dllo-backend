import { UserType, users } from "./user.model";

// DECLARE ACTION FUNCTION
async function readUserAction(): Promise<UserType[]> {
 return users
}

// EXPORT ACTION FUNCTION
export default readUserAction;
