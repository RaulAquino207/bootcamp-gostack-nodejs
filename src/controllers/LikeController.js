const RepoController = require('./RepoController');

function LikeRepository(req, res){
    const repositories = RepoController.repositories;
    const { id } = req.params;
    repository = repositories.find(repo => repo.id === id);
    repository.like++;
    return res.json({repository});
};

module.exports = {LikeRepository}