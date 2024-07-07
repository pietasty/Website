type TagProps = {
    text: string,
    bgColour?: string,
    textColour?: string,
    ringColour?: string
}

export function Tag({
    text,
    bgColour = "gray-50",
    textColour = "gray-950",
    ringColour = "gray-850/10"
}: TagProps){
    var className = `inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-insert bg-${bgColour} text-${textColour} ring-${ringColour}`;

    return (
        <span key={text} className={className}>{text}</span>
    )
}


export function TagList({
    list
}: {
    list: string[] | TagProps[]
}){
    var propsList:TagProps[] = list.map(l =>{
        if(typeof l === "string"){
            return {text: l};
        }
        return l;
    });

    return (
        <div>
            {propsList.map(l =>
                <Tag {...l}/>
            )}
        </div>
    )
}