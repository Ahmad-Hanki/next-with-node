import { Request, Response, NextFunction } from "express";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
const getNotes = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const notes = await prisma.note.findMany();

    return res.json(notes);
  } catch (err) {
    return res.status(500).send("something went wrong");
  }
};

export default getNotes;
