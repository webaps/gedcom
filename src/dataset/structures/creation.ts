import Structures from '../structure';
import { RelationMapping } from '../../gedcom';
import DateExact from './dateExact';

export default class Creation extends Structures<never> {
  protected typeMapping: RelationMapping = {
    DATE: { class: DateExact, multiple: false },
  };
}
