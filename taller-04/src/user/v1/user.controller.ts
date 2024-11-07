import readUserAction from "./read.user.action";
import createUserAction from "./create.user.action";
import { UserType, users } from "./user.model";

// DECLARE CONTROLLER FUNCTIONS
async function readUsers(): Promise<UserType[]> {
  const users = await readUserAction();
  return users;
}

function createUser(user: UserType): UserType | null {
  return createUserAction(user);
}

function readUsersByHobby(hobby: string): UserType[] {
  return users.filter(user => user.hobbies.includes(hobby));
}

function checkUserExists(id: string): boolean {
  const user = users.find(user => user.id === parseInt(id));
  return user !== undefined;
}

function getTeamExperience(team: string): number {
  const teamUsers = users.filter(user => user.team === team);
  return teamUsers.reduce((sum, user) => sum + user.years, 0);
}

function readUsersByFaction(faction: string): UserType[] {
  return users.filter(user => user.faction === faction);
}

// EXPORT CONTROLLER FUNCTIONS
export {
  readUsers,
  createUser,
  readUsersByHobby,
  checkUserExists,
  getTeamExperience,
  readUsersByFaction
};