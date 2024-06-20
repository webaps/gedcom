import Reference from '../reference';
import Records from '../record';
import Phrase from '../structures/phrase';
import { RelationMapping } from '../../gedcom';
import Individual from '../records/individual';

export default class Alias extends Reference {
  protected type: typeof Records<any> = Individual;
  protected typeMapping: RelationMapping = {
    PHRASE: { class: Phrase, multiple: false },
  };
}
