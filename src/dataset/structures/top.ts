import Structures from '../structure';
import { Integer } from '../dataTypes';

export default class Top extends Structures<Integer> {
  protected setValue(value: string) {
    this.value = parseInt(value);
  }
}
