import Structures from '../structure';
import { DateExact as DateExactType } from '../dataTypes';
import { RelationMapping } from '../../gedcom';
import Time from './time';

export default class DateExact extends Structures<DateExactType> {
  protected typeMapping: RelationMapping = {
    TIME: { class: Time, multiple: false },
  };
}
