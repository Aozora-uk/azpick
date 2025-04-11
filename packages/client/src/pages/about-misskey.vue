<template>
<MkStickyContainer>
	<template #header><MkPageHeader :actions="headerActions" :tabs="headerTabs"/></template>
	<div style="overflow: clip;">
		<MkSpacer :content-max="600" :margin-min="20">
			<div class="_formRoot znqjceqz">
				<div id="debug"></div>
				<div ref="containerEl" v-panel class="_formBlock about" :class="{ playing: easterEggEngine != null }">
					<img src="/client-assets/about-icon.png" alt="" class="icon" draggable="false" @load="iconLoaded" @click="gravity"/>
					<div class="misskey">AZPick(based on Cherrypick/Misskey)</div>
					<div class="version">{{ version }}</div>
					<span v-for="emoji in easterEggEmojis" :key="emoji.id" class="emoji" :data-physics-x="emoji.left" :data-physics-y="emoji.top" :class="{ _physics_circle_: !emoji.emoji.startsWith(':') }"><MkEmoji class="emoji" :emoji="emoji.emoji" :custom-emojis="$instance.emojis" :is-reaction="false" :normal="true" :no-style="true"/></span>
				</div>
				<div class="_formBlock" style="text-align: center;">
					{{ i18n.ts._aboutMisskey.about }}<br><a href="https://misskey-hub.net/docs/misskey.html" target="_blank" class="_link">{{ i18n.ts.learnMore }}</a>
				</div>
				<div class="_formBlock" style="text-align: center;">
					<MkButton primary rounded inline @click="iLoveCherryPick">I <Mfm text="$[jelly ❤]"/> #CherryPick</MkButton>
				</div>
				<FormSection>
					<template #label>Aozora.UK</template>
						<div class="_formLinks">
							<FormLink to="https://aozora.uk" external>
								<template #icon><i class="fas fa-globe"></i></template>
								aozora.uk
								<template #suffix>aozora.uk</template>
							</FormLink>
							<FormLink to="https://chai.aozora.uk" external>
								<template #icon><i class="fas fa-tachometer-alt"></i></template>
								Aozoratea
								<template #suffix>github.io</template>
							</FormLink>
							<FormLink to="https://github.com/morotesovtannu/aozorapick" external>
								<template #icon><i class="fas fa-code"></i></template>
								{{ i18n.ts._aboutMisskey.source }}
								<template #suffix>GitHub</template>
							</FormLink>
						</div>
				</FormSection>
				<FormSection>
					<template #label>Cherrypick</template>
					<div class="_formLinks">
						<FormLink to="https://github.com/kokonect-link/cherrypick" external>
							<template #icon><i class="fas fa-code"></i></template>
							{{ i18n.ts._aboutMisskey.source }}
							<template #suffix>GitHub</template>
						</FormLink>
						<!--
						<FormLink to="https://crowdin.com/project/misskey" external>
							<template #icon><i class="fas fa-language"></i></template>
							{{ i18n.ts._aboutMisskey.translation }}
							<template #suffix>Crowdin</template>
						</FormLink>
						-->
						<FormLink to="https://discord.gg/V8qghB28Aj" external>
							<template #icon><i class="fab fa-discord"></i></template>
							{{ i18n.ts._aboutMisskey._cherrypick.community }}
							<template #suffix>Discord</template>
						</FormLink>
						<FormLink to="https://www.patreon.com/noridev" external>
							<template #icon><i class="fas fa-hand-holding-medical"></i></template>
							{{ i18n.ts._aboutMisskey._cherrypick.donate }}
							<template #suffix>Patreon</template>
						</FormLink>
						<FormLink to="https://www.paypal.me/noridev" external>
							<template #icon><i class="fas fa-hand-holding-medical"></i></template>
							{{ i18n.ts._aboutMisskey._cherrypick.donate }}
							<template #suffix>PayPal</template>
						</FormLink>
						<FormLink to="https://toss.me/noridev" external>
							<template #icon><i class="fas fa-hand-holding-medical"></i></template>
							{{ i18n.ts._aboutMisskey._cherrypick.donate }}
							<template #suffix>Toss</template>
						</FormLink>
					</div>
				</FormSection>
				<FormSection>
					<template #label>Misskey (v12-LTS)</template>
					<div class="_formLinks">
						<FormLink to="https://github.com/atsu1125/misskey-v12" external>
							<template #icon><i class="fas fa-code"></i></template>
							{{ i18n.ts._aboutMisskey.source }}
							<template #suffix>GitHub</template>
						</FormLink>
						<FormLink to="https://crowdin.com/project/misskey" external>
							<template #icon><i class="fas fa-language"></i></template>
							{{ i18n.ts._aboutMisskey.translation }}
							<template #suffix>Crowdin</template>
						</FormLink>
						<FormLink to="https://www.patreon.com/syuilo" external>
							<template #icon><i class="fas fa-hand-holding-medical"></i></template>
							{{ i18n.ts._aboutMisskey.donate }}
							<template #suffix>Patreon</template>
						</FormLink>
					</div>
					<template #caption><MkLink url="https://github.com/misskey-dev/misskey/graphs/contributors">{{ i18n.ts._aboutMisskey.allContributors }}</MkLink></template>
				</FormSection>
				<FormSection>
					<template #label>{{ i18n.ts._aboutMisskey.contributors }}</template>
					<div class="_formLinks">
						<FormLink to="https://github.com/noridev" external>@noridev (AZPick)</FormLink>
						<FormLink to="https://github.com/syuilo" external>@syuilo (Misskey)</FormLink>
						<FormLink to="https://github.com/atsu1125" external>@atsu1125 (v12-LTS)</FormLink>
					</div>
					<template #caption><MkLink url="https://github.com/misskey-dev/misskey/graphs/contributors">{{ i18n.ts._aboutMisskey.allContributors }}</MkLink></template>
				</FormSection>
				<FormSection>
					<template #label><Mfm text="$[jelly ❤]"/> {{ i18n.ts._aboutMisskey.patrons }}</template>
					<div v-for="patron in patrons" :key="patron">{{ patron }}</div>
					<template #caption>{{ i18n.ts._aboutMisskey.morePatrons }}</template>
				</FormSection>
			</div>
		</MkSpacer>
	</div>
