import Structures from '../structure';
import { Special } from '../dataTypes';
import { RelationMapping } from '../../gedcom';
import ExternalIdentifierType from './externalIdentifierType';

export default class ExternalIdentifier extends Structures<Special> {
  protected typeMapping: RelationMapping = {
    TYPE: { class: ExternalIdentifierType, multiple: false },
  };
}
