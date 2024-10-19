<script setup lang="ts">
import AppButton from '@/lib/components/AppButton.vue';
import { IconName } from '@/lib/icons';
import { useEditor } from '@/lib/composables';
import { UNDO_COMMAND, REDO_COMMAND } from 'lexical';
import AppSeparator from '@/lib/components/AppSeparator.vue';

const editor = useEditor();
</script>

<template>
  <div
    class="stx-flex stx-gap-1 stx-border-x stx-border-b-0 stx-border-t stx-border-solid stx-border-gray-400 stx-p-1"
  >
    <AppButton
      :icon="IconName.Undo"
      @click="editor.dispatchCommand(UNDO_COMMAND, undefined)"
    />
    <AppButton
      :icon="IconName.Redo"
      @click="editor.dispatchCommand(REDO_COMMAND, undefined)"
    />
    <AppSeparator vertical />
  </div>
</template>
