import Structures from '../structure';
import { RelationMapping } from '../../gedcom';
import ExtensionTag from './extensionTag';

export default class ExtensionSchema extends Structures<never> {
  protected typeMapping: RelationMapping = {
    TAG: { class: ExtensionTag, multiple: true },
  };
}
