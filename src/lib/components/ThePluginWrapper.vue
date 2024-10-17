<script setup lang="ts">
import TheToolbar from '@/lib/components/TheToolbar.vue';
import TheContentEditable from '@/lib/components/TheContentEditable.vue';
import { useRichTextPlugin, useHistoryPlugin } from '@/lib/composables';

useRichTextPlugin();
useHistoryPlugin();
</script>

<template>
  <TheToolbar style="margin-bottom: 10px" />
  <TheContentEditable />
</template>
