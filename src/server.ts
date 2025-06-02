import express from "express";
import routes from "./routes/index";
import { errorHandler } from "./middlewares/errorHandler";
import swaggerUi from 'swagger-ui-express';
import swaggerSpec from './config/swagger';

const app = express();
const PORT = 3000;

// Thêm middleware này VÀO ĐÂY, trước các route hoặc middleware khác
// để xử lý JSON body của request
app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello sdf");
});

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use("/api", routes);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

export default app;
