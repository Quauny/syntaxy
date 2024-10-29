import { CAN_USE_DOM } from '@lexical/utils';
import {
  $createParagraphNode,
  $getRoot,
  $getSelection,
  type LexicalEditor,
} from 'lexical';

const HISTORY_MERGE_OPTIONS = { tag: 'history-merge' };

export function initializeEditor(editor: LexicalEditor) {
  editor.update(() => {
    const root = $getRoot();
    if (root.isEmpty()) {
      const paragraph = $createParagraphNode();
      root.append(paragraph);
      const activeElement = CAN_USE_DOM ? document.activeElement : null;
      if (
        $getSelection() !== null ||
        (activeElement !== null && activeElement === editor.getRootElement())
      ) {
        paragraph.select();
      }
    }
  }, HISTORY_MERGE_OPTIONS);
}
