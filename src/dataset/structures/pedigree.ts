import Structures from '../structure';
import { RelationMapping } from '../../gedcom';
import Phrase from './phrase';
import { Pedigree as PedigreeEnum } from '../enums';
import { tryFromValue } from '../../utils/enum';

export default class Pedigree extends Structures<PedigreeEnum> {
  protected typeMapping: RelationMapping = {
    PHRASE: { class: Phrase, multiple: false },
  };

  protected setValue(value: string) {
    this.value = tryFromValue(value, PedigreeEnum);
  }
}
