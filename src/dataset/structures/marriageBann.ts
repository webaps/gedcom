import Structures from '../structure';
import { RelationMapping } from '../../gedcom';
import Type from './type';
import { FamilyEventDetail } from '../substructures';

export default class MarriageBann extends Structures<never> {
  protected typeMapping: RelationMapping = {
    TYPE: { class: Type, multiple: false },
    ...FamilyEventDetail,
  };
}