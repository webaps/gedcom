import Structures from '../structure';
import { Sex as SexEnum } from '../enums';
import { tryFromValue } from '../../utils/enum';

export default class Sex extends Structures<SexEnum> {
  protected setValue(value: string) {
    this.value = tryFromValue(value, SexEnum);
  }
}
