<script setup lang="ts">
import { computed, ref } from 'vue';
import AppButton from '@/lib/components/AppButton.vue';
import { IconName } from '@/lib/icons';
import { useEditor } from '@/lib/composables';
import {
  UNDO_COMMAND,
  REDO_COMMAND,
  $getSelection,
  $isRangeSelection,
  $isRootOrShadowRoot,
} from 'lexical';
import AppSeparator from '@/lib/components/AppSeparator.vue';
import AppDropdown from './AppDropdown.vue';
import { onMounted, onUnmounted } from 'vue';
import { $findMatchingParent } from '@lexical/utils';
import { $isHeadingNode } from '@lexical/rich-text';
import {
  TextSizeKey,
  textSizeOptions,
  type TextSizeOption,
  formatTextSize,
} from '../helpers/textSize';

const editor = useEditor();

const textSize = ref(TextSizeKey.Paragraph);
const selectedTextSizeOption = computed(
  () =>
    textSizeOptions.find(item => item.key === textSize.value) as TextSizeOption,
);

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

    if (elementDOM !== null) {
      const type = $isHeadingNode(element)
        ? element.getTag()
        : element.getType();

      if (textSizeOptions.some(tso => tso.key === type))
        textSize.value = type as TextSizeKey;
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
      :label="selectedTextSizeOption.label"
      :options="textSizeOptions"
      :active-item="item => item.key === selectedTextSizeOption.key"
      @option-click="
        item => formatTextSize(editor, textSize, item as TextSizeOption)
      "
    />
  </div>
</template>
