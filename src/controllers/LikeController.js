const Repo = require('../models/Repo');
const RepoController = require('./RepoController');

module.exports = {
   LikeRepository(req,res){
       const { id } = req.params;
       const repository = RepoController.ListRepositories.find(repository => repository.id ===id);

       repository.like++;

       return res.json(repository);
   }
}