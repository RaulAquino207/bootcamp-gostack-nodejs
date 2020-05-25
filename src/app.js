const express = require("express");
const cors = require("cors");
const RepoController = require('./controllers/RepoController');
const LikeController = require('./controllers/LikeController');

const app = express();

app.use(express.json());
app.use(cors());


app.get("/repositories", RepoController.ListRepositories);

app.post("/repositories",  RepoController.CreateRepository);

app.put("/repositories/:id", RepoController.ChangeRepository);

app.delete("/repositories/:id", RepoController.DeleteRepository);

app.post("/repositories/:id/like", LikeController.LikeRepository);

module.exports = app;
