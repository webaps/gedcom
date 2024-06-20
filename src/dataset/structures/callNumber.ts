import Structures from '../structure';
import { Special } from '../dataTypes';
import { RelationMapping } from '../../gedcom';
import Medium from './medium';

export default class CallNumber extends Structures<Special> {
  protected typeMapping: RelationMapping = {
    MEDI: { class: Medium, multiple: false },
  };
}
