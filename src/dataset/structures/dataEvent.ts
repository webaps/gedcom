import Structures from '../structure';
import { List } from '../dataTypes';
import { RelationMapping } from '../../gedcom';
import { EventType } from '../enums';
import DataEventDate from './dataEventDate';
import { PlaceStructure } from '../substructures';

export default class DataEvent extends Structures<List<EventType>> {
  protected typeMapping: RelationMapping = {
    DATE: { class: DataEventDate, multiple: false },
    ...PlaceStructure(false),
  };
}
