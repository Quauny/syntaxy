<script setup lang="ts">
import { injectStrict } from '@/lib/utils';
import { EditorInjectionKey } from '@/lib/symbols';
import { onMounted, ref, type Ref } from 'vue';

const editor = injectStrict(EditorInjectionKey);

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
