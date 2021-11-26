import express from "express";
import morgan from "morgan";
import session from "express-session";
import rootRouter from "./routers/rootRouters";
import videoRouter from "./routers/videoRouters";
import userRouter from "./routers/userRouters";
import { localsMiddleware, loginMiddleware } from "./middlewars";

const app = express();
const logger = morgan("dev")

app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");
app.use(logger);
app.use(express.urlencoded({ extended: true}));
app.use(
  session({
    secret: "Hello!",
    resave: true,
    saveUninitialized: true,
  })
);
  
app.use(localsMiddleware);
app.use("/", rootRouter);
app.use("/videos", videoRouter);
app.use("/users", userRouter);

export default app;