import { Option } from 'funfix-core';
export interface Coords {
    lat: number;
    lon: number;
}
export declare class Address {
    id: string;
    line1: Option<string>;
    line2: Option<string>;
    zip: Option<string>;
    city: Option<string>;
    state: Option<string>;
    countryCode: Option<string>;
    comment: Option<string>;
    coordinates: Option<Coords>;
    geocoder: Option<string>;
    static fromRaw(raw: RawAddress): Address;
    static toRaw(address: Address): RawAddress;
    constructor(id: string, line1?: Option<string>, line2?: Option<string>, zip?: Option<string>, city?: Option<string>, state?: Option<string>, countryCode?: Option<string>, comment?: Option<string>, coordinates?: Option<Coords>, geocoder?: Option<string>);
}
export interface RawAddress {
    city?: string;
    comment?: string;
    coordinates?: Coords;
    countryCode?: string;
    geocoder?: string;
    id: string;
    line1?: string;
    line2?: string;
    state?: string;
    zip?: string;
}
