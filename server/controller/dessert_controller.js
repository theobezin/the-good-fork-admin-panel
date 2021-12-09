const Dessertdb = require('../model/dessert');


// create and save new employee
exports.create = (req,res)=>{
    // validate request
    if(!req.body){
        res.status(400).send({message: "Content cannot be empty"});
        return;
    }

    //new employee
    const dessert= new Dessertdb({
        picture_url: req.body.picture_url,
        name: req.body.name,
        price: req.body.price
        
    })

    //save employee in db
    dessert
        .save(dessert)
        .then(data =>{
            res.send(data)
            //res.redirect('/add-main-course')
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
        Dessertdb.findById(id)
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
        Dessertdb.find()
        .then(dessert=>{
            res.send(dessert)
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
    Dessertdb.findByIdAndUpdate(id, req.body, {useFindAndModify:false})
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

   Dessertdb.findByIdAndDelete(id)
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