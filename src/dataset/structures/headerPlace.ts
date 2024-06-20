import { List, Text } from '../dataTypes';
import Structures from '../structure';
import { RelationMapping } from '../../gedcom';
import PlaceFormat from './placeFormat';

export default class HeaderPlace extends Structures<List<Text>> {
  protected typeMapping: RelationMapping = {
    FORM: { class: PlaceFormat, multiple: false },
  };
}
