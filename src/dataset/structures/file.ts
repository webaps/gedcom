import Structures from '../structure';
import { FilePath } from '../dataTypes';
import Format from './format';
import Title from './title';
import FileTranslation from './fileTranslation';

export default class File extends Structures<FilePath> {
  protected typeMapping = {
    FORM: { class: Format, multiple: false },
    TITl: { class: Title, multiple: false },
    TRAN: { class: FileTranslation, multiple: true },
  };
}
