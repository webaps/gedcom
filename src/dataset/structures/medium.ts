import Structures from '../structure';
import { RelationMapping } from '../../gedcom';
import Phrase from './phrase';
import { Medium as MediumEnum } from '../enums';
import { tryFromValue } from '../../utils/enum';

export default class Medium extends Structures<MediumEnum> {
  protected typeMapping: RelationMapping = {
    PHRASE: { class: Phrase, multiple: false },
  };

  protected setValueFromData(value: string) {
    this.value = tryFromValue(value, MediumEnum);
  }
}
