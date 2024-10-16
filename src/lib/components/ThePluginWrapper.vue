<script setup lang="ts">
import TheContentEditable from '@/lib/components/TheContentEditable.vue';
import { useRichTextPlugin } from '@/lib/composables';

useRichTextPlugin();
</script>

<template>
  <TheContentEditable />
</template>
