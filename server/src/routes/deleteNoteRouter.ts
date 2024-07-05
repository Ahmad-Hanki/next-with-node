import { Router } from "express";
import deleteNote from "../middlewares/deleteNote";

const router = Router();

// Define the route for DELETE requests with an id parameter
const deleteNoteRouter = router.delete("/note/:id", deleteNote);

export default deleteNoteRouter;
