import { useEditor } from '@/lib/composables';
import { createEmptyHistoryState, registerHistory } from '@lexical/history';

export default function useHistoryPlugin() {
  const editor = useEditor();

  registerHistory(editor, createEmptyHistoryState(), 1000);
}
