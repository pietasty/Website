import Link from "next/link"

export type ListInfo = {
    text: string,
    link: string
}

export function UnstyledList({list}: {list: string[]}){
    return (
        <ul className="list-none list-inside divide-y divide-gray-400 space-y-1">
            {list.map(s => <li>{s}</li>)}
        </ul>
    )
}

export function OrderedList({list}:{list: string[]}){
    return (
        <ol className="list-decimal list-inside space-y-1">
            {
                list.map(l => <li>{l}</li>)
            }
        </ol>
    )
}

export function OrderedLinkList({list}:{list: ListInfo[]}){
    return (
        <ol className="list-decimal list-inside space-y-1">
            {
                list.map(l => {
                    return <li>
                        <Link href={l.link}>{l.text}</Link>
                    </li>
                })
            }
        </ol>
    )
}