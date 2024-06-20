import { Special } from '../dataTypes';
import Structures from '../structure';
import { RelationMapping } from '../../gedcom';
import AddressLine from './addressLine';
import Country from './country';
import PostalCode from './postalCode';
import State from './state';
import City from './city';

export default class Address extends Structures<Special> {
  protected typeMapping: RelationMapping = {
    ADR1: { class: AddressLine, multiple: false },
    ADR2: { class: AddressLine, multiple: false },
    ADR3: { class: AddressLine, multiple: false },
    CITY: { class: City, multiple: false },
    STAE: { class: State, multiple: false },
    POST: { class: PostalCode, multiple: false },
    CTRY: { class: Country, multiple: false },
  };
}
