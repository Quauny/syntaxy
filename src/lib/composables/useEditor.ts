import { injectStrict } from '@/lib/utils';
import { EditorInjectionKey } from '@/lib/symbols';

export default function useEditor() {
  const editor = injectStrict(EditorInjectionKey);

  return editor;
}
