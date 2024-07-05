import { Router } from "express";
import addNote from "../middlewares/addNote";
const router = Router();

const addNoteRouter = router.post("/note", addNote);

export default addNoteRouter;
