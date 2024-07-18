require('dotenv').config({path: `${process.cwd()}/.env`});

const express = require('express');

const userRouter = require('./route/userRoute')
const authRouter = require('./route/authRoute');
const projectRouter = require('./route/projectRoute');
const catchAsync = require('./utils/catchAsync');
const AppError = require('./utils/appError');
const globalErrorHandler = require('./controller/errorController');


const app = express();

app.use(express.json());

app.use('/api/v1/auth', authRouter)
app.use('/api/v1/projects', projectRouter)
app.use('/api/v1/users', userRouter)


app.use('*', catchAsync((req, res, next) => {
    throw new AppError('Route is not found', 404);
}));

app.use(globalErrorHandler);

const PORT = process.env.APP_PORT || 3000

app.listen(PORT, ()=>{
    console.log('server running at', PORT)
})