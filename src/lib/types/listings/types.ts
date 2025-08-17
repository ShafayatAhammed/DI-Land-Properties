interface ListingType {
    bannerSrc:string;
    title:string;
    price:string;
    discountPrice?:string;
    beds:number;
    baths:number;
    built:number;
    parkings:number
}

export type { ListingType };
