var Tabledb = require('../model/table');

// create and save new employee
exports.create = (req,res)=>{
    // validate request
    if(!req.body){
        res.status(400).send({message: "Content cannot be empty"});
        return;
    }

    //new employee
    const table= new Tabledb({
        table_number: req.body.table_number,
        table_capacity: req.body.table_capacity,
        
    })

    //save employee in db
    table
        .save(table)
        .then(data =>{
            //res.send(data)
            res.redirect('/add-table')
        })
        .catch(err=>{
            res.status(500).send( {
                message: err.message || "error occured while creating a create operation"
            });
        });
}


exports.find = (req,res)=>{

    if(req.query.id){
        const id = req.query.id;
        Tabledb.findById(id)
        .then(data=>{
            if(!data){
                res.status(404).send({message: "not found table with id" +id})
            }else{
                res.send(data)
            }
        })
        .catch(err=>{
            res.status(500).send({message: "error retrieving table with id" +id})
        })
    }else{
        Tabledb.find()
        .then(table=>{
            res.send(table)
        })
        .catch(err=>{
            res.status(500).send({message: err.message || "error occured while retrieving table information"})
        })
    }
    
        
    }

//update a new identified table by table id

exports.update = (req,res)=>{
    if(!req.body){
        return res
        .status(400)
        .send({message: "data update cannot be empty"})
    }

    const id = req.params.id;
    Tabledb.findByIdAndUpdate(id, req.body, {useFindAndModify:false})
        .then(data=>{
            if(!data){
                res.status(404).send({message: `Cannot update table with ${id}. table not found`})
            }else{
                res.send(data)
            }
        })
        .catch(err =>{
            res.status(500).send({message: "error update table information"})
        })
}

//delete table by id

exports.delete = (req,res)=>{
   const id = req .params.id;

   Tabledb.findByIdAndDelete(id)
    .then(data=>{
        if(!data){
            res.status(404).send({message: `cannot delete with id ${id}`})
        }else{
            res.send({
                message: "table deleted successfully"
            })
        }
    })
    .catch(err=>{
        res.status(500);send({
            message: "could not delete table with id=" +id
        });
    })
}