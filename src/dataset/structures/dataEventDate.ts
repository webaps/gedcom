import Structures from '../structure';
import { DatePeriod } from '../dataTypes';
import { RelationMapping } from '../../gedcom';
import Phrase from './phrase';

export default class DataEventDate extends Structures<DatePeriod> {
  protected typeMapping: RelationMapping = {
    PHRASE: { class: Phrase, multiple: false },
  };
}
