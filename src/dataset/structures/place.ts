import { List, Text } from '../dataTypes';
import Structures from '../structure';
import { RelationMapping } from '../../gedcom';
import PlaceFormat from './placeFormat';
import Language from './language';
import PlaceTranslation from './placeTranslation';
import Map from './map';
import ExternalIdentifier from './externalIdentifier';
import { NoteStructure } from '../substructures';

export default class Place extends Structures<List<Text>> {
  protected typeMapping: RelationMapping = {
    FORM: { class: PlaceFormat, multiple: false },
    LANG: { class: Language, multiple: false },
    TRAN: { class: PlaceTranslation, multiple: true },
    MAP: { class: Map, multiple: false },
    EXID: { class: ExternalIdentifier, multiple: true },
    ...NoteStructure(true),
  };
}
