import Reference from '../reference';
import Records from '../record';
import { RelationMapping } from '../../gedcom';
import { NoteStructure } from '../substructures';
import Family from '../records/family';

export default class IndividualFamilySpouse extends Reference {
  protected type: typeof Records<any> = Family;
  protected typeMapping: RelationMapping = {
    ...NoteStructure(true),
  };
}
