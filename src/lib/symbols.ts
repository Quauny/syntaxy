import type { InjectionKey } from 'vue';
import type { LexicalEditor } from 'lexical';

export const EditorInjectionKey: InjectionKey<LexicalEditor> =
  Symbol('EditorInjectionKey');
