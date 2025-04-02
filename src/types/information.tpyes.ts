export interface Customer {
    nickname: string;
    birthday: Date;
    maritalStatus: string;
    religion: string;
    veganOrVegetarian: boolean;
    individualNeeds: string;
}

export interface Resident {
    name: string;
    age: number;
}

export interface SocialMedia {
    name: string;
    userSocialMedia: string;
}