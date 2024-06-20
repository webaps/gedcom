import Structures from '../structure';
import { Special } from '../dataTypes';
import { RelationMapping } from '../../gedcom';
import Type from './type';

export default class Reference extends Structures<Special> {
  protected typeMapping: RelationMapping = {
    TYPE: { class: Type, multiple: false },
  };
}
