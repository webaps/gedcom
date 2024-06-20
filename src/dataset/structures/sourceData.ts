import Structures from '../structure';
import { RelationMapping } from '../../gedcom';
import { DateValue } from '../substructures';
import Text from './text';

export default class SourceData extends Structures<never> {
  protected typeMapping: RelationMapping = {
    ...DateValue,
    TEXT: { class: Text, multiple: true },
  };
}
