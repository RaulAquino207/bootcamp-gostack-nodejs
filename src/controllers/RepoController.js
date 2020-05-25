const {Repository} = require('../models/Repo');

const repositories = [];

function CreateRepository(req,res){
    const {title, url, techs} = req.body;
    const repository = new Repository(title, url, techs);
    repositories.push(repository);
    return res.json(repository);

}

function ListRepositories(req,res){
    return res.json(repositories);
}

function DeleteRepository(req,res){
    const { id } = req.params;
    const targetRepo = repositories.find(repo => repo.id === id);
    if(targetRepo){
        const i = repositories.indexOf(targetRepo);
        repositories.splice(i,1);
        return res.status(204).send();
    }

    return res.status(400).send();
    
}

function ChangeRepository(req,res){
    const { id } = req.params;
    const targetRepo = repositories.find(repo => repo.id === id);
    const {title, url, techs} = req.body;
    
    if(targetRepo){
        targetRepo.title = title;
        targetRepo.url = url;
        targetRepo.techs = techs;

        res.json(targetRepo);
    }

    return res.status(400).send();
    
}

module.exports = {repositories,CreateRepository,ListRepositories,DeleteRepository,ChangeRepository};