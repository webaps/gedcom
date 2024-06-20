import Structures from '../structure';
import { Text } from '../dataTypes';
import { RelationMapping } from '../../gedcom';
import Type from './type';
import { IndividualEventDetail } from '../substructures';

export default class IndividualResidence extends Structures<Text> {
  protected typeMapping: RelationMapping = {
    TYPE: { class: Type, multiple: false },
    ...IndividualEventDetail,
  };
}
