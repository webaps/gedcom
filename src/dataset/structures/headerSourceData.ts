import Structures from '../structure';
import { RelationMapping } from '../../gedcom';
import { Text } from '../dataTypes';
import DateExact from './dateExact';
import Copyright from './copyright';

export default class HeaderSourceData extends Structures<Text> {
  protected typeMapping: RelationMapping = {
    DATE: { class: DateExact, multiple: false },
    COPR: { class: Copyright, multiple: false },
  };
}
