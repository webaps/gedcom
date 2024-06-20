import Record from '../record';
import { RelationMapping } from '../../gedcom';
import Data from '../structures/data';
import Author from '../structures/author';
import Title from '../structures/title';
import Abbreviation from '../structures/abbreviation';
import Publication from '../structures/publication';
import Text from '../structures/text';
import {
  ChangedDate,
  CreationDate,
  IdentifierStructure,
  MultimediaLink,
  NoteStructure,
  SourceRepositoryCitation,
} from '../substructures';

export default class Source extends Record<never> {
  protected typeMapping: RelationMapping = {
    DATA: { class: Data, multiple: false },
    AUTH: { class: Author, multiple: false },
    TITL: { class: Title, multiple: false },
    ABBR: { class: Abbreviation, multiple: false },
    PUBL: { class: Publication, multiple: false },
    TEXT: { class: Text, multiple: false },
    ...SourceRepositoryCitation(true),
    ...IdentifierStructure(true),
    ...NoteStructure(true),
    ...MultimediaLink(true),
    ...ChangedDate,
    ...CreationDate,
  };
}
