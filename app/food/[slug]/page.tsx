import { getFoodPosts } from '../utils'
import { notFound } from 'next/navigation'
import { Food } from '../../components/food'

export async function generateStaticParams() {
    let posts = getFoodPosts();

    return posts.map((post) => ({
        slug: post.slug
    }));
}


export function generateMetadata({ params }) {
    var post = getFoodPosts().find((post) => post.slug === params.slug)
    if (!post) {
        return
    }

    var metadata = post.metadata;

    return {
        title: metadata.title,
        description: metadata.title,
        openGraph: {
            title: metadata.title,
            description: metadata.title
        }
    }
}

export default function Page({ params }) {
    let post = getFoodPosts().find((post) => post.slug === params.slug)

    if (!post) {
        notFound()
    }
    
    //TODO: Look into this for the future script application/ld+json
    return (
        <section>
            {/* script application/ld+json goes here */}
            <Food metadata={post.metadata} content={post.content} />
        </section>
    )
}