import Reference from '../reference';
import Records from '../record';
import { RelationMapping } from '../../gedcom';
import Individual from '../records/individual';
import Phrase from '../structures/phrase';

export default class FamilyHusband extends Reference {
  protected type: typeof Records<any> = Individual;
  protected typeMapping: RelationMapping = {
    PHRASE: { class: Phrase, multiple: false },
  };
}
