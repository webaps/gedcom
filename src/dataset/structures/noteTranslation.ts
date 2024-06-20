import { Text } from '../dataTypes';
import Structures from '../structure';
import { RelationMapping } from '../../gedcom';
import Language from './language';
import MediaType from './mediaType';

export default class NoteTranslation extends Structures<Text> {
  protected typeMapping: RelationMapping = {
    MIME: { class: MediaType, multiple: false },
    LANG: { class: Language, multiple: false },
  };
}
