import { TagList } from './tag'
import { FileData, Header, Content } from '../utils/types'
import { niceName } from '../utils/utils';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';



function FoodHeader({header} : {header:Header}){
    var website = header.website ? (
        <a 
        className="flex flex-row text-sm leading-6 text-gray-900"
        href={header.website} target="_blank" rel="noopener noreferrer"
        >
            <FontAwesomeIcon icon={faLink} className="h-6 w-6"/>
            <p>Website</p>
        </a>
    ) : null;

    var instagram = header.instagram ? (
        <a 
        className="flex flex-row text-sm leading-6 text-gray-900"
        href={header.instagram} target="_blank" rel="noopener noreferrer"
        >
            <FontAwesomeIcon icon={faInstagram} className="h-6 w-6"/>
            <p>Instagram</p>
        </a>
    ) : null

    return(
        <div className="my-5 px-2 rounded-lg shadow bg-light-warm">
            <h1 className="text-5xl font-semibold text-gray-900">{header.title}</h1>
            <div className="flex flex-row mt-4 space-x-4">
                {website}
                {instagram}
            </div>

        </div>
    )
}

function FoodContent({content} : {content:Content}){
    return(
        <div className='mt-5 grid grid-cols-1 px-0 gap-4 sm:grid-cols-3 sm:px-4'>
            <div>item 1</div>
            <div>item 2</div>
            <div>item 3</div>
        </div>
    )
}

export function FoodPage({ post }: { post: FileData}) {
    return (
        <div>
            <FoodHeader header={post.header}/>
            <FoodContent content={post.content}/>
        </div>
    );
}