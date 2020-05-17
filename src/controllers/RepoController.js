const Repo = require('../models/Repo');

const repositories = [];

function CreateRepository(req,res){
    const {title, url, techs} = req.body;
    const repository = Repo.CreateRepository(title, url, techs);
    repositories.push(repository);
    return res.json({repository});

}

function ListRepositories(req,res){
    return res.json(repositories);
}

function DeleteRepository(req,res){
    const { id } = req.params;
    const repository = repositories.find(id);
    repositories.delete(repository);
}

module.exports = {repositories,CreateRepository,ListRepositories,DeleteRepository};