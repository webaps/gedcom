import Family from './dataset/records/family';
import Individual from './dataset/records/individual';
import Multimedia from './dataset/records/multimedia';
import Repository from './dataset/records/repository';
import SharedNote from './dataset/records/sharedNote';
import Header from './dataset/header';
import Gedcom, { RelationMapping } from './gedcom';
import Source from './dataset/records/source';
import Submitter from './dataset/records/submitter';

class Document extends Gedcom {
  protected typeMapping: RelationMapping = {
    HEAD: { class: Header, multiple: false },
    FAM: { class: Family, multiple: true },
    INDI: { class: Individual, multiple: true },
    OBJE: { class: Multimedia, multiple: true },
    REPO: { class: Repository, multiple: true },
    SNOTE: { class: SharedNote, multiple: true },
    NOTE: { class: SharedNote, multiple: true },
    SOUR: { class: Source, multiple: true },
    SUBM: { class: Submitter, multiple: true },
  };
}

export default Document;
