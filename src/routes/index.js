const { Router } = require('express')
const {
    ListController,
    ListPerMonthController,
    ListStudentsPerMonthController,
    updateController
} = require ("../controllers");

const routes = Router();


routes.get('/', ListController);
routes.get('/list/month/:month', ListPerMonthController);
routes.get('/list-students/:month', ListStudentsPerMonthController);
routes.post('/update', updateController);

module.exports = { routes };