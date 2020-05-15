const { uuid } = require("uuidv4");

module.exports = {
    CreateRepository(title,url,techs){
        return {
        id: uuid(),
        title,
        url,
        techs,
        like: 0
        }
    }
};