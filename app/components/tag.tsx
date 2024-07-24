type TagProps = {
    text: string,
    bgColour?: string,
    textColour?: string,
    borderColor?: string
}

export function Tag({
    text,
    bgColour = "white-ish",
    textColour = "gray-900",
    borderColor = "gray-900"
}: TagProps){
    var className = `items-center rounded-md px-2 py-1 text-sm font-medium bg-${bgColour} text-${textColour} border border-${borderColor}`;

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
        <div className="mt-2 flex flex-row space-x-3">
            {propsList.map(l =>
                <Tag {...l}/>
            )}
        </div>
    )
}