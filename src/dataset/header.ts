import Gedcom, { RelationMapping } from '../gedcom';
import { NoteStructure } from './substructures';
import GedcomStructure from './structures/gedcom';
import ExtensionSchema from './structures/extensionSchema';
import HeaderSource from './structures/headerSource';
import Destination from './structures/destination';
import DateExact from './structures/dateExact';
import Submitter from './references/submitter';
import Copyright from './structures/copyright';
import HeaderLanguage from './structures/headerLanguage';
import HeaderPlace from './structures/headerPlace';

class Header extends Gedcom {
  protected typeMapping: RelationMapping = {
    GEDC: { class: GedcomStructure, multiple: false },
    SCHMA: { class: ExtensionSchema, multiple: false },
    SOUR: { class: HeaderSource, multiple: false },
    DEST: { class: Destination, multiple: false },
    DATE: { class: DateExact, multiple: false },
    SUBM: { class: Submitter, multiple: false },
    COPR: { class: Copyright, multiple: false },
    LANG: { class: HeaderLanguage, multiple: false },
    PLAC: { class: HeaderPlace, multiple: false },
    ...NoteStructure(false),
  };
}

export default Header;
