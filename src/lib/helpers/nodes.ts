import { HeadingNode } from '@lexical/rich-text';
import type { Klass, LexicalNode } from 'lexical';
import { ListItemNode, ListNode } from '@lexical/list';

export const nodes: Array<Klass<LexicalNode>> = [
  HeadingNode,
  ListNode,
  ListItemNode,
];
