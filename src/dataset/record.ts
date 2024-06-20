import Gedcom from '../gedcom';

abstract class Record<T> extends Gedcom<T> {
  protected reference: string = '';

  serializeData() {
    return {
      _reference: this.reference,
      _value: this.value,
    };
  }
}

export default Record;
