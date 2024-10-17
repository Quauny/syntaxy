import { faRotateLeft, faRotateRight } from '@fortawesome/free-solid-svg-icons';
import type { IconDefinition } from '@fortawesome/free-solid-svg-icons';

export enum IconName {
  Undo = 'UNDO',
  Redo = 'REDO',
}

export const iconsMap = new Map<IconName, IconDefinition>([
  [IconName.Undo, faRotateLeft],
  [IconName.Redo, faRotateRight],
]);
