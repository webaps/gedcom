import Structures from '../structure';
import { RelationMapping } from '../../gedcom';
import Type from './type';
import { IndividualEventDetail } from '../substructures';
import AdoptionFamilyChild from '../references/adoptionFamilyChild';

export default class Adoption extends Structures<never> {
  protected typeMapping: RelationMapping = {
    TYPE: { class: Type, multiple: false },
    ...IndividualEventDetail,
    FAMC: { class: AdoptionFamilyChild, multiple: false },
  };
}
