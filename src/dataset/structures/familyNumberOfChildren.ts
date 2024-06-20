import Structures from '../structure';
import { RelationMapping } from '../../gedcom';
import Type from './type';
import { FamilyEventDetail } from '../substructures';

export default class FamilyNumberOfChildren extends Structures<number> {
  protected typeMapping: RelationMapping = {
    TYPE: { class: Type, multiple: false },
    ...FamilyEventDetail,
  };

  protected setValue(value: string) {
    this.value = parseInt(value);
  }
}
