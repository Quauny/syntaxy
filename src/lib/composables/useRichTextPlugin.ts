import { injectStrict } from '@/lib/utils';
import { EditorInjectionKey } from '@/lib/symbols';
import { registerRichText } from '@lexical/rich-text';

export default function useRichTextPlugin() {
  const editor = injectStrict(EditorInjectionKey);

  registerRichText(editor);
}
