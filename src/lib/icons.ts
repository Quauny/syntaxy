import {
  faRotateLeft,
  faRotateRight,
  faArrowDown,
  faListUl,
  faListOl,
  faBold,
  faItalic,
  faUnderline,
} from '@fortawesome/free-solid-svg-icons';
import type { IconDefinition } from '@fortawesome/free-solid-svg-icons';

export enum IconName {
  Undo = 'UNDO',
  Redo = 'REDO',
  ArrowDown = 'ARROWDOWN',
  UnorderedList = 'UNORDEREDLIST',
  OrderedList = 'ORDEREDLIST',
  Bold = 'BOLD',
  Italic = 'ITALIC',
  Underline = 'UNDERLINE',
}

export const iconsMap = new Map<IconName, IconDefinition>([
  [IconName.Undo, faRotateLeft],
  [IconName.Redo, faRotateRight],
  [IconName.ArrowDown, faArrowDown],
  [IconName.UnorderedList, faListUl],
  [IconName.OrderedList, faListOl],
  [IconName.Bold, faBold],
  [IconName.Italic, faItalic],
  [IconName.Underline, faUnderline],
]);
