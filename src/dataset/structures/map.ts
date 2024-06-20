import Structures from '../structure';
import { RelationMapping } from '../../gedcom';
import Latitude from './latitude';
import Longitude from './longitude';

export default class Map extends Structures<never> {
  protected typeMapping: RelationMapping = {
    LATI: { class: Latitude, multiple: false },
    LONG: { class: Longitude, multiple: false },
  };
}
