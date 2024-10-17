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
    class="stx-content-editable"
  ></div>
</template>

<style lang="css" scoped>
.stx-content-editable {
  border: 1px solid orangered;
  padding: 10px;
  min-height: 300px;
}
</style>
