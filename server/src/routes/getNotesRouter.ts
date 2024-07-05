import { Router } from "express";
import getNotes from "../middlewares/getNotes";
const router = Router();

const getNotesRouter = router.get("/note", getNotes);

export default getNotesRouter;
