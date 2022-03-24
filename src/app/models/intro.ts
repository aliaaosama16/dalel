export interface Intro{
    key: number,
    msg: string,
    show_image:boolean,
    data:IntroData
}

export interface IntroData{
    title:string,
    desc:string,
    image:string
}
