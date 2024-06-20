import Structures from '../structure';
import { RelationMapping } from '../../gedcom';
import Phrase from './phrase';
import Role from './role';
import { EventType } from '../enums';
import { tryFromValue } from '../../utils/enum';

export default class SourceEvent extends Structures<EventType> {
  protected typeMapping: RelationMapping = {
    PHRASE: { class: Phrase, multiple: false },
    ROLE: { class: Role, multiple: false },
  };

  protected setValue(value: string) {
    this.value = tryFromValue(value, EventType);
  }
}
