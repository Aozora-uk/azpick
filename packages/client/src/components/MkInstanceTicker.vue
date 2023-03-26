<template>
<div :class="$style.root" :style="bg">
        <img v-if="faviconUrl" :class="$style.icon" :src="faviconUrl"/>
        <div :class="$style.name">{{ instance.name }}</div>
</div>
</template>

<script lang="ts" setup>
import { } from 'vue';
import { instanceName } from '@/config';
import { instance as Instance } from '@/instance';

const props = defineProps<{
	instance?: {
		faviconUrl?: string
		name: string
		themeColor?: string
	}
}>();

// if no instance data is given, this is for the local instance
const instance = props.instance ?? {
	faviconUrl: Instance.iconUrl || (Instance as { faviconUrl?: string | null }).faviconUrl || '/favicon.ico',
	name: instanceName,
	themeColor: (document.querySelector('meta[name="theme-color-orig"]') as HTMLMetaElement)?.content
};

const themeColor = instance.themeColor ?? '#777777';

const bg = {
        background: `linear-gradient(110deg, rgba(0,0,0,0), rgba(0,0,0,0) calc(100% - 7em), ${themeColor}30 calc(100% - 7em), ${themeColor}0a 100%)`,
};
</script>

<style lang="scss" module>

.root {
        display: flex;
        align-items: center;
        border-radius: 4px 0 0 4px;
        overflow: clip;
        color: #fff;
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        right: 0;
        z-index: -1;
        text-shadow: /* .866 ≈ sin(60deg) */
                1px 0 1px #000,
                .866px .5px 1px #000,
                .5px .866px 1px #000,
                0 1px 1px #000,
                -.5px .866px 1px #000,
                -.866px .5px 1px #000,
                -1px 0 1px #000,
                -.866px -.5px 1px #000,
                -.5px -.866px 1px #000,
                0 -1px 1px #000,
                .5px -.866px 1px #000,
                .866px -.5px 1px #000;
}

.icon {
        height: 3em;
        position: absolute;
        bottom: 1.6em;
        right: 1em;
        opacity: 0.8;
        flex-shrink: 0;
}

.name {
        margin-left: 4px;
        line-height: 1;
        font-size: 0.9em;
        position: absolute;
        bottom: 0.5em;
        right: 1em;
        opacity: 0.7;
        text-align: right;
        font-weight: bold;
        white-space: nowrap;
        overflow: visible;
}
</style>
