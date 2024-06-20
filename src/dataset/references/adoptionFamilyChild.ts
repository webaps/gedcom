import Reference from '../reference';
import Records from '../record';
import { RelationMapping } from '../../gedcom';
import Family from '../records/family';
import FamilyChildAdoption from '../structures/familyChildAdoption';

export default class AdoptionFamilyChild extends Reference {
  protected type: typeof Records<any> = Family;
  protected typeMapping: RelationMapping = {
    ADOP: { class: FamilyChildAdoption, multiple: false },
  };
}
