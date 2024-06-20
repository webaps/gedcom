import { FilePath } from '../dataTypes';
import Structures from '../structure';
import { RelationMapping } from '../../gedcom';
import Format from './format';

export default class FileTranslation extends Structures<FilePath> {
  protected typeMapping: RelationMapping = {
    FORM: { class: Format, multiple: false },
  };
}
