import Structures from '../structure';
import { Text } from '../dataTypes';
import { RelationMapping } from '../../gedcom';
import MediaType from './mediaType';
import Language from './language';
import NoteTranslation from './noteTranslation';
import { SourceCitation } from '../substructures';

export default class Note extends Structures<Text> {
  protected typeMapping: RelationMapping = {
    MIME: { class: MediaType, multiple: false },
    LANG: { class: Language, multiple: false },
    TRAN: { class: NoteTranslation, multiple: true },
    ...SourceCitation(true),
  };
}
