import Structures from '../structure';
import { RelationMapping } from '../../gedcom';
import Phrase from './phrase';
import { Adoption } from '../enums';

export default class FamilyChildAdoption extends Structures<Adoption> {
  protected typeMapping: RelationMapping = {
    PHRASE: { class: Phrase, multiple: false },
  };
}
