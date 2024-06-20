import Record from '../record';
import { RelationMapping } from '../../gedcom';
import Restriction from '../structures/restriction';
import {
  AssociationStructure,
  ChangedDate,
  CreationDate,
  FamilyAttributesStructure,
  FamilyEventStructure,
  IdentifierStructure,
  LdsSpouseSealing,
  MultimediaLink,
  NonEventStructure,
  NoteStructure,
  SourceCitation,
} from '../substructures';
import FamilyHusband from '../references/familyHusband';
import FamilyWife from '../references/familyWife';
import Child from '../references/child';
import Submitter from '../references/submitter';

export default class Family extends Record<never> {
  protected typeMapping: RelationMapping = {
    RESN: { class: Restriction, multiple: false },
    ...FamilyAttributesStructure(true),
    ...FamilyEventStructure(true),
    ...NonEventStructure(true),
    HUSB: { class: FamilyHusband, multiple: false },
    WIFE: { class: FamilyWife, multiple: false },
    CHIL: { class: Child, multiple: true },
    ...AssociationStructure(true),
    SUBM: { class: Submitter, multiple: true },
    ...LdsSpouseSealing(true),
    ...IdentifierStructure(true),
    ...NoteStructure(true),
    ...SourceCitation(true),
    ...MultimediaLink(true),
    ...ChangedDate,
    ...CreationDate,
  };
}
