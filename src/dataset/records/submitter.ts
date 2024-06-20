import Record from '../record';
import { RelationMapping } from '../../gedcom';
import Name from '../structures/name';
import {
  AddressStructure,
  ChangedDate,
  CreationDate,
  IdentifierStructure,
  MultimediaLink,
  NoteStructure,
} from '../substructures';
import Phone from '../structures/phone';
import Email from '../structures/email';
import Fax from '../structures/fax';
import WWW from '../structures/www';
import SubmitterLanguage from '../structures/submitterLanguage';

export default class Submitter extends Record<never> {
  protected typeMapping: RelationMapping = {
    NAME: { class: Name, multiple: false },
    ...AddressStructure(false),
    PHON: { class: Phone, multiple: true },
    EMAIL: { class: Email, multiple: true },
    FAX: { class: Fax, multiple: true },
    WWW: { class: WWW, multiple: true },
    ...MultimediaLink(true),
    LANG: { class: SubmitterLanguage, multiple: true },
    ...IdentifierStructure(true),
    ...NoteStructure(true),
    ...ChangedDate,
    ...CreationDate,
  };
}
