import Structures from '../structure';
import { RelationMapping } from '../../gedcom';
import GedcomVersion from './gedcomVersion';

export default class Gedcom extends Structures<never> {
  protected typeMapping: RelationMapping = {
    VERS: { class: GedcomVersion, multiple: false },
  };
}
