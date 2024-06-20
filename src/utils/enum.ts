export const tryFrom = <T extends Record<string, string | number>>(key: string, enumObj: T): T[keyof T] | undefined => {
  const value = enumObj[key];

  if (value === undefined) {
    return undefined;
  }

  return value as T[keyof T];
};

export const tryFromValue = <T extends Record<string, string | number>>(
  value: string | number,
  enumObj: T
): T[keyof T] | undefined => {
  if (Object.values(enumObj).includes(value)) {
    return value as T[keyof T];
  }

  return undefined;
};
