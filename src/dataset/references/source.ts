import Reference from '../reference';
import Records from '../record';
import SourceRecord from '../records/source';
import { RelationMapping } from '../../gedcom';
import { MultimediaLink, NoteStructure } from '../substructures';
import Page from '../structures/page';
import SourceData from '../structures/sourceData';
import SourceEvent from '../structures/sourceEvent';
import QualityOfData from '../structures/qualityOfData';

export default class Source extends Reference {
  protected allowVoid = true;
  protected type: typeof Records<any> = SourceRecord;
  protected typeMapping: RelationMapping = {
    PAGE: { class: Page, multiple: false },
    DATA: { class: SourceData, multiple: false },
    ENEN: { class: SourceEvent, multiple: false },
    QUAY: { class: QualityOfData, multiple: false },

    ...MultimediaLink(true),
    ...NoteStructure(true),
  };
}
