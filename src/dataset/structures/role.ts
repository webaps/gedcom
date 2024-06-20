import Structures from '../structure';
import { RelationMapping } from '../../gedcom';
import Phrase from './phrase';
import { Role as RoleEnum } from '../enums';
import { tryFromValue } from '../../utils/enum';

export default class Role extends Structures<RoleEnum> {
  protected typeMapping: RelationMapping = {
    PHRASE: { class: Phrase, multiple: false },
  };

  protected setValue(value: string) {
    this.value = tryFromValue(value, RoleEnum);
  }
}
