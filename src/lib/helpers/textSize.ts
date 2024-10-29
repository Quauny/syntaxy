import { $createHeadingNode, type HeadingTagType } from '@lexical/rich-text';
import { $setBlocksType } from '@lexical/selection';
import {
  $createParagraphNode,
  $getSelection,
  $isRangeSelection,
  type LexicalEditor,
} from 'lexical';

export const enum TextSizeKey {
  Paragraph = 'paragraph',
  H1 = 'h1',
  H2 = 'h2',
  H3 = 'h3',
}

export type TextSizeOption = { key: TextSizeKey; label: string };

export const textSizeOptions: TextSizeOption[] = [
  {
    key: TextSizeKey.Paragraph,
    label: 'Normal text',
  },
  {
    key: TextSizeKey.H1,
    label: 'Heading 1',
  },
  {
    key: TextSizeKey.H2,
    label: 'Heading 2',
  },
  {
    key: TextSizeKey.H3,
    label: 'Heading 3',
  },
];

function formatParagraph(editor: LexicalEditor) {
  editor.update(() => {
    const selection = $getSelection();
    if ($isRangeSelection(selection)) {
      $setBlocksType(selection, () => $createParagraphNode());
    }
  });
}

function formatHeading(
  editor: LexicalEditor,
  currentTextSize: TextSizeKey,
  headingSize: HeadingTagType,
) {
  if (currentTextSize !== headingSize) {
    editor.update(() => {
      const selection = $getSelection();
      $setBlocksType(selection, () => $createHeadingNode(headingSize));
    });
  }
}

export function formatTextSize(
  editor: LexicalEditor,
  currentTextSize: TextSizeKey,
  item: TextSizeOption,
) {
  if (item.key !== TextSizeKey.Paragraph) {
    formatHeading(editor, currentTextSize, item.key);
    return;
  }

  formatParagraph(editor);
}
