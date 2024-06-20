import Structures from '../structure';
import { Text as TextType } from '../dataTypes';
import { RelationMapping } from '../../gedcom';
import MediaType from './mediaType';
import Language from './language';

export default class Text extends Structures<TextType> {
  protected typeMapping: RelationMapping = {
    MIME: { class: MediaType, multiple: false },
    LANG: { class: Language, multiple: false },
  };
}
