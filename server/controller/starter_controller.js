var Starterdb = require('../model/starter');

// create and save new starter
exports.create = (req,res)=>{
    // validate request
    if(!req.body){
        res.status(400).send({message: "Content cannot be empty"});
        return;
    }

    //new starter
    const starter= new Starterdb({
        picture_url: req.body.picture_url,
        name: req.body.name,
        price: req.body.price
        
    })

    //save starter in db
    starter
        .save(starter)
        .then(data =>{
            res.send(data)
            //res.redirect('/add-starter')
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
        Starterdb.findById(id)
        .then(data=>{
            if(!data){
                res.status(404).send({message: "not found starter with id" +id})
            }else{
                res.send(data)
            }
        })
        .catch(err=>{
            res.status(500).send({message: "error retrieving starter with id" +id})
        })
    }else{
        Starterdb.find()
        .then(starter=>{
            res.send(starter)
        })
        .catch(err=>{
            res.status(500).send({message: err.message || "error occured while retrieving starter information"})
        })
    }
    
        
    }

//update a new identified starter by starter id

exports.update = (req,res)=>{
    if(!req.body){
        return res
        .status(400)
        .send({message: "data update cannot be empty"})
    }

    const id = req.params.id;
    Starterdb.findByIdAndUpdate(id, req.body, {useFindAndModify:false})
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

//delete starter by id

exports.delete = (req,res)=>{
   const id = req .params.id;

   Starterdb.findByIdAndDelete(id)
    .then(data=>{
        if(!data){
            res.status(404).send({message: `cannot delete with id ${id}`})
        }else{
            res.send({
                message: "starter deleted successfully"
            })
        }
    })
    .catch(err=>{
        res.status(500);send({
            message: "could not delete starter with id=" +id
        });
    })
}