import { Router, Request, Response } from "express";
import { UserType, users } from "./user.model";

// INIT ROUTES
const userRoutes = Router();

// DECLARE ENDPOINT FUNCTIONS
async function GetUsers(request: Request, response: Response) {
  response.status(200).json({
    message: "Success.",
    users: users,
  });
}

async function GetUsersByHobby(request: Request, response: Response) {
  const hobby = request.query.hobby as string;
  if (!hobby) {
    return response.status(400).json({
      message: "Hobby query parameter is required.",
    });
  }

  const filteredUsers = users.filter(user => user.hobbies.includes(hobby));

  response.status(200).json({
    message: "Success.",
    users: filteredUsers,
  });
}

async function CheckUserExists(request: Request, response: Response) {
  const id = request.query.id as string;
  if (!id) {
    return response.status(400).json({
      message: "ID query parameter is required.",
    });
  }

  const user = users.find(user => user.id === parseInt(id));
  const exists = user !== undefined;

  response.status(200).json({
    message: "Success.",
    exists: exists,
  });
}

async function GetTeamExperience(request: Request, response: Response) {
  const team = request.query.team as string;
  if (!team) {
    return response.status(400).json({
      message: "Team query parameter is required.",
    });
  }

  const teamUsers = users.filter(user => user.team === team);
  const totalExperience = teamUsers.reduce((sum, user) => sum + user.years, 0);

  response.status(200).json({
    message: "Success.",
    totalExperience: totalExperience,
  });
}

async function GetUsersByFaction(request: Request, response: Response) {
  const faction = request.query.faction as string;
  if (!faction) {
    return response.status(400).json({
      message: "Faction query parameter is required.",
    });
  }

  const filteredUsers = users.filter(user => user.faction === faction);

  response.status(200).json({
    message: "Success.",
    users: filteredUsers,
  });
}

async function CreateUser(request: Request, response: Response) {
  const user = request.body as UserType;
  if (!user.name || !user.id) {
    return response.status(400).json({
      message: "User name and id is required.",
    });
  }

  // Check if the user already exists
  const existingUser = users.find(u => u.id === user.id);
  if (existingUser) {
    return response.status(409).json({
      message: "User already exists.",
    });
  }

  // Add the new user to the array
  users.push(user);

  response.status(201).json({
    message: "User created successfully.",
    user: user,
  });
}



// DECLARE ENDPOINTS
userRoutes.get("/", GetUsers);
userRoutes.get("/hobby", GetUsersByHobby);
userRoutes.get("/exists", CheckUserExists);
userRoutes.get("/team-experience", GetTeamExperience);
userRoutes.get("/by-faction", GetUsersByFaction);
userRoutes.post("/", CreateUser);

// EXPORT ROUTES
export default userRoutes;