export function Tag({
    text,
    bgColour = "gray-50",
    textColour = "gray-950",
    ringColour = "gray-850/10"
}){
    var className = `inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-insert bg-${bgColour} text-${textColour} ring-${ringColour}`;

    return (
        <span className={className}>{text}</span>
    )
}