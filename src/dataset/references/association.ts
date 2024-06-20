import Reference from '../reference';
import Records from '../record';
import { RelationMapping } from '../../gedcom';
import Individual from '../records/individual';
import Phrase from '../structures/phrase';
import Role from '../structures/role';
import { NoteStructure, SourceCitation } from '../substructures';

export default class Association extends Reference {
  protected type: typeof Records<any> = Individual;
  protected typeMapping: RelationMapping = {
    PHRASE: { class: Phrase, multiple: false },
    ROLE: { class: Role, multiple: false },
    ...NoteStructure(true),
    ...SourceCitation(true),
  };
}
