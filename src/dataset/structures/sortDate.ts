import Structures from '../structure';
import { DateValue } from '../dataTypes';
import { RelationMapping } from '../../gedcom';
import Time from './time';
import Phrase from './phrase';

export default class SortDate extends Structures<DateValue> {
  protected typeMapping: RelationMapping = {
    TIME: { class: Time, multiple: false },
    PHRASE: { class: Phrase, multiple: false },
  };
}
