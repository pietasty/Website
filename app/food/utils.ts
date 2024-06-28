import fs from 'fs'
import path from 'path'

function getJSONFiles(dir){
    return fs.readdirSync(dir).filter((file) => path.extname(file) === '.json');
}

function readJSONFile(path){
    var content = fs.readFileSync(path, 'utf-8');
    return JSON.parse(content);
}


function getFoodPostData(dir) {
    var files = getJSONFiles(dir);
    return files.map(f => {
        var {metadata, content} = readJSONFile(path.join(dir, f));
        var slug = path.basename(f, path.extname(f));

        return {
            slug,
            metadata,
            content
        }
    });
}

export function getFoodPosts() {
    return getFoodPostData(path.join(process.cwd(), 'app', 'food', 'posts'));
}