import { PersonalName } from '../dataTypes';
import Structures from '../structure';
import { RelationMapping } from '../../gedcom';
import Language from './language';
import { PersonalNamePieces } from '../substructures';

export default class PersonalNameTranslation extends Structures<PersonalName> {
  protected typeMapping: RelationMapping = {
    LANG: { class: Language, multiple: false },
    ...PersonalNamePieces,
  };
}
