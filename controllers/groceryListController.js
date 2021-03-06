const db = require('../models')

module.exports = {
    findAll: function(req, res){
        db.GroceryList
        .find(req.query)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err))
    },
    findByfId: function(req,res){
        db.Main 
        .findOne({fId: req.params.id})
        .populate("groceryList")
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err))
    },
    create : function(req, res){
        db.GroceryList
        .create(req.body)
        .then(dbModel => {db.Main.findOneAndUpdate({ fId : dbModel.fId}, { $push: { "groceryList": dbModel._id }} , { new: true }, function(err, data){res.json(data)}) })
        .catch(err => res.status(422).json(err))
    },
    update: function(req, res){
        db.GroceryList
        findOneAndUpdate({fId: req.params.fId}, req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err))
    },
    remove: function(req,res){
        db.GroceryList 
        .findById({fId: req.params.fId})
        .then(dbModel => dbModel.remove())
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err))
    }
}