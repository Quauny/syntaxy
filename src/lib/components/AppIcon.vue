<script setup lang="ts">
import type { PropType } from 'vue';
import { computed } from 'vue';
import { IconName, iconsMap } from '@/lib/icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import type { IconDefinition } from '@fortawesome/free-solid-svg-icons';

const props = defineProps({
  name: {
    type: String as PropType<IconName>,
    required: true,
  },
});

const icon = computed(() => iconsMap.get(props.name) as IconDefinition);
</script>

<template>
  <FontAwesomeIcon :icon="icon" />
</template>
