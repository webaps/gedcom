import Structures from '../structure';
import { RelationMapping } from '../../gedcom';
import Type from './type';
import { IndividualEventDetail } from '../substructures';

export default class Blessing extends Structures<never> {
  protected typeMapping: RelationMapping = {
    TYPE: { class: Type, multiple: false },
    ...IndividualEventDetail,
  };
}
