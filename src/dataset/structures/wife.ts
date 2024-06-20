import Structures from '../structure';
import Age from './age';
import { RelationMapping } from '../../gedcom';

class Wife extends Structures<never> {
  protected typeMapping: RelationMapping = {
    AGE: { class: Age, multiple: false },
  };
}

export default Wife;
