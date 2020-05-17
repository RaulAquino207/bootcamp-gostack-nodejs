const RepoController = require('./RepoController');

function LikeRepository(req, res){
    const repositories = RepoController.repositories;
    const { id } = req.params;

    const targetRepo = repositories.find(repo => repo.id === id);
    targetRepo.like++;
    return res.json({repository});
};

module.exports = {LikeRepository}