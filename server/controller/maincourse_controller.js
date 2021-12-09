const MainCoursedb = require('../model/main-course');
var Maincoursedb = require('../model/main-course');

// create and save new employee
exports.create = (req,res)=>{
    // validate request
    if(!req.body){
        res.status(400).send({message: "Content cannot be empty"});
        return;
    }

    //new employee
    const maincourse= new Maincoursedb({
        picture_url: req.body.picture_url,
        name: req.body.name,
        price: req.body.price
        
    })

    //save employee in db
    maincourse
        .save(maincourse)
        .then(data =>{
            //res.send(data)
            res.redirect('/add-main-course')
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
        Maincoursedb.findById(id)
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
        Maincoursedb.find()
        .then(maincourse=>{
            res.send(maincourse)
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
    MainCoursedb.findByIdAndUpdate(id, req.body, {useFindAndModify:false})
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

   MainCoursedb.findByIdAndDelete(id)
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