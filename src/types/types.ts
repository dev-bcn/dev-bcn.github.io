export interface Edition {
    actionButtons: boolean;
    carrousel: Carrousel;
    cfp: Cfp;
    diversity: boolean;
    edition: string;
    email: string;
    endDay: Date;
    facebook: string;
    github: string;
    jobOffers: Carrousel;
    linkedin: string;
    schedule: Carrousel;
    showCountdown: boolean;
    showInfoButtons: boolean;
    startDay: Date;
    tickets: Cfp;
    title: string;
    trackNumber: string;
    tracks: string;
    twitter: string;
    youtube: string;
}

export interface Carrousel {
    enabled: boolean;
}

export interface Cfp {
    startDay: Date;
    endDay: Date;
}