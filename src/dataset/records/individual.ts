import Record from '../record';
import { RelationMapping } from '../../gedcom';
import Restriction from '../structures/restriction';
import {
  AssociationStructure,
  ChangedDate,
  CreationDate,
  IdentifierStructure,
  IndividualAttributesStructure,
  IndividualEventStructure,
  LdsIndividualOrdinance,
  MultimediaLink,
  NonEventStructure,
  NoteStructure,
  PersonalNameStructure,
  SourceCitation,
} from '../substructures';
import Sex from '../structures/sex';
import IndividualFamilyChild from '../references/individualFamilyChild';
import IndividualFamilySpouse from '../references/individualFamilySpouse';
import Submitter from '../references/submitter';
import Alias from '../references/alias';
import AncestorInterest from '../references/ancestorInterest';
import DescendantInterest from '../references/descendantInterest';

export default class Individual extends Record<never> {
  protected typeMapping: RelationMapping = {
    RESN: { class: Restriction, multiple: false },
    ...PersonalNameStructure(true),
    SEX: { class: Sex, multiple: false },
    ...IndividualAttributesStructure(true),
    ...IndividualEventStructure(true),
    ...NonEventStructure(true),
    ...LdsIndividualOrdinance(true),
    FAMC: { class: IndividualFamilyChild, multiple: true },
    FAMS: { class: IndividualFamilySpouse, multiple: true },
    SUBM: { class: Submitter, multiple: true },
    ...AssociationStructure(true),
    ALIA: { class: Alias, multiple: true },
    ANCI: { class: AncestorInterest, multiple: true },
    DESI: { class: DescendantInterest, multiple: true },
    ...IdentifierStructure(true),
    ...NoteStructure(true),
    ...SourceCitation(true),
    ...MultimediaLink(true),
    ...ChangedDate,
    ...CreationDate,
  };
}
