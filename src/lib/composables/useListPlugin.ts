import { useEditor } from '@/lib/composables';
import { registerList } from '@lexical/list';

export default function useListPlugin() {
  const editor = useEditor();

  registerList(editor);
}
