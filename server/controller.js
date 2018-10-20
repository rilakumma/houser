let houses=[];
let id=0;
module.exports ={
    getHouses: (req,res)=>{
      const database = req.app.get('db');
      database.get_houses().then(houses=>{res.status(200).json(houses)})
      .catch(error=>{
          console.log('Error cannot get houses',error)
      })
    },
    addHouse: (req,res)=>{
        const database=req.app.get('db');
        const {name,address,city,state,zip} = req.body;
        database.add_house({name,address,city,state,zip}).then(houses=>{res.status(200).json(houses)})
        .catch(error=>{
            res.status(500).send('ERROR')
            console.log('error cannot add house', error);
        })
    },
    delete: (req,res)=>{
        const database=req.app.get('db');
        const {id} = req.params;
        database.delete_house({id: id}).then(houses=>{ res.status(200).json(houses)})
        .catch(error=>{
            console.log('error deleting house', error);
        })
    }
}