<script setup lang="ts">
const props = defineProps({
  vertical: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <div
    class="stx-bg-gray-400"
    :class="[props.vertical ? 'stx-w-px' : 'stx-h-px']"
  ></div>
</template>
