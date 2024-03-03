export interface BannerProps {
    title: string,
    textColor: string,
    bgColor: string,
    bannerPicture: {
        alt: string,
        ref: any,
        source?: string
    }
}

export interface ProjectProps {
    img: any,
    links: {
        repositoryUrl: string,
        demoUrl?: string
    },
    projectType: string,
    techTags: string[],
    title: string,
    description: string
}