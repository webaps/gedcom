import fs from 'node:fs';
import readline from 'node:readline';

class Reader {
  constructor(protected path: fs.PathLike) {}

  public async readLines(cb: (line: string) => any) {
    const file = fs.createReadStream(this.path);
    const rl = readline.createInterface({
      input: file,
      crlfDelay: Infinity,
    });

    for await (const line of rl) {
      cb(line);
    }
  }
}

export default Reader;
