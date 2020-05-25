const { uuid } = require("uuidv4");
class Repository{
    constructor(title, url, techs){
        this.id = uuid();
        this.title = title;
        this.url = url;
        this.techs = techs;
        this.likes = 0;
    }
    
}
module.exports = {Repository};