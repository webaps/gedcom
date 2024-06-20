import Gedcom from '../gedcom';
import Records from './record';
import { GedcomLineParts } from '../utils/parser';

export default abstract class Reference extends Gedcom<string> {
  protected abstract type: typeof Records<any>;
  protected pointer: string = '';
  protected allowVoid = false;

  protected setData(line: GedcomLineParts) {
    super.setData(line);

    if (!line.pointer) {
      if (this.allowVoid) {
        this.value = line.value;

        return;
      } else {
        throw new Error('No reference found');
      }
    }

    this.pointer = line.pointer;
  }

  serializeData() {
    return {
      _pointer: this.pointer,
      _value: this.value,
    };
  }
}
