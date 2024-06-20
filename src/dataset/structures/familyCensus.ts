import Structures from '../structure';
import { RelationMapping } from '../../gedcom';
import Type from './type';
import { FamilyEventDetail } from '../substructures';

class FamilyCensus extends Structures<never> {
  protected typeMapping: RelationMapping = {
    TYPE: { class: Type, multiple: false },
    ...FamilyEventDetail,
  };
}

export default FamilyCensus;
