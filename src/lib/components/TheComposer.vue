<script setup lang="ts">
import { createEditor } from 'lexical';
import { EditorInjectionKey } from '@/lib/symbols';
import { provide } from 'vue';
import { nodes } from '../helpers/nodes';
import { initializeEditor } from '../helpers/init';

const editor = createEditor({
  nodes,
});

initializeEditor(editor);

provide(EditorInjectionKey, editor);
</script>

<template>
  <slot />
</template>
