import Reference from '../reference';
import Records from '../record';
import Family from '../records/family';

export default class FamilyChild extends Reference {
  protected type: typeof Records<any> = Family;
}
