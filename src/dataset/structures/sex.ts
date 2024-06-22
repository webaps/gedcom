import Structures from '../structure';
import { Sex as SexEnum } from '../enums';
import { tryFromValue } from '../../utils/enum';

export default class Sex extends Structures<SexEnum> {
  protected setValueFromData(value: string) {
    this.value = tryFromValue(value, SexEnum);
  }
}
