import Structures from '../structure';
import { Quality } from '../enums';
import { tryFromValue } from '../../utils/enum';

export default class QualityOfData extends Structures<Quality> {
  protected setValueFromData(value: string) {
    this.value = tryFromValue(parseInt(value), Quality);
  }
}
