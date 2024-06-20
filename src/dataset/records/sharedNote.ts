import Record from '../record';
import { RelationMapping } from '../../gedcom';
import MediaType from '../structures/mediaType';
import Language from '../structures/language';
import NoteTranslation from '../structures/noteTranslation';
import { ChangedDate, CreationDate, IdentifierStructure, SourceCitation } from '../substructures';

export default class SharedNote extends Record<string> {
  protected typeMapping: RelationMapping = {
    MIME: { class: MediaType, multiple: false },
    LANG: { class: Language, multiple: false },
    TRAN: { class: NoteTranslation, multiple: true },
    ...SourceCitation(true),
    ...IdentifierStructure(true),
    ...ChangedDate,
    ...CreationDate,
  };
}
