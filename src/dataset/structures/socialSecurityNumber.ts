import Structures from '../structure';
import { Special } from '../dataTypes';
import { RelationMapping } from '../../gedcom';
import Type from './type';
import { IndividualEventDetail } from '../substructures';

export default class SocialSecurityNumber extends Structures<Special> {
  protected typeMapping: RelationMapping = {
    TYPE: { class: Type, multiple: false },
    ...IndividualEventDetail,
  };
}
