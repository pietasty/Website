import { TagList } from './tag'
import { UnstyledList } from './lists';
import { FileData, Header, Content, ContentLink } from '../utils/types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { GoogleMapsEmbed } from '@next/third-parties/google'
import { niceName } from '../utils/utils';


function FoodHeader({header} : {header:Header}){
    return(
        <div className="mt-5 p-2 rounded-lg shadow bg-light-warm flex flex-col items-center">
            <h1 className="text-5xl font-semibold text-gray-900">{header.title}</h1>
            <div className="mt-5">
                <TagList list={header.cuisine}/>
            </div>
        </div>
    )
}

function RatingSection({rating, comments}: {
    rating: string[],
    comments: string[]
}){
    return (
        <div className="rounded-lg shadow bg-light-warm p-2 flex flex-col items-center">
            <p className="text-lg font-semibold text-gray-900">Rating</p>
            <TagList list={rating} />
            <p className="text-lg font-semibold text-gray-900">Comments</p>
            <div className="rounded-lg border border-gray-900 px-2 mt-2 bg-white-ish">
                <UnstyledList list={comments} />
            </div>
        </div>
    )
}

const icons = {
    website: faLink,
    instagram: faInstagram
}

function ExternalLinks({name, link}: {name: string, link: string}){
    return (
        <a 
            className="text-sm leading-6 text-gray-900 flex items-center hover:bg-warm"
            href={link} target="_blank" rel="noopener noreferrer"
        >
            <FontAwesomeIcon icon={icons[name]} className='h-7 w-7 mr-1'/>
            {niceName(name)}
        </a>
    )
}
function LinksSection({links}: {links: ContentLink}){
    return (
        <div className="flex flex-col items-center">
            <p className="text-lg font-semibold text-gray-900">Links</p>
            {
                Object.entries(links).map((kv) => {
                    var [k,v] = kv
                    return <ExternalLinks name={k} link={v}/>
                })
            }
        </div>
    )
}


function AboutSection({location, links}: {
    location: string[],
    links?: ContentLink
}){
    return (
        <div className="rounded-lg shadow bg-light-warm p-2 flex flex-col items-center" >
            { links && <LinksSection links={links} />}
            <p className="text-lg font-semibold text-gray-900">Location</p>
            <TagList list={location} />
        </div>
    )
}

function FoodContent({content} : {content:Content}){
    return(
        <div className='mt-5 grid grid-cols-1 px-0 gap-4 sm:grid-cols-2'>
            <RatingSection rating={content.rating} comments={content.comments}/>
            <AboutSection location={content.location} links={content.links}/>
        </div>
    )
}

function FoodMaps({maps}: {maps: string}){
    return (
        <div className="mt-5 p-2 rounded-lg shadow bg-light-warm">
            <GoogleMapsEmbed 
                apiKey={process.env.NEXT_PUBLIC_MAPS_API_KEY}
                mode="place"
                width="100%"
                height="600"
                q={maps}
            />
        </div>
    )
};

export function FoodPage({ post }: { post: FileData}) {
    return (
        <div>
            <FoodHeader header={post.header}/>
            <FoodContent content={post.content}/>
            {post.content.maps && <FoodMaps maps={post.content.maps}/>}
        </div>
    );
}