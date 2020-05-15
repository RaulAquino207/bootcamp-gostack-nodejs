const Repo = require('../models/Repo');

const repositories = [];

module.exports = {
    store(req,res){
        const { id, title, url, techs} = req.body;
        console.log(id, title, url, techs);
    }
}