import {Tag} from './tag'

function getValueContent(value){
    if(Array.isArray(value)){
        return (
            <div>
                {value.map(v => <Tag text={v}/>)}
            </div>
            )
    }
    return <p>{value}</p>
}

function getContent(key, value){
    return (
        <div>
            <h4>{key}:</h4>
            {getValueContent(value)}
        </div>
    )
}

export function Food({metadata, content}) {
    return (
        <div>
            <h1 className="title font-semibold text-2xl tracking-tighter">
                {metadata.title}
            </h1>
            <article>
                { Object.entries(content).map(kv => getContent(...kv)) }
            </article>
        </div>
    );
}