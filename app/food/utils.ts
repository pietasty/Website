import fs from 'fs'
import path from 'path'
import { FileData } from '../utils/types';

function getJSONFiles(dir:string){
    return fs.readdirSync(dir).filter((file) => path.extname(file) === '.json');
}

function readJSONFile(path:string){
    var rawContent = fs.readFileSync(path, 'utf-8');
    var parse:FileData = JSON.parse(rawContent);
    return parse;
}


function getFoodPostData(dir:string) {
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