import Structures from '../structure';
import { RelationMapping } from '../../gedcom';
import Type from './type';
import { FamilyEventDetail } from '../substructures';

export default class FamilyResidence extends Structures<string> {
  protected typeMapping: RelationMapping = {
    TYPE: { class: Type, multiple: false },
    ...FamilyEventDetail,
  };

  protected setValueFromData(value: string) {
    this.value = value;
  }
}
