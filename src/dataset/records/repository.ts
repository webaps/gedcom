import Record from '../record';
import { RelationMapping } from '../../gedcom';
import Name from '../structures/name';
import { AddressStructure, ChangedDate, CreationDate, IdentifierStructure, NoteStructure } from '../substructures';
import Phone from '../structures/phone';
import Email from '../structures/email';
import Fax from '../structures/fax';
import WWW from '../structures/www';

export default class Repository extends Record<never> {
  protected typeMapping: RelationMapping = {
    NAME: { class: Name, multiple: false },
    ...AddressStructure(false),
    PHON: { class: Phone, multiple: true },
    EMAIL: { class: Email, multiple: true },
    FAX: { class: Fax, multiple: true },
    WWW: { class: WWW, multiple: true },
    ...IdentifierStructure(true),
    ...NoteStructure(true),
    ...ChangedDate,
    ...CreationDate,
  };
}
