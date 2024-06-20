export enum Restriction {
  /** This data was marked as confidential by the user. */
  Confidential = 'CONFIDENTIAL',
  /** Some systems may ignore changes to this data. */
  Locked = 'LOCKED',
  /**
   * This data is not to be shared outside of a trusted circle, generally because it contains information about living
   * individuals. This definition is known to admit multiple interpret
   */
  Privacy = 'PRIVACY',
}

export enum Role {
  /** Child */
  Child = 'CHIL',
  /** Religious official in event; implies `OFFICIATOR` */
  Clergy = 'CLERGY',
  /** Father; implies `PARENT` */
  Father = 'FATH',
  /** Friend */
  Friend = 'FRIEND',
  /** Godparent or related role in other religions */
  Godparent = 'GODP',
  /** Husband; implies `SPOU` */
  Husband = 'HUSB',
  /** Mother; implies `PARENT` */
  Mother = 'MOTH',
  /** A sibling from the same pregnancy (twin, triplet, quadruplet, and so on). A `PHRASE` can be used to specify the kind of multiple birth. */
  Multiple = 'MULT',
  /** Neighbor */
  Neighbor = 'NGHBR',
  /** Officiator of the event */
  Officiator = 'OFFICIATOR',
  /** Parent */
  Parent = 'PARENT',
  /** Spouse */
  Spouse = 'SPOU',
  /** Wife; implies `SPOU` */
  Wife = 'WIFE',
  /** Witness */
  Witness = 'WITN',
  /** A value not listed here; should have a `PHRASE` substructure */
  Other = 'OTHER',
}

export enum EventType {
  /** A census event */
  Census = 'CENS',
  /** A count of children */
  CountOfChildren = 'NCHI',
  /** A residence attribute */
  Residence = 'RESI',
  /** A generic attribute */
  Fact = 'FACT',
  /** A generic event */
  Event = 'EVEN',
}

export enum Event {
  /** A census event */
  Census = 'CENS',
}

export enum Quality {
  /** Unreliable evidence or estimated data */
  Unreliable,
  /** Questionable reliability of evidence (interviews, census, oral genealogies, or potential for bias, such as an autobiography) */
  Questionable,
  /** Secondary evidence, data officially recorded sometime after the event */
  Secondary,
  /** Direct and primary evidence used, or by dominance of the evidence */
  Primary,
}

export enum Sex {
  /** Male */
  Male = 'M',
  /** Female */
  Female = 'F',
  /** Does not fit the typical definition of only Male or only Female */
  Other = 'X',
  /** Cannot be determined from available sources */
  Unknown = 'U',
}

export enum Pedigree {
  /** Adoptive parents */
  Adopted = 'ADOPTED',
  /** Family structure at time of birth */
  Birth = 'BIRTH',
  /** The child was included in a foster or guardian family */
  Foster = 'FOSTER',
  /** The child was sealed to parents other than birth parents */
  Sealing = 'SEALING',
  /** A value not listed here; should have a `PHRASE` substructure */
  Other = 'OTHER',
}

export enum FamilyChildStatus {
  /** Linking this child to this family is suspect, but the linkage has been neither proven nor disproven. */
  Challenged = 'CHALLENGED',
  /** There has been a claim by some that this child belongs to this family, but the linkage has been disproven. */
  Disproven = 'DISPROVEN',
  /** Linking this child to this family has been proven. */
  Proven = 'PROVEN',
}

export enum NameType {
  /** Also known as, alias, etc. */
  AlsoKnownAs = 'AKA',
  /** Name given at or near birth. */
  BirthName = 'BIRTH',
  /** Name assumed at the time of immigration. */
  ImmigrantName = 'IMMIGRANT',
  /** Maiden name, name before first marriage. */
  MaidenName = 'MAIDEN',
  /** Married name, assumed as part of marriage. */
  MarriedName = 'MARRIED',
  /** Name used professionally (pen, screen, stage name). */
  ProfessionalName = 'PROFESSIONAL',
  /** A value not listed here; should have a `PHRASE` substructure. */
  Other = 'OTHER',
}

export enum Adoption {
  /** Adopted by the `HUSB` of the `FAM` pointed to by `FAMC`. */
  Husband = 'HUSB',
  /** Adopted by the `WIFE` of the `FAM` pointed to by `FAMC`. */
  Wife = 'WIFE',
  /** Adopted by both `HUSB` and `WIFE` of the `FAM` pointed to by `FAMC`. */
  Both = 'BOTH',
}

export enum Medium {
  /** An audio recording */
  Audio = 'AUDIO',
  /** A bound book */
  Book = 'BOOK',
  /** A card or file entry */
  Card = 'CARD',
  /** A digital artifact */
  Electronic = 'ELECTRONIC',
  /** Microfiche */
  Fiche = 'FICHE',
  /** Microfilm */
  Film = 'FILM',
  /** Printed periodical */
  Magazine = 'MAGAZINE',
  /** Written pages */
  Manuscript = 'MANUSCRIPT',
  /** A cartographic map */
  Map = 'MAP',
  /** Printed newspaper */
  Newspaper = 'NEWSPAPER',
  /** Photograph */
  Photo = 'PHOTO',
  /** Burial marker or related memorial */
  Tombstone = 'TOMBSTONE',
  /** Motion picture recording */
  Video = 'VIDEO',
  /** A value not listed here; should have a `PHRASE` substructure */
  Other = 'OTHER',
}
