const axios=require('axios');


exports.homeRoutes = (req,res)=>{
    //get request to /api/employees
    axios.get('http://localhost:3000/api/employees')
        .then(function(response){
            res.render('index', {employees: response.data});
        })
        .catch(err=>{
            res.send(err);
        })

    
}

exports.add_employee = (req,res)=>{
    res.render('add_employee');
}

exports.update_employee = (req,res)=>{

    axios.get('http://localhost:3000/api/employees', {params: {id: req.query.id}})
        .then(function(employeedata){
            res.render("update_employee", {employee: employeedata.data})
        })
        .catch(err=>{
            res.send(err);
        })

    
}

exports.list_tables = (req,res)=>{
    //get request to /api/tables
    axios.get('http://localhost:3000/api/tables')
        .then(function(response){
            res.render('list_table', {tables: response.data});
        })
        .catch(err=>{
            res.send(err);
        })

    
}

exports.add_table = (req,res)=>{
    res.render('add_table');
}

exports.update_table = (req,res)=>{

    axios.get('http://localhost:3000/api/tables', {params: {id: req.query.id}})
        .then(function(tabledata){
            res.render("update_table", {table: tabledata.data})
        })
        .catch(err=>{
            res.send(err);
        })

    
}


exports.list_starters = (req,res)=>{
    //get request to /api/tables
    axios.get('http://localhost:3000/api/starters')
        .then(function(response){
            res.render('list_starter', {starters: response.data});
        })
        .catch(err=>{
            res.send(err);
        })

    
}

exports.add_starter = (req,res)=>{
    res.render('add_starter');
}

exports.update_starter = (req,res)=>{

    axios.get('http://localhost:3000/api/starters', {params: {id: req.query.id}})
        .then(function(starterdata){
            res.render("update_starter", {starter: starterdata.data})
        })
        .catch(err=>{
            res.send(err);
        })

    
}

exports.list_maincourses = (req,res)=>{
    //get request to /api/tables
    axios.get('http://localhost:3000/api/maincourses')
        .then(function(response){
            res.render('list_maincourse', {maincourses: response.data});
        })
        .catch(err=>{
            res.send(err);
        })

    
}

exports.add_maincourse = (req,res)=>{
    res.render('add_maincourse');
}

exports.update_maincourse = (req,res)=>{

    axios.get('http://localhost:3000/api/maincourses', {params: {id: req.query.id}})
        .then(function(maincoursedata){
            res.render("update_maincourse", {maincourse: maincoursedata.data})
        })
        .catch(err=>{
            res.send(err);
        })

    
}

exports.list_desserts = (req,res)=>{
    //get request to /api/tables
    axios.get('http://localhost:3000/api/desserts')
        .then(function(response){
            res.render('list_dessert', {desserts: response.data});
        })
        .catch(err=>{
            res.send(err);
        })

    
}

exports.add_dessert = (req,res)=>{
    res.render('add_dessert');
}

exports.update_dessert = (req,res)=>{

    axios.get('http://localhost:3000/api/desserts', {params: {id: req.query.id}})
        .then(function(dessertdata){
            res.render("update_dessert", {dessert: dessertdata.data})
        })
        .catch(err=>{
            res.send(err);
        })

    
}

exports.menu = (req,res)=>{
    res.render('menu');
}