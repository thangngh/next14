export interface PageParam {
    params: { slug: string },
    searchParams: { [key: string]: string | string[] | undefined }
}

export interface PropLayout {
    children: React.ReactNode
}

export interface PageError {
    error: Error & { digest?: string },
    reset: () => void
}

export enum EHttpRequest {
    POST = 'POST',
    GET = 'GET',
    DELETE = 'DELETE',
    PUT = 'PUT'
}

