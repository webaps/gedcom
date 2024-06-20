import Phrase from './phrase';
import { RelationMapping } from '../../gedcom';
import Structures from '../structure';
import { FamilyChildStatus as FamilyChildStatusEnum } from '../enums';
import { tryFromValue } from '../../utils/enum';

export default class FamilyChildStatus extends Structures<FamilyChildStatusEnum> {
  protected typeMapping: RelationMapping = {
    PHRASE: { class: Phrase, multiple: false },
  };
  protected setValue(value: string) {
    this.value = tryFromValue(value, FamilyChildStatusEnum);
  }
}
