import Structures from '../structure';
import { Age as AgeType } from '../dataTypes';
import { RelationMapping } from '../../gedcom';
import Phrase from './phrase';

//TODO: Implement age type
class Age extends Structures<AgeType> {
  protected typeMapping: RelationMapping = {
    PHRASE: { class: Phrase, multiple: false },
  };
}

export default Age;
