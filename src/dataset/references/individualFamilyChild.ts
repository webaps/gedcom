import Reference from '../reference';
import Records from '../record';
import { RelationMapping } from '../../gedcom';
import { NoteStructure } from '../substructures';
import Family from '../records/family';
import Pedigree from '../structures/pedigree';
import FamilyChildStatus from '../structures/familyChildStatus';

export default class IndividualFamilyChild extends Reference {
  protected type: typeof Records<any> = Family;
  protected typeMapping: RelationMapping = {
    PEDI: { class: Pedigree, multiple: false },
    STAT: { class: FamilyChildStatus, multiple: false },
    ...NoteStructure(true),
  };
}
