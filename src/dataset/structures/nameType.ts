import Structures from '../structure';
import { NameType as NameTypeEnum } from '../enums';
import Phrase from './phrase';
import { RelationMapping } from '../../gedcom';

export default class NameType extends Structures<NameTypeEnum> {
  protected typeMapping: RelationMapping = {
    PHRASE: { class: Phrase, multiple: false },
  };
}
