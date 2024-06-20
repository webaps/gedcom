import Structures from '../structure';
import { Integer } from '../dataTypes';
import { RelationMapping } from '../../gedcom';
import Type from './type';
import { IndividualEventDetail } from '../substructures';

export default class NumberOfMarriages extends Structures<Integer> {
  protected typeMapping: RelationMapping = {
    TYPE: { class: Type, multiple: false },
    ...IndividualEventDetail,
  };
}
