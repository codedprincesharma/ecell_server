import express from 'express'
import cookieParser from 'cookie-parser'
import authRouter from './routes/auth.route.js'
import ideaRouter from './routes/idea.route.js'
import register from './routes/register.route.js'
import payment from './routes/payment.route.js'
import cors from 'cors'
const app = express()



app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}))

app.use(express.json());
app.use(cookieParser());

app.use('/api/v1/auth', authRouter)
app.use('/api/v1/idea', ideaRouter)
app.use('/api/v1/registation', register)
app.use('/api/v1/payment', payment)


export default app