</MkStickyContainer>
</template>

<script lang="ts" setup>
import { nextTick, onBeforeUnmount } from 'vue';
import { version } from '@/config';
import FormLink from '@/components/form/link.vue';
import FormSection from '@/components/form/section.vue';
import MkButton from '@/components/MkButton.vue';
import MkLink from '@/components/MkLink.vue';
import { physics } from '@/scripts/physics';
import { i18n } from '@/i18n';
import { defaultStore } from '@/store';
import * as os from '@/os';
import { definePageMetadata } from '@/scripts/page-metadata';

const patrons = [
	'morotesovtannu',
	'Etone Sabasappugawa',
	'桜木まりか',
];

let isKokonect = false;

let easterEggReady = false;
let easterEggEmojis = $ref([]);
let easterEggEngine = $ref(null);
const containerEl = $ref<HTMLElement>();

const meta = await os.api('meta', { detail: true });
if (meta.uri == 'https://kokonect.link' || 'http://localhost:3000') isKokonect = true;

function iconLoaded() {
	const emojis = defaultStore.state.reactions;
	const containerWidth = containerEl.offsetWidth;
	for (let i = 0; i < 32; i++) {
		easterEggEmojis.push({
			id: i.toString(),
			top: -(128 + (Math.random() * 256)),
			left: (Math.random() * containerWidth),
			emoji: emojis[Math.floor(Math.random() * emojis.length)],
		});
	}

	nextTick(() => {
		easterEggReady = true;
	});
}

function gravity() {
	if (!easterEggReady) return;
	easterEggReady = false;
	easterEggEngine = physics(containerEl);
}

function iLoveAZPick() {
	os.post({
		initialText: 'I $[jelly ❤] #AZPick',
		instant: true,
	});
}

onBeforeUnmount(() => {
	if (easterEggEngine) {
		easterEggEngine.stop();
	}
});

const headerActions = $computed(() => []);

const headerTabs = $computed(() => []);

definePageMetadata({
	title: i18n.ts.aboutMisskey,
	icon: null,
});
</script>

<style lang="scss" scoped>
.znqjceqz {
	> .about {
		position: relative;
		text-align: center;
		padding: 16px;
		border-radius: var(--radius);

		&.playing {
			&, * {
				user-select: none;
			}

			* {
				will-change: transform;
			}

			> .emoji {
				visibility: visible;
			}
		}

		> .icon {
			display: block;
			width: 100px;
			margin: 0 auto;
			border-radius: 16px;
		}

		> .misskey {
			margin: 0.75em auto 0 auto;
			width: max-content;
		}

		> .version {
			margin: 0 auto;
			width: max-content;
			opacity: 0.5;
		}

		> .emoji {
			position: absolute;
			top: 0;
			left: 0;
			visibility: hidden;

			> .emoji {
				pointer-events: none;
				font-size: 24px;
				width: 24px;
			}
		}
	}
}
</style>
