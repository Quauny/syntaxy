<script setup lang="ts">
import { computed, ref } from 'vue';
import AppButton from '@/lib/components/AppButton.vue';
import { IconName } from '@/lib/icons';
import { useEditor } from '@/lib/composables';
import {
  UNDO_COMMAND,
  REDO_COMMAND,
  FORMAT_TEXT_COMMAND,
  $getSelection,
  $isRangeSelection,
  $isRootOrShadowRoot,
} from 'lexical';
import AppSeparator from '@/lib/components/AppSeparator.vue';
import AppDropdown from './AppDropdown.vue';
import { onMounted, onUnmounted } from 'vue';
import { $findMatchingParent, $getNearestNodeOfType } from '@lexical/utils';
import { $isHeadingNode } from '@lexical/rich-text';
import {
  TextSizeKey,
  textSizeOptions,
  type TextSizeOption,
  formatTextSize,
  getShortLabel,
} from '../helpers/textSize';
import { formatList, ListTypeKey } from '../helpers/listType';
import { $isListNode, ListNode } from '@lexical/list';

const editor = useEditor();

/**** TEXT SIZE ****/
const textSize = ref(TextSizeKey.Paragraph);
const selectedTextSizeOption = computed(
  () =>
    textSizeOptions.find(item => item.key === textSize.value) as TextSizeOption,
);
const selectedTextSizeShortLabel = computed(() =>
  getShortLabel(selectedTextSizeOption.value.key),
);

/**** LIST TYPE ****/
const isUnorderedListOn = ref(false);
const isOrderedListOn = ref(false);

/**** FORMAT ****/
const isBold = ref(false);
const isItalic = ref(false);
const isUnderline = ref(false);

function $updateToolbar() {
  const selection = $getSelection();
  if ($isRangeSelection(selection)) {
    const anchorNode = selection.anchor.getNode();

    let element =
      anchorNode.getKey() === 'root'
        ? anchorNode
        : $findMatchingParent(anchorNode, e => {
            const parent = e.getParent();
            return parent !== null && $isRootOrShadowRoot(parent);
          });

    if (element === null) element = anchorNode.getTopLevelElementOrThrow();

    const elementKey = element.getKey();
    const elementDOM = editor.getElementByKey(elementKey);

    isBold.value = selection.hasFormat('bold');
    isItalic.value = selection.hasFormat('italic');
    isUnderline.value = selection.hasFormat('underline');

    if (elementDOM !== null) {
      if ($isListNode(element)) {
        const parentList = $getNearestNodeOfType<ListNode>(
          anchorNode,
          ListNode,
        );
        const type = parentList
          ? parentList.getListType()
          : element.getListType();

        isUnorderedListOn.value = type === ListTypeKey.Bullet;
        isOrderedListOn.value = type === ListTypeKey.Number;
        textSize.value = TextSizeKey.Paragraph;
      } else {
        isUnorderedListOn.value = false;
        isOrderedListOn.value = false;
        const type = $isHeadingNode(element)
          ? element.getTag()
          : element.getType();

        if (textSizeOptions.some(tso => tso.key === type)) {
          textSize.value = type as TextSizeKey;
        }
      }
    }
  }
}

onMounted(() => {
  const unregisterListener = editor.registerUpdateListener(
    ({ editorState }) => {
      editorState.read(() => {
        $updateToolbar();
      });
    },
  );

  onUnmounted(() => unregisterListener());
});
</script>

<template>
  <div class="stx-flex stx-gap-1 stx-p-1">
    <AppButton
      :icon="IconName.Undo"
      @click="editor.dispatchCommand(UNDO_COMMAND, undefined)"
    />
    <AppButton
      :icon="IconName.Redo"
      @click="editor.dispatchCommand(REDO_COMMAND, undefined)"
    />
    <AppSeparator vertical />
    <AppDropdown
      :label="selectedTextSizeShortLabel"
      :options="textSizeOptions"
      :active-item="item => item.key === selectedTextSizeOption.key"
      @option-click="
        item => formatTextSize(editor, textSize, item as TextSizeOption)
      "
    />
    <AppButton
      :icon="IconName.UnorderedList"
      :active="isUnorderedListOn"
      @click="formatList(editor, ListTypeKey.Bullet)"
    />
    <AppButton
      :icon="IconName.OrderedList"
      :active="isOrderedListOn"
      @click="formatList(editor, ListTypeKey.Number)"
    />
    <AppSeparator vertical />
    <AppButton
      :icon="IconName.Bold"
      :active="isBold"
      @click="editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'bold')"
    />
    <AppButton
      :icon="IconName.Italic"
      :active="isItalic"
      @click="editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'italic')"
    />
    <AppButton
      :icon="IconName.Underline"
      :active="isUnderline"
      @click="editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'underline')"
    />
    <AppSeparator vertical />
  </div>
</template>
