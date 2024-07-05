import { Request, Response, NextFunction } from "express";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const deleteNote = async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;
  try {
    const deletedNote = await prisma.note.delete({
      where: {
        id: id, 
      },
    });

    res.status(200).json({ message: "Note deleted successfully", deletedNote });
  } catch (error) {
    res.status(500).json({ message: "Error deleting note", error });
  }
};

export default deleteNote;
