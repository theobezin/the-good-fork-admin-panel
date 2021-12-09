const express = require('express');
const route = express.Router()

const services = require('../services/render');
const employee_controller = require('../controller/employee_controller');
const table_controller = require('../controller/table_controller');
const starter_controller = require('../controller/starter_controller');
const maincourse_controller = require('../controller/maincourse_controller');
const dessert_controller = require('../controller/dessert_controller');

route.get('/', services.homeRoutes )

route.get('/add-employee', services.add_employee)

route.get('/update-employee', services.update_employee)

route.get('/list-table', services.list_tables)

route.get('/list-starter', services.list_starters)

route.get('/list-maincourse', services.list_maincourses)

route.get('/list-dessert', services.list_desserts)

route.get('/add-table', services.add_table)

route.get('/add-starter', services.add_starter)

route.get('/add-maincourse', services.add_maincourse)

route.get('/add-dessert', services.add_dessert)

route.get('/update-table', services.update_table)

route.get('/update-starter', services.update_starter)

route.get('/update-maincourse', services.update_maincourse)

route.get('/update-dessert', services.update_dessert)

route.get('/menu', services.menu)

//API

route.post('/api/employees', employee_controller.create);
route.get('/api/employees', employee_controller.find);
route.put('/api/employees/:id', employee_controller.update);
route.delete('/api/employees/:id', employee_controller.delete);

route.post('/api/tables', table_controller.create);
route.get('/api/tables', table_controller.find);
route.put('/api/tables/:id', table_controller.update);
route.delete('/api/tables/:id', table_controller.delete);

route.post('/api/starters', starter_controller.create);
route.get('/api/starters', starter_controller.find);
route.put('/api/starters/:id', starter_controller.update);
route.delete('/api/starters/:id', starter_controller.delete);

route.post('/api/maincourses', maincourse_controller.create);
route.get('/api/maincourses', maincourse_controller.find);
route.put('/api/maincourses/:id', maincourse_controller.update);
route.delete('/api/maincourses/:id', maincourse_controller.delete);

route.post('/api/desserts', dessert_controller.create);
route.get('/api/desserts', dessert_controller.find);
route.put('/api/desserts/:id', dessert_controller.update);
route.delete('/api/desserts/:id', dessert_controller.delete);




module.exports = route