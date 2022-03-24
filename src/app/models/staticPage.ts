
export interface StaticPageData{
    lang:string,
    user_id:number,
    title:string
}

export interface StaticPageResponse{
    key: number,
    msg:string,
    show_image: boolean,
    notification_count: number,
    data:StaticPageDataResponse
}

export interface StaticPageDataResponse{
    id:string,
    title:string,
    desc:string,
    image:string
}
