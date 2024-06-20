import Record from '../record';
import { RelationMapping } from '../../gedcom';
import { ChangedDate, CreationDate, IdentifierStructure, NoteStructure, SourceCitation } from '../substructures';
import Restriction from '../structures/restriction';
import File from '../structures/file';

export default class Multimedia extends Record<never> {
  protected typeMapping: RelationMapping = {
    RESN: { class: Restriction, multiple: false },
    FILE: { class: File, multiple: true },
    ...IdentifierStructure(true),
    ...NoteStructure(true),
    ...SourceCitation(true),
    ...ChangedDate,
    ...CreationDate,
  };
}
