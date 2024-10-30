import {
  INSERT_ORDERED_LIST_COMMAND,
  INSERT_UNORDERED_LIST_COMMAND,
} from '@lexical/list';
import type { LexicalEditor } from 'lexical';

export const enum ListTypeKey {
  Bullet = 'bullet',
  Number = 'number',
}

function formatBulletList(editor: LexicalEditor) {
  editor.dispatchCommand(INSERT_UNORDERED_LIST_COMMAND, undefined);
}

function formatNumberedList(editor: LexicalEditor) {
  editor.dispatchCommand(INSERT_ORDERED_LIST_COMMAND, undefined);
}

export function formatList(editor: LexicalEditor, type: ListTypeKey) {
  if (type === ListTypeKey.Bullet) {
    formatBulletList(editor);
    return;
  }

  formatNumberedList(editor);
}
