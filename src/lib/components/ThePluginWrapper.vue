<script setup lang="ts">
import TheToolbar from '@/lib/components/TheToolbar.vue';
import TheContentEditable from '@/lib/components/TheContentEditable.vue';
import AppSeparator from '@/lib/components/AppSeparator.vue';
import { useRichTextPlugin, useHistoryPlugin } from '@/lib/composables';

useRichTextPlugin();
useHistoryPlugin();
</script>

<template>
  <div class="stx-shadow-md">
    <TheToolbar />
    <AppSeparator />
    <TheContentEditable />
  </div>
</template>
