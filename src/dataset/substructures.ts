import { RelationMapping } from '../gedcom';
import FamilyNumberOfChildren from './structures/familyNumberOfChildren';
import FamilyResidence from './structures/familyResidence';
import FamilyFact from './structures/familyFact';
import Husband from './structures/husband';
import Wife from './structures/wife';
import Annulment from './structures/annulment';
import FamilyCensus from './structures/familyCensus';
import Divorce from './structures/divorce';
import DivorceFilled from './structures/divorceFilled';
import Engagement from './structures/engagement';
import MarriageBann from './structures/marriageBann';
import MarriageContract from './structures/marriageContract';
import MarriageLicense from './structures/marriageLicense';
import Marriage from './structures/marriage';
import MarriageSettlement from './structures/marriageSettlement';
import FamilyEvent from './structures/familyEvent';
import Date from './structures/date';
import Phone from './structures/phone';
import Email from './structures/email';
import Fax from './structures/fax';
import WWW from './structures/www';
import ResponsibleAgency from './structures/responsibleAgency';
import Religion from './structures/religion';
import Cause from './structures/cause';
import Restriction from './structures/restriction';
import SortDate from './structures/sortDate';
import Place from './structures/place';
import Note from './structures/note';
import SharedNote from './references/sharedNote';
import Source from './references/source';
import Multimedia from './references/multimedia';
import Association from './references/association';
import Address from './structures/address';
import DidNotHappen from './structures/didNotHappen';
import Change from './structures/change';
import Creation from './structures/creation';
import IndividualName from './structures/individualName';
import NamePrefix from './structures/namePrefix';
import GivenName from './structures/givenName';
import Nickname from './structures/nickname';
import SurnamePrefix from './structures/surnamePrefix';
import Surname from './structures/surname';
import NameSuffix from './structures/nameSuffix';
import Age from './structures/age';
import Caste from './structures/caste';
import PhysicalDescription from './structures/physicalDescription';
import Education from './structures/education';
import IdentifyingNumber from './structures/identifyingNumber';
import Nationality from './structures/nationality';
import IndividualNumberOfChildren from './structures/individualNumberOfChildren';
import NumberOfMarriages from './structures/numberOfMarriages';
import Occupation from './structures/occupation';
import Property from './structures/property';
import IndividualResidence from './structures/individualResidence';
import SocialSecurityNumber from './structures/socialSecurityNumber';
import IndividualTitle from './structures/individualTitle';
import IndividualFact from './structures/individualFact';
import Adoption from './structures/adoption';
import Baptism from './structures/baptism';
import BarMitzvah from './structures/barMitzvah';
import BasMitzvah from './structures/basMitzvah';
import Birth from './structures/birth';
import Blessing from './structures/blessing';
import DepositingRemains from './structures/depositingRemains';
import IndividualCensus from './structures/individualCensus';
import Christening from './structures/christening';
import AdultChristening from './structures/adultChristening';
import Confirmation from './structures/confirmation';
import Cremation from './structures/cremation';
import Death from './structures/death';
import Emigration from './structures/emigration';
import FirstCommunion from './structures/firstCommunion';
import Graduation from './structures/graduation';
import Immigration from './structures/immigration';
import Naturalization from './structures/naturalization';
import Ordination from './structures/ordination';
import Probate from './structures/probate';
import Retirement from './structures/retirement';
import Will from './structures/will';
import UniqueIdentifier from './structures/uniqueIdentifier';
import ExternalIdentifier from './structures/externalIdentifier';
import Reference from './structures/reference';
import IndividualReligion from './structures/individualReligion';
import Repository from './references/repository';

export type RelationMappingStructure = (multiple: boolean) => RelationMapping;

export const FamilyAttributesStructure: RelationMappingStructure = multiple => ({
  NCHI: { class: FamilyNumberOfChildren, multiple },
  RESI: { class: FamilyResidence, multiple },
  FACT: { class: FamilyFact, multiple },
});

export const PlaceStructure: RelationMappingStructure = multiple => ({
  PLAC: { class: Place, multiple },
});

export const AddressStructure: RelationMappingStructure = multiple => ({
  ADDR: { class: Address, multiple },
});

export const AssociationStructure: RelationMappingStructure = multiple => ({
  ASSO: { class: Association, multiple },
});

export const NoteStructure: RelationMappingStructure = multiple => ({
  NOTE: { class: Note, multiple },
  SNOTE: { class: SharedNote, multiple },
});

export const SourceCitation: RelationMappingStructure = multiple => ({
  SOUR: { class: Source, multiple },
});

export const SourceRepositoryCitation: RelationMappingStructure = multiple => ({
  REPO: { class: Repository, multiple },
});

export const MultimediaLink: RelationMappingStructure = multiple => ({
  OBJE: { class: Multimedia, multiple },
});

