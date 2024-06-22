import Structures from '../structure';
import { Integer } from '../dataTypes';

export default class Left extends Structures<Integer> {
  protected setValueFromData(value: string) {
    this.value = parseInt(value);
  }
}
