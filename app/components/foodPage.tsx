import { TagList } from './tag'
import { Header, Content } from '../utils/types'
import { niceName, getUrlHostName } from '../utils/utils';

function FoodSection({
    title,
    data
}: {
    title: string,
    data: string | string[]
}) {
    var content;

    if (Array.isArray(data)) {
        content = <TagList list={data} />
    } else {
        content = data
    }

    return (
        <dl key={title} className="border-t border-gray-900">
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">{title}</dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{content}</dd>
            </div>
        </dl>
    )
}

export function FoodPage({ header, content }: {
    header: Header,
    content: Content
}) {
    var link = null;
    if(header.website !== null){
        var hostname = getUrlHostName(header.website);
        link = <a href={header.website} target="_blank" rel="noopener noreferrer">{hostname}</a>
    }

    return (
        <div>
            <div className="px-4 sm:px-0">
                <h3 className="text-base font-semibold leading-7 text-gray-900">{header.title}</h3>
                <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">{link}</p>
            </div>
            <div className="mt-6">
                {Object.entries(content).map((kv, i) => {
                    var [k, v] = kv;
                    return <FoodSection title={niceName(k)} data={v} />
                })}
            </div>
        </div>
    );
}