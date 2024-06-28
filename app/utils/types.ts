export type Metadata = {
    title: string
}

export type Content = {
    cuisine?: string[],
    rating?: string[],
    website?: string,
    city?: string,
    region?: string,
    suburb?: string,
    comments?: string
}

export type FileData = {
    metadata: Metadata,
    content: Content
}