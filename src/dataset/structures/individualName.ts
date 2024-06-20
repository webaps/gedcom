import { PersonalName } from '../dataTypes';
import Structures from '../structure';
import { RelationMapping } from '../../gedcom';
import NameType from './nameType';
import { NoteStructure, PersonalNamePieces, SourceCitation } from '../substructures';
import PersonalNameTranslation from './personalNameTranslation';

export default class IndividualName extends Structures<PersonalName> {
  protected typeMapping: RelationMapping = {
    NAME: { class: NameType, multiple: false },
    ...PersonalNamePieces,
    TRAN: { class: PersonalNameTranslation, multiple: false },
    ...NoteStructure(true),
    ...SourceCitation(true),
  };
}
