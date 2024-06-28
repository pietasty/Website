import {Tag} from './tag'
import { FileData } from '../utils/types'

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

export function Food(props:FileData) {
    return (
        <div>
            <h1 className="title font-semibold text-2xl tracking-tighter">
                {props.metadata.title}
            </h1>
            <article>
                { Object.entries(props.content).map(kv => getContent(...kv)) }
            </article>
        </div>
    );
}