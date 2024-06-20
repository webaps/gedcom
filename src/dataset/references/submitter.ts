import Reference from '../reference';
import Records from '../record';
import SubmitterRecord from '../records/submitter';

export default class Submitter extends Reference {
  protected type: typeof Records<any> = SubmitterRecord;
}
