import Reference from '../reference';
import Records from '../record';
import MultimediaRecord from '../records/multimedia';
import Crop from '../structures/crop';
import { RelationMapping } from '../../gedcom';
import Title from '../structures/title';

export default class Multimedia extends Reference {
  protected type: typeof Records<any> = MultimediaRecord;
  protected typeMapping: RelationMapping = {
    CROP: { class: Crop, multiple: false },
    TITL: { class: Title, multiple: false },
  };
}
