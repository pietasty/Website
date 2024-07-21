import { TagList } from './tag'
import { Header, Content } from '../utils/types'
import { niceName } from '../utils/utils';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';



function FoodHeader({data} : {data:Header}){
    var website = data.website ? (
        <a 
        className="flex flex-row text-sm leading-6 text-gray-900"
        href={data.website} target="_blank" rel="noopener noreferrer"
        >
            <FontAwesomeIcon icon={faLink} className="h-6 w-6"/>
            <p>Website</p>
        </a>
    ) : null;

    var instagram = data.instagram ? (
        <a 
        className="flex flex-row text-sm leading-6 text-gray-900"
        href={data.instagram} target="_blank" rel="noopener noreferrer"
        >
            <FontAwesomeIcon icon={faInstagram} className="h-6 w-6"/>
            <p>Instagram</p>
        </a>
    ) : null

    return(
        <div className="my-5 px-2 rounded-lg shadow bg-light-warm">
            <h1 className="text-5xl font-semibold text-gray-900">{data.title}</h1>
            <div className="flex flex-row mt-4 space-x-4">
                {website}
                {instagram}
            </div>

        </div>
    )
}


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
    return (
        <div>
            <FoodHeader data={header}/>
            <div className="mt-6">
                {Object.entries(content).map((kv, i) => {
                    var [k, v] = kv;
                    return <FoodSection title={niceName(k)} data={v} />
                })}
            </div>
        </div>
    );
}