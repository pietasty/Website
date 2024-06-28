import { getFoodPosts } from '../utils'
import { baseUrl } from '../../sitemap'
import { notFound } from 'next/navigation'

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

export default function Blog({ params }) {
    let post = getFoodPosts().find((post) => post.slug === params.slug)

    if (!post) {
        notFound()
    }

    //TODO: Look into this for the future script application/ld+json
    return (
        <section>
            {/* script application/ld+json goes here */}
            <h1 className="title font-semibold text-2xl tracking-tighter">
                {post.metadata.title}
            </h1>
            <article className="prose">
                <p>{post.content}</p>
            </article>
        </section>
    )
}