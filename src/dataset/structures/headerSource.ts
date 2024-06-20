import Structures from '../structure';
import { RelationMapping } from '../../gedcom';
import Version from './version';
import Name from './name';
import CorporateName from './corporateName';
import HeaderSourceData from './headerSourceData';
import { Special } from '../dataTypes';

export default class HeaderSource extends Structures<Special> {
  protected typeMapping: RelationMapping = {
    VERS: { class: Version, multiple: false },
    NAME: { class: Name, multiple: false },
    CORP: { class: CorporateName, multiple: false },
    DATA: { class: HeaderSourceData, multiple: false },
  };
}
