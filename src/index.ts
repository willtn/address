import { Option } from 'funfix-core';

export interface Coords {
  lat: number;
  lon: number;
}

export class Address {
  public static fromRaw(raw: RawAddress): Address {
    return new Address(raw.id, Option.of(raw.line1), Option.of(raw.line2), Option.of(raw.zip), Option.of(raw.city), Option.of(raw.state), Option.of(raw.countryCode), Option.of(raw.comment), Option.of(raw.coordinates), Option.of(raw.geocoder));
  }

  public static toRaw(address: Address): RawAddress {
    return {
      city: address.city.orUndefined(),
      comment: address.comment.orUndefined(),
      coordinates: address.coordinates.orUndefined(),
      countryCode: address.countryCode.orUndefined(),
      geocoder: address.countryCode.orUndefined(),
      id: address.id,
      line1: address.line1.orUndefined(),
      line2: address.line2.orUndefined(),
      state: address.state.orUndefined(),
      zip: address.zip.orUndefined()
    };
  }

  constructor(
    public id: string = 'AAAAAAAAAAAAAAAAAAAAAA',
    public line1: Option<string> = Option.none(),
    public line2: Option<string> = Option.none(),
    public zip: Option<string> = Option.none(),
    public city: Option<string> = Option.none(),
    public state: Option<string> = Option.none(),
    public countryCode: Option<string> = Option.none(),
    public comment: Option<string> = Option.none(),
    public coordinates: Option<Coords> = Option.none(),
    public geocoder: Option<string> = Option.none()
  ) { }
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
