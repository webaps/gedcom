import Structures from '../structure';
import { RelationMapping } from '../../gedcom';
import DataEvent from './dataEvent';
import ResponsibleAgency from './responsibleAgency';
import { NoteStructure } from '../substructures';

export default class Data extends Structures<never> {
  protected typeMapping: RelationMapping = {
    EVEN: { class: DataEvent, multiple: true },
    AGNC: { class: ResponsibleAgency, multiple: false },
    ...NoteStructure(true),
  };
}
