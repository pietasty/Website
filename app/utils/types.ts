import { Metadata } from "next"

export type Header = {
    title: string,
    cuisine: string[]
}


export type ContentLink = {
    website?: string,
    instagram?: string
}

export type Content = {
    rating: string[],
    comments: string[],
    location: string[],
    link?: ContentLink,
    maps?: string
}

export type FileData = {
    metadata: Metadata,
    header: Header,
    content: Content
}