import Structures from '../structure';
import { RelationMapping } from '../../gedcom';
import Type from './type';
import { IndividualEventDetail } from '../substructures';
import FamilyChild from '../references/familyChild';

export default class Birth extends Structures<never> {
  protected typeMapping: RelationMapping = {
    TYPE: { class: Type, multiple: false },
    ...IndividualEventDetail,
    FAMC: { class: FamilyChild, multiple: false },
  };
}
