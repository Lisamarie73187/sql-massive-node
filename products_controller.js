module.exports = {
    create: (req,res,next) => {
        const db = req.app.get('db');
        const {name, description, price, imageurl} = req.body;

        db.create_product([name, description, price, imageurl])
        .then( () => res.status(200).send())
        .catch( (error) => {
            console.log(error)
            res.status(500).send(error)})
    },

    getOne:(req,res,next) => {
        const db = req.app.get('db');
        const {id} = req.params
        db.read_product([id])
        .then( (product) => res.status(200).send(product))
        .catch( () => res.status(500).send())
    },

    getAll:(req,res,next) => {
        const db = req.app.get('db');
        db.read_products()
        .then( (products) => res.status(200).send(products))
        .catch( (err) => res.status(500).send(err))
    },

    update:(req,res,next) => {
        const db = req.app.get ('db');
        const {id} = req.params;
        const {desc} = req.query;
        db.update_product([id, desc])
        .then( () => res.status(200).send())
        .catch( () => res.status(500).send())
    },

    delete:(req,res,nect)=>{
        const db = req.app.get ('db');
        const {id} = req.params
        db.delete_product([id])
        .then( () => res.status(200).send())
        .catch( () => res.status(500).send())
    }
}