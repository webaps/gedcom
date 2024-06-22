import Structures from '../structure';
import { Restriction as RestrictionEnum } from '../enums';
import { List } from '../dataTypes';
import { tryFromValue } from '../../utils/enum';

class Restriction extends Structures<List<RestrictionEnum>> {
  protected setValueFromData(value: string) {
    this.value = value
      .split(',')
      .map(value => tryFromValue(value, RestrictionEnum))
      .filter(value => !!value) as List<RestrictionEnum>;
  }
}

export default Restriction;
