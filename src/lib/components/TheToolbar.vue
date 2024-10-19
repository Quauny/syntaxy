<script setup lang="ts">
import AppButton from '@/lib/components/AppButton.vue';
import { IconName } from '@/lib/icons';
import { useEditor } from '@/lib/composables';
import { UNDO_COMMAND, REDO_COMMAND } from 'lexical';
import AppSeparator from '@/lib/components/AppSeparator.vue';

const editor = useEditor();
</script>

<template>
  <div class="stx-toolbar">
    <AppButton
      :icon="IconName.Undo"
      @click="editor.dispatchCommand(UNDO_COMMAND, undefined)"
    />
    <AppButton
      :icon="IconName.Redo"
      @click="editor.dispatchCommand(REDO_COMMAND, undefined)"
    />
    <AppSeparator />
  </div>
</template>

<style lang="css" scoped>
.stx-toolbar {
  display: flex;
  gap: 4px;
  padding: 4px;
  border: 1px solid rgb(69, 69, 187);
}
</style>
