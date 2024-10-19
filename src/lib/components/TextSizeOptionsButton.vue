<script setup lang="ts">
import AppDropdown from '@/lib/components/AppDropdown.vue';
import { ref } from 'vue';

const options = [
  {
    label: 'Normal text',
    shortLabel: 'N',
  },
  {
    label: 'Heading 1',
    shortLabel: 'H1',
  },
  {
    label: 'Heading 2',
    shortLabel: 'H2',
  },
  {
    label: 'Heading 3',
    shortLabel: 'H3',
  },
];

const selectedOption = ref(options[0]);
</script>

<template>
  <AppDropdown
    :label="selectedOption.shortLabel"
    :options="options"
    @option-click="opt => (selectedOption = opt)"
  />
</template>
