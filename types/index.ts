export interface IItem {
    tokenId?: number;
    image: string;
    name: string;
    description: string;
    price: string;
    seller?: string;
    owner?: string;
    // author: {
    //     name: string;
    //     avatar: string;
    // },
    // publishedAt: any;
}

export type itemInteraction = 'save' | 'remove'
export type contextType = 'wishlist' | 'explore' | 'dashboard'
export type displayType = 'mobile' | 'desktop'