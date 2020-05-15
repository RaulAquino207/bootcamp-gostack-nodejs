const Repo = require('../models/Repo');

const repositories = [];

module.exports = {
    CreateRepotorie(req,res){
        const {title, url, techs} = req.body;
        const repository = Repo.CreateRepository(title, url, techs);
        repositories.push(repository);
        return res.json({repository});
        console.log(repositories);

    },

    ListRepositories(req,res){
        return res.json(repositories);
    }
}