import { getFoodPosts } from './food/utils'

export const baseUrl = 'https://yubowu.nz'

export default async function sitemap() {
    let foodPosts = getFoodPosts().map((post) => ({
        url: `${baseUrl}/food/${post.slug}`,
        //lastModified: post.metadata.publishedAt,
    }))

    let routes = ['', '/food'].map((route) => ({
        url: `${baseUrl}${route}`,
        //lastModified: new Date().toISOString().split('T')[0],
    }))

    return [...routes, ...foodPosts]
}