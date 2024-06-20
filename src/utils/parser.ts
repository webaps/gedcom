import Reader from './reader';
import fs from 'node:fs';

export interface GedcomLineParts {
  level: number;
  tag: string;
  reference?: string;
  pointer?: string;
  value?: string;
}

const REGEX = /^(\d+)\s+(\S+)(?:\s+(.*))?$/;

export const getPartsFromString = (line: string): GedcomLineParts | undefined => {
  const match = line.match(REGEX);

  if (!match) {
    return undefined;
  }

  const level = parseInt(match[1]);

  if (match[2].startsWith('@') && match[2].endsWith('@')) {
    const [tag, ...value] = match[3].split(' ');

    return {
      level,
      reference: match[2].slice(1, -1),
      tag,
      value: value.length > 0 ? value.join(' ') : undefined,
    };
  }

  if (match[3] && match[3].startsWith('@') && match[3].endsWith('@')) {
    return {
      level,
      tag: match[2],
      pointer: match[3].slice(1, -1),
    };
  }

  return {
    level,
    tag: match[2],
    value: match[3] ?? undefined,
  };
};

export const getPartsBlockFromPath = async (path: fs.PathLike): Promise<GedcomLineParts[]> => {
  const reader = new Reader(path);
  const block: GedcomLineParts[] = [];

  await reader.readLines(line => {
    const parts = getPartsFromString(line);

    if (parts) {
      block.push(parts);
    }
  });

  return block;
};
