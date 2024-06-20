import Reference from '../reference';
import Records from '../record';
import Submitter from '../records/submitter';

export default class DescendantInterest extends Reference {
  protected type: typeof Records<any> = Submitter;
}
