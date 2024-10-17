import { useEditor } from '@/lib/composables';
import { registerRichText } from '@lexical/rich-text';

export default function useRichTextPlugin() {
  const editor = useEditor();

  registerRichText(editor);
}
