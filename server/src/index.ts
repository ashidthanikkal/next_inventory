import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
//ROUTE IMPORTS
import dashboardRoutes from './routes/dashboardRoutes';
import productRoutes from './routes/productRouts';
import userRoutes from './routes/userRouts';
import expenseRoutes from './routes/expenseRoutes';



// CONFIGURATION 

dotenv.config();
const app = express();

app.use(express.json());
app.use(cors());
app.use(helmet());

app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan('common'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors())

// ROUTES
app.use("/dashboard", dashboardRoutes); // http://localhost:8000/dashboard
app.use("/products", productRoutes); // http://localhost:8000/products
app.use("/users",userRoutes ); // http://localhost:8000/users
app.use("/expenses",expenseRoutes); // http://localhost:8000/expenses



//SERVER
const PORT = Number(process.env.PORT) || 3001;
app.listen(PORT,"0.0.0.0", () => {
  console.log(`Server is running on port ${PORT}`);
});