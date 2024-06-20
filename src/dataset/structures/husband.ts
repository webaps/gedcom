import Structures from '../structure';
import Age from './age';
import { RelationMapping } from '../../gedcom';

class Husband extends Structures<never> {
  protected typeMapping: RelationMapping = {
    AGE: { class: Age, multiple: false },
  };
}

export default Husband;
