const db = require('../models')


module.exports = {
    findAll: function(req, res){
        db.Finance
        .find(req.query)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err))
    },
    findByfId: function(req,res){
        db.Main 
        .findOne({fId: req.params.id})
        .populate("finance")
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err))
    },
    create : function(req, res){
        db.Finance
        .create(req.body)
        .then(dbModel => {db.Main.findOneAndUpdate({ fId : dbModel.fId}, { $push: { "finance": dbModel._id }} , { new: true }, function(err, data){res.json(data)}) })
        .catch(err => res.status(422).json(err))
    },
    update: function(req, res){
        db.Finance
        findOneAndUpdate({fId: req.params.fId}, req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err))
    },
    remove: function(req,res){
        db.Finance 
        .findById({_id: req.params.id})
        .then(dbModel => dbModel.remove())
        .then(dbModel2 => res.json(dbModel2))
        .catch(err => res.status(422).json(err))
    }
}