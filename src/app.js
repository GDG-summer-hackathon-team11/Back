import cors from 'cors';
import express from 'express';
import { eventRouter, userRouter, categoryRouter } from './routers';
import morgan from 'morgan';

const app = express();
// CORS 에러 방지
app.use(cors());
app.use(morgan('dev'));

// Content-Type: application/json 형태의 데이터를 인식하고 핸들링할 수 있게 함.
app.use(express.json());

// Content-Type: application/x-www-form-urlencoded 형태의 데이터를 인식하고 핸들링할 수 있게 함.
app.use(express.urlencoded({ extended: false }));

app.use('/', userRouter);
app.use('/', categoryRouter);
app.use('/', eventRouter);
export { app };
