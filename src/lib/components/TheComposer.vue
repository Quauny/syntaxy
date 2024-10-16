<script setup lang="ts">
import { createEditor } from 'lexical';
import { EditorInjectionKey } from '@/lib/symbols';
import { provide } from 'vue';

const editor = createEditor();

provide(EditorInjectionKey, editor);
</script>

<template>
  <slot />
</template>
