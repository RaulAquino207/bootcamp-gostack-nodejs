const Repo = require('../models/Repo');

const repositories = [];

function CreateRepotorie(req,res){
    const {title, url, techs} = req.body;
    const repository = Repo.CreateRepository(title, url, techs);
    repositories.push(repository);
    return res.json({repository});

}

function ListRepositories(req,res){
    return res.json(repositories);
}

module.exports = {CreateRepotorie,ListRepositories,repositories};