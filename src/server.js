import express from "express";
import morgan from "morgan";
import globalRouter from "./routers/globalrouters";
import videoRouter from "./routers/videoRouters";
import userRouter from "./routers/userrouters";

const PORT = 4000;

const app = express();
const logger = morgan("dev")

app.use(logger);
app.use("/", globalRouter);
app.use("/videos", videoRouter);
app.use("/users", userRouter);

app.listen(PORT, () => console.log(`Server listening on port http://localhost:${PORT}`));