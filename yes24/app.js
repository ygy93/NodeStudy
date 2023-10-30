import express from 'express';
import BestSellerRouter from './router/bestSeller.js';
import RealTimeSellerRouter from './router/realTimeBestSeller.js';
import DaySellerRouter from './router/dayBestSeller.js';
import MonthWeekSellerRouter from './router/monthWeekSeller.js';
import SaleSellerRouter from './router/saleSeller.js';
import SteadySellerRouter from './router/steadySeller.js';
import cookies from 'cookie-parser';
import signUpRouter from './router/signUpRouter.js';

const app = express();

app.use(cookies());

app.use('/BestSeller', BestSellerRouter)
app.use('/RealTimeSeller', RealTimeSellerRouter)
app.use('/DaySeller', DaySellerRouter)
app.use('/MonthWeekSeller', MonthWeekSellerRouter)
app.use('/SaleSeller', SaleSellerRouter)
app.use('/SteadySeller', SteadySellerRouter)

app.use('signup', signUpRouter)

app.use(express.static('template'));

app.listen(8000);