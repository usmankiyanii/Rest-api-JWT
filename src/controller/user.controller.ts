import { Request, Response } from "express";
import Logger from "../../utils/logger";
import { createUserInput } from "../schema/user.schema";
import { createUser } from "../service/user.service";

export async function createUserHandler(
  req: Request<{}, {}, createUserInput["body"]>,
  res: Response
) {
  try {
    const user = await createUser(req.body);
    return res.send(user);
  } catch (e: any) {
    Logger.error(e);
    return res.sendStatus(409).send(e.message);
  }
}
