import Structures from '../structure';
import { RelationMapping } from '../../gedcom';
import Top from './top';
import Left from './left';
import Height from './height';
import Width from './width';

export default class Crop extends Structures<never> {
  protected typeMapping: RelationMapping = {
    TOP: { class: Top, multiple: false },
    LEFT: { class: Left, multiple: false },
    HEIGHT: { class: Height, multiple: false },
    WIDTH: { class: Width, multiple: false },
  };
}
