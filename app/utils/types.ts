import { Metadata } from "next"

export type Header = {
    title: string,
    website?: string,
    instagram?: string
}

export type Content = {
    cuisine?: string[],
    rating?: string[],
    city?: string,
    region?: string,
    suburb?: string,
    comments?: string
}

export type FileData = {
    metadata: Metadata,
    header: Header,
    content: Content
}