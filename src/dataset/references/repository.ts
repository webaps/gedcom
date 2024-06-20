import Reference from '../reference';
import { RelationMapping } from '../../gedcom';
import { NoteStructure } from '../substructures';
import Records from '../record';
import RepositoryRecord from '../records/repository';
import CallNumber from '../structures/callNumber';

export default class Repository extends Reference {
  protected type: typeof Records<any> = RepositoryRecord;
  protected typeMapping: RelationMapping = {
    ...NoteStructure(true),
    CALN: { class: CallNumber, multiple: true },
  };
}
