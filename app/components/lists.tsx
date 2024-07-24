

export function UnstyledList({list}: {list: string[]}){
    return (
        <ul className="list-none list-inside divide-y divide-gray-400">
            {list.map(s => <li>{s}</li>)}
        </ul>
    )
}