const {repositories} = require('./RepoController');

function LikeRepository(req, res){
    const { id } = req.params;
    const targetRepo = repositories.find(repo => repo.id === id);
    if(targetRepo){
        targetRepo.likes += 1;
        return res.json(targetRepo);
    }

    return res.status(400).send();
};

module.exports = {LikeRepository}