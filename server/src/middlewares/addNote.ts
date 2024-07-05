import { Request, Response, NextFunction } from "express";
import { PrismaClient } from "@prisma/client";

const addNote = async (req: Request, res: Response, next: NextFunction) => {
  const prisma = new PrismaClient();

  const { title, description } = await req.body;
  if (!title || !description) {
    return res.status(400).send("nah no infos");
  }

  try {
    const note = await prisma.note.create({
      data: {
        title,
        description,
      },
    });
    return res.status(200).send("Success" + note);
  } catch (err) {
    return res.status(500).send("something went wrong");
  }
};

export default addNote;
