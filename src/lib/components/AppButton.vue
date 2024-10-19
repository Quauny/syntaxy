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
  fullWidth: {
    type: Boolean,
    default: false,
  },
  active: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits<{
  (e: 'click'): void;
}>();
</script>

<template>
  <button
    class="stx-cursor-pointer stx-rounded-lg stx-border-0 stx-bg-transparent stx-px-2 stx-py-1 stx-text-gray-600 hover:stx-bg-gray-100"
    :class="[
      props.fullWidth ? 'stx-w-full' : '',
      props.active ? 'stx-bg-gray-100' : '',
    ]"
    @click="emit('click')"
  >
    <span v-if="props.label">{{ props.label }}</span>
    <AppIcon v-if="props.icon" :name="props.icon" />
  </button>
</template>
