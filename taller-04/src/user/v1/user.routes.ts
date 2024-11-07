import { Router, Request, Response } from "express";
import {
  readUsers,
  createUser,
  readUsersByHobby,
  checkUserExists,
  getTeamExperience,
  readUsersByFaction
} from "./user.controller";
import { UserType } from "./user.model";

// INIT ROUTES
const userRoutes = Router();

// DECLARE ENDPOINT FUNCTIONS
async function GetUsers(request: Request, response: Response) {
  const users = await readUsers();
  response.status(200).json({
    message: "Success.",
    users: users,
  });
}

function GetUsersByHobby(request: Request, response: Response) {
  const hobby = request.query.hobby as string;
  if (!hobby) {
    return response.status(400).json({
      message: "Hobby query parameter is required.",
    });
  }

  const filteredUsers = readUsersByHobby(hobby);

  response.status(200).json({
    message: "Success.",
    users: filteredUsers,
  });
}

function CheckUserExists(request: Request, response: Response) {
  const id = request.query.id as string;
  if (!id) {
    return response.status(400).json({
      message: "ID query parameter is required.",
    });
  }

  const exists = checkUserExists(id);

  response.status(200).json({
    message: "Success.",
    exists: exists,
  });
}

function GetTeamExperience(request: Request, response: Response) {
  const team = request.query.team as string;
  if (!team) {
    return response.status(400).json({
      message: "Team query parameter is required.",
    });
  }

  const totalExperience = getTeamExperience(team);

  response.status(200).json({
    message: "Success.",
    totalExperience: totalExperience,
  });
}

function GetUsersByFaction(request: Request, response: Response) {
  const faction = request.query.faction as string;
  if (!faction) {
    return response.status(400).json({
      message: "Faction query parameter is required.",
    });
  }

  const filteredUsers = readUsersByFaction(faction);

  response.status(200).json({
    message: "Success.",
    users: filteredUsers,
  });
}

function CreateUser(request: Request, response: Response) {
  const user = request.body as UserType;
  if (!user.name || !user.id) {
    return response.status(400).json({
      message: "User name and id is required.",
    });
  }

  const newUser = createUser(user);
  if (!newUser) {
    return response.status(409).json({
      message: "User already exists.",
    });
  }

  response.status(201).json({
    message: "User created successfully.",
    user: newUser,
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