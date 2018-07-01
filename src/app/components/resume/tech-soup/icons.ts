export interface IconList {
    [index: number]: IconObj;
}

interface IconObj {
    src: string;
    desc: string;
}

export const myLanguages: IconList = [
    {
        src: '../../../assets/images/javaIcon.png',
        desc: 'Java'
    },
    {
        src: '../../../assets/images/springIcon.svg',
        desc: 'Spring'
    },
    {
        src: '../../../assets/images/nodeIcon.png',
        desc: 'Node'
    },
    {
        src: '../../../assets/images/ngIcon.png',
        desc: 'Angular 2+'
    },
    {
        src: '../../../assets/images/pythonIcon.png',
        desc: 'Python'
    },];

export const myDevops: IconList = [
    {
        src: '../../../assets/images/evilJenkinsIcon.svg',
        desc: 'Jenkins'
    },
    {
        src: '../../../assets/images/dockerIcon.png',
        desc: 'Docker'
    },
    {
        src: '../../../assets/images/k8sIcon.svg',
        desc: 'Kubernetes'
    },
    {
        src: '../../../assets/images/awsIcon.png',
        desc: 'AWS'
    },
]