export const FamilyEventStructure: RelationMappingStructure = multiple => ({
  ANUL: { class: Annulment, multiple },
  CENS: { class: FamilyCensus, multiple },
  DIV: { class: Divorce, multiple },
  DIVF: { class: DivorceFilled, multiple },
  ENGA: { class: Engagement, multiple },
  MARB: { class: MarriageBann, multiple },
  MARC: { class: MarriageContract, multiple },
  MARL: { class: MarriageLicense, multiple },
  MARR: { class: Marriage, multiple },
  MARS: { class: MarriageSettlement, multiple },
  EVEN: { class: FamilyEvent, multiple },
});

export const NonEventStructure: RelationMappingStructure = multiple => ({
  NO: { class: DidNotHappen, multiple },
});

export const IndividualAttributesStructure: RelationMappingStructure = multiple => ({
  CAST: { class: Caste, multiple },
  DSCR: { class: PhysicalDescription, multiple },
  EDUC: { class: Education, multiple },
  IDNO: { class: IdentifyingNumber, multiple },
  NATI: { class: Nationality, multiple },
  NCHI: { class: IndividualNumberOfChildren, multiple },
  NMR: { class: NumberOfMarriages, multiple },
  OCCU: { class: Occupation, multiple },
  PROP: { class: Property, multiple },
  RELI: { class: IndividualReligion, multiple },
  RESI: { class: IndividualResidence, multiple },
  SSN: { class: SocialSecurityNumber, multiple },
  TITL: { class: IndividualTitle, multiple },
  FACT: { class: IndividualFact, multiple },
});

export const IndividualEventStructure: RelationMappingStructure = multiple => ({
  ADOP: { class: Adoption, multiple },
  BAPM: { class: Baptism, multiple },
  BARM: { class: BarMitzvah, multiple },
  BASM: { class: BasMitzvah, multiple },
  BIRT: { class: Birth, multiple },
  BLES: { class: Blessing, multiple },
  BURI: { class: DepositingRemains, multiple },
  CENS: { class: IndividualCensus, multiple },
  CHR: { class: Christening, multiple },
  CHRA: { class: AdultChristening, multiple },
  CONF: { class: Confirmation, multiple },
  CREM: { class: Cremation, multiple },
  DEAT: { class: Death, multiple },
  EMIG: { class: Emigration, multiple },
  FCOM: { class: FirstCommunion, multiple },
  GRAD: { class: Graduation, multiple },
  IMMI: { class: Immigration, multiple },
  NATU: { class: Naturalization, multiple },
  ORDN: { class: Ordination, multiple },
  PROB: { class: Probate, multiple },
  RETI: { class: Retirement, multiple },
  WILL: { class: Will, multiple },
});

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const LdsIndividualOrdinance: RelationMappingStructure = multiple => ({
  // TODO implement this
});

export const IdentifierStructure: RelationMappingStructure = multiple => ({
  REFN: { class: Reference, multiple },
  UID: { class: UniqueIdentifier, multiple },
  EXID: { class: ExternalIdentifier, multiple },
});

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const LdsSpouseSealing: RelationMappingStructure = multiple => ({
  // TODO implement this
});

export const PersonalNameStructure: RelationMappingStructure = multiple => ({
  NAME: { class: IndividualName, multiple },
});

export const DateValue: RelationMapping = {
  DATE: { class: Date, multiple: false },
};

export const EventDetail: RelationMapping = {
  ...DateValue,
  ...PlaceStructure(false),
  ...AddressStructure(false),
  PHON: { class: Phone, multiple: true },
  EMAIL: { class: Email, multiple: true },
  FAX: { class: Fax, multiple: true },
  WWW: { class: WWW, multiple: true },
  AGNC: { class: ResponsibleAgency, multiple: false },
  RELI: { class: Religion, multiple: false },
  CAUS: { class: Cause, multiple: false },
  RESN: { class: Restriction, multiple: false },
  SDATE: { class: SortDate, multiple: false },
  ...AssociationStructure(true),
  ...NoteStructure(true),
  ...SourceCitation(true),
  ...MultimediaLink(true),
  UID: { class: SortDate, multiple: true },
};

export const IndividualEventDetail: RelationMapping = {
  ...EventDetail,
  AGE: { class: Age, multiple: false },
};

export const FamilyEventDetail: RelationMapping = {
  HUSB: { class: Husband, multiple: false },
  WIFE: { class: Wife, multiple: false },
  ...EventDetail,
};

export const PersonalNamePieces: RelationMapping = {
  NPFX: { class: NamePrefix, multiple: true },
  GIVN: { class: GivenName, multiple: true },
  NICK: { class: Nickname, multiple: true },
  SPFX: { class: SurnamePrefix, multiple: true },
  SURN: { class: Surname, multiple: true },
  NSFX: { class: NameSuffix, multiple: true },
};

export const ChangedDate: RelationMapping = {
  CHAN: { class: Change, multiple: false },
};

export const CreationDate: RelationMapping = {
  CREA: { class: Creation, multiple: false },
};
