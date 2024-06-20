import Reference from '../reference';
import Records from '../record';
import SharedNoteRecord from '../records/sharedNote';

export default class SharedNote extends Reference {
  protected type: typeof Records<any> = SharedNoteRecord;
}
