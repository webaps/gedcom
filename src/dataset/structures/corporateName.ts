import { Text } from '../dataTypes';
import Structures from '../structure';
import { RelationMapping } from '../../gedcom';
import { AddressStructure } from '../substructures';
import Phone from './phone';
import Email from './email';
import Fax from './fax';
import WWW from './www';

export default class CorporateName extends Structures<Text> {
  protected typeMapping: RelationMapping = {
    ...AddressStructure(false),
    PHON: { class: Phone, multiple: true },
    EMAIL: { class: Email, multiple: true },
    FAX: { class: Fax, multiple: true },
    WWW: { class: WWW, multiple: true },
  };
}
