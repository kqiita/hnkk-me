const fs = require("fs/promises");
const path = require("path");

async function getFolderStruct(d){
    const stats = await fs.stat(d);

    if(!stats.isDirectory()){
        return path.basename(d);
    }
    
}