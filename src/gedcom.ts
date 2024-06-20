import { GedcomLineParts, getPartsBlockFromPath, getPartsFromString } from './utils/parser';
import Document from './document';

export type RelationObject = {
  class: typeof Gedcom<any>;
  multiple?: boolean;
};
export type RelationMapping = Record<string, RelationObject>;

abstract class Gedcom<TValue = any> {
  protected typeMapping: RelationMapping = {};

  protected value?: TValue;
  protected relations: Record<string, Gedcom | Gedcom[]> = {};

  public fromGedcomString(data: string) {
    this.parseBlock(data.split('\n').map(getPartsFromString).filter(Boolean) as GedcomLineParts[]);
  }

  public async fromGedcomFile(filePath: string) {
    this.parseBlock(await getPartsBlockFromPath(filePath));
  }

  public toJSON(): Record<string, any> {
    return this.serialize();
  }

  public parseBlock(dataBlock: GedcomLineParts[]) {
    let currentDepth = -1;

    if (!(this instanceof Document)) {
      const headerLine = dataBlock.shift();

      if (!headerLine) {
        throw new Error('No header line found');
      }

      while (dataBlock.length > 0) {
        const continuationLine = dataBlock[0];

        if (continuationLine.tag === 'CONC' || continuationLine.tag === 'CONT') {
          if (headerLine.value) {
            headerLine.value += (continuationLine.tag === 'CONC' ? '' : '\n') + (continuationLine.value ?? '');
          } else {
            headerLine.value = continuationLine.value;
          }

          dataBlock.shift();

          continue;
        }

        break;
      }

      currentDepth = headerLine.level;
      this.setData(headerLine);
    }

    const dataBuffer: GedcomLineParts[] = [];

    while (dataBlock.length > 0) {
      const line = dataBlock.shift();

      if (!line) continue;

      dataBuffer.push(line);

      if (dataBlock.length === 0 || (dataBlock[0] && dataBlock[0].level === currentDepth + 1)) {
        const relation = this.typeMapping[dataBuffer[0].tag];

        if (!relation) continue;

        const { class: RelationClass, multiple } = relation;
        const relationName = RelationClass.getName();
        // @ts-ignore
        const relationInstance: Gedcom = new RelationClass();
        relationInstance.parseBlock(dataBuffer.splice(0, Infinity));

        if (multiple) {
          this.relations[relationName] ??= [];
          // @ts-ignore
          (this.relations[relationName] as Gedcom[]).push(relationInstance);
        } else {
          this.relations[relationName] = relationInstance;
        }
      }
    }
  }

  protected setData(line: GedcomLineParts) {
    if (line.value) {
      this.setValue(line.value);
    }
  }

  protected setValue(value: string) {
    this.value = value as TValue;
  }

  public static getName(): string {
    const name = String(this.name);
    return name.charAt(0).toLowerCase() + name.slice(1);
  }

  public serialize() {
    const relations: Record<string, any> = {};

    for (const [key, value] of Object.entries(this.relations)) {
      if (Array.isArray(value)) {
        relations[key] = value.map(item => item.serialize());
      } else {
        relations[key] = value.serialize();
      }
    }

    return {
      ...this.serializeData(),
      ...relations,
    };
  }

  protected serializeData(): Record<string, any> {
    return this.value !== undefined
      ? {
          _value: this.value,
        }
      : {};
  }
}

export default Gedcom;
