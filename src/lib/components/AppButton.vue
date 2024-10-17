<script setup lang="ts">
import type { PropType } from 'vue';
import type { IconName } from '../icons';
import AppIcon from '@/lib/components/AppIcon.vue';

const props = defineProps({
  label: {
    type: String as PropType<string>,
  },
  icon: {
    type: String as PropType<IconName>,
  },
});

const emit = defineEmits<{
  (e: 'click'): void;
}>();
</script>

<template>
  <button class="stx-button" @click="emit('click')">
    <span v-if="props.label">{{ props.label }}</span>
    <AppIcon v-if="props.icon" :name="props.icon" />
  </button>
</template>

<style lang="css" scoped>
.stx-button {
  padding: 4px 8px;
  display: inline-block;
  border: none;
  cursor: pointer;
  border-radius: 9px;
}
</style>
