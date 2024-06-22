import Structures from '../structure';
import { Event } from '../enums';
import { RelationMapping } from '../../gedcom';
import { tryFromValue } from '../../utils/enum';
import DidNotHappenDate from './didNotHappenDate';
import { NoteStructure, SourceCitation } from '../substructures';

export default class DidNotHappen extends Structures<Event> {
  protected typeMapping: RelationMapping = {
    DATE: { class: DidNotHappenDate, multiple: false },
    ...NoteStructure(true),
    ...SourceCitation(true),
  };

  protected setValueFromData(value: string) {
    this.value = tryFromValue(value, Event);
  }
}
