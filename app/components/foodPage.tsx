import {Tag} from './tag'
import { Metadata, Content } from '../utils/types'

function getValueContent(value:string|string[]){
    if(Array.isArray(value)){
        return (
            <div>
                {value.map(v => <Tag text={v}/>)}
            </div>
            )
    }
    return <p>{value}</p>
}

function getContent(key:string, value:string|string[]){
    return (
        <div>
            <h4>{key}:</h4>
            {getValueContent(value)}
        </div>
    )
}


export function FoodPage({metadata, content}:{
    metadata: Metadata,
    content: Content
}) {
    return (
        <div>
            <h1 className="title font-semibold text-2xl tracking-tighter">
                {metadata.title}
            </h1>
            <div>
                { Object.entries(content).map(kv => getContent(...kv)) }
            </div>
        </div>
    );
}