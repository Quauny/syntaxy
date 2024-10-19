<script setup lang="ts">
import { useEditor } from '@/lib/composables';
import { onMounted, ref, type Ref } from 'vue';

const editor = useEditor();

const contentEditableRef: Ref<HTMLDivElement | null> = ref(null);

onMounted(() => {
  if (contentEditableRef.value) {
    editor.setRootElement(contentEditableRef.value);
  }
});
</script>

<template>
  <div
    ref="contentEditableRef"
    contenteditable
    class="stx-min-h-80 stx-border stx-border-solid stx-border-gray-400 stx-p-1 focus:stx-outline-none"
  ></div>
</template>
