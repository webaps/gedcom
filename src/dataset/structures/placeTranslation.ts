import { List, Text } from '../dataTypes';
import Structures from '../structure';
import { RelationMapping } from '../../gedcom';
import Language from './language';

export default class PlaceTranslation extends Structures<List<Text>> {
  protected typeMapping: RelationMapping = {
    LANG: { class: Language, multiple: false },
  };
}
