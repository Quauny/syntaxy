<script setup lang="ts">
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue';
import type { PropType } from 'vue';
import AppButton from '@/lib/components/AppButton.vue';
import AppIcon from '@/lib/components/AppIcon.vue';
import { IconName } from '@/lib/icons';

interface DropDownOption {
  key: string;
  label: string;
}

const props = defineProps({
  label: {
    type: String as PropType<string>,
  },
  icon: {
    type: String as PropType<IconName>,
  },
  options: {
    type: Array as PropType<DropDownOption[]>,
    default: () => [],
  },
  activeItem: {
    type: Function as PropType<
      (item: DropDownOption, label: string) => boolean
    >,
    default: () => false,
  },
});

const emit = defineEmits<{
  (e: 'optionClick', value: DropDownOption): void;
}>();
</script>

<template>
  <Menu as="div" class="stx-relative stx-inline-block">
    <div>
      <MenuButton
        class="stx-flex stx-cursor-pointer stx-items-center stx-gap-1 stx-rounded-lg stx-border-0 stx-bg-transparent stx-px-2 stx-py-1 stx-text-gray-600 hover:stx-bg-gray-100"
      >
        <span v-if="props.label">{{ props.label }}</span>
        <AppIcon v-if="props.icon" :name="props.icon" />
        <AppIcon :name="IconName.ArrowDown" style="font-size: 9px" />
      </MenuButton>
    </div>

    <transition
      enter-active-class="stx-transition stx-duration-100 stx-ease-out"
      enter-from-class="stx-transform stx-scale-95 stx-opacity-0"
      enter-to-class="stx-transform stx-scale-100 stx-opacity-100"
      leave-active-class="stx-transition stx-duration-75 stx-ease-in"
      leave-from-class="stx-transform stx-scale-100 stx-opacity-100"
      leave-to-class="stx-transform stx-scale-95 stx-opacity-0"
    >
      <MenuItems
        class="stx-absolute stx-left-0 stx-w-40 stx-rounded-md stx-bg-white stx-shadow-lg"
      >
        <div class="stx-flex-col stx-gap-16 stx-px-1 stx-py-1">
          <MenuItem v-for="item in props.options" :key="`${item.key}`">
            <AppButton
              :label="item.label"
              full-width
              :active="props.activeItem(item, props.label || '')"
              @click="emit('optionClick', item)"
            />
          </MenuItem>
        </div>
      </MenuItems>
    </transition>
  </Menu>
</template>
