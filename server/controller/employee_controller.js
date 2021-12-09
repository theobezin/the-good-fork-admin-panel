var Employeedb = require('../model/employee');
const bcrypt = require('bcryptjs');

// create and save new employee
exports.create = (req,res)=>{
    // validate request
    if(!req.body){
        res.status(400).send({message: "Content cannot be empty"});
        return;
    }

    //new employee
    const employee= new Employeedb({
        name: req.body.name,
        firstname: req.body.firstname,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, bcrypt.genSaltSync()),
        profile: req.body.profile
    })

    //save employee in db
    employee
        .save(employee)
        .then(data =>{
            //res.send(data)
            res.redirect('/add-employee')
        })
        .catch(err=>{
            res.status(500).send( {
                message: err.message || "error occured while creating a create operation"
            });
        });
}

//retrieve and return all employees/ a single employee

exports.find = (req,res)=>{

if(req.query.id){
    const id = req.query.id;
    Employeedb.findById(id)
    .then(data=>{
        if(!data){
            res.status(404).send({message: "not found employee with id" +id})
        }else{
            res.send(data)
        }
    })
    .catch(err=>{
        res.status(500).send({message: "error retrieving employee with id" +id})
    })
}else{
    Employeedb.find()
    .then(employee=>{
        res.send(employee)
    })
    .catch(err=>{
        res.status(500).send({message: err.message || "error occured while retrieving employee information"})
    })
}

    
}

//update a new identified employee by employee id

exports.update = (req,res)=>{
    if(!req.body){
        return res
        .status(400)
        .send({message: "data update cannot be empty"})
    }

    const id = req.params.id;
    Employeedb.findByIdAndUpdate(id, req.body, {useFindAndModify:false})
        .then(data=>{
            if(!data){
                res.status(404).send({message: `Cannot update employe with ${id}. employee not found`})
            }else{
                res.send(data)
            }
        })
        .catch(err =>{
            res.status(500).send({message: "error update employee information"})
        })
}

//delete employee by id

exports.delete = (req,res)=>{
   const id = req .params.id;

   Employeedb.findByIdAndDelete(id)
    .then(data=>{
        if(!data){
            res.status(404).send({message: `cannot delete with id ${id}`})
        }else{
            res.send({
                message: "employee deleted successfully"
            })
        }
    })
    .catch(err=>{
        res.status(500);send({
            message: "could not delete employee with id=" +id
        });
    })
}