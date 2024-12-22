<template>
<MkStickyContainer>
	<template #header><XHeader :actions="headerActions" :tabs="headerTabs"/></template>
	<MkSpacer :content-max="900">
	<div class="ztgjmzrw">
	<section v-for="resolver in resolvers" class="_card _gap resolvers">
		<div class="_content resolver">
			<MkInput v-model="resolver.name">
				<template #label>{{ i18n.ts.name }}</template>
			</MkInput>
			<div>
				<div class="label">{{ i18n.ts._abuse._resolver.targetUserPattern }}</div>
				<PrismEditor v-model="resolver.targetUserPattern" placeholder="^(LocalUser|RemoteUser@RemoteHost)$" class="_code code" :highlight="highlighter" :ignoreTabKey="true" :line-numbers="false"/>
			</div>
			<div>
				<div class="label">{{ i18n.ts._abuse._resolver.reporterPattern }}</div>
				<PrismEditor v-model="resolver.reporterPattern" placeholder="^(LocalUser|RemoteUser@RemoteHost)$" class="_code code" :highlight="highlighter" :ignoreTabKey="true" :line-numbers="false"/>
			</div>
			<div>
				<div class="label">{{ i18n.ts._abuse._resolver.reportContentPattern }}</div>
				<PrismEditor v-model="resolver.reportContentPattern" placeholder=".*" class="_code code" :highlight="highlighter" :ignoreTabKey="true" :line-numbers="false"/>
			</div>
			<FormSwitch v-model="resolver.forward" class="_formBlock">
				<template #label>{{ i18n.ts.forwardReport }}</template>
			</FormSwitch>
			<div class="buttons">
				<MkButton class="button" inline primary @click="save(resolver)"><i class="fas fa-save"></i> {{ i18n.ts.save }}</MkButton>
				<MkButton class="button" inline @click="remove(resolver)"><i class="fas fa-trash-alt"></i> {{ i18n.ts.remove }}</MkButton>
			</div>
		</div>
	</section>
	<MkButton class="button" @click="more()">
		<i class="fas fa-rotate-right"></i>{{ i18n.ts.more }}
	</MkButton>
	</div>
	</MkSpacer>
</MkStickyContainer>
</template>

<script lang="ts" setup>
import { } from 'vue';
import XHeader from './_header_.vue';
import MkButton from '@/components/MkButton.vue';
import MkInput from '@/components/form/input.vue';
import FormSwitch from '@/components/form/switch.vue';
import { PrismEditor } from 'vue-prism-editor';
import { highlight, languages } from 'prismjs/components/prism-core';
import * as os from '@/os';
import * as symbols from '@/symbols';
import 'vue-prism-editor/dist/prismeditor.min.css';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-regex';
import { i18n } from '@/i18n';
import { definePageMetadata } from '@/scripts/page-metadata';

let resolvers: any[] = $ref([]);

os.api('admin/abuse-report-resolver/list').then(resolverResponse => {
	resolvers = resolverResponse;
});

function add() {
	resolvers.unshift({
		id: null,
		name: null,
		targetUserPattern: null,
		reporterPattern: null,
		reportContentPattern: null,
		forward: false,
	});
}

function remove(resolver) {
	os.confirm({
		type: 'warning',
		text: i18n.t('removeAreYouSure', { x: resolver.name }),
	}).then(({ canceled }) => {
		if (canceled) return;
		resolvers = resolvers.filter(x => x != resolver);
		os.api('admin/abuse-report-resolver/delete', {
			resolverId: resolver.id,
		});
	});
}

function save(resolver) {
	if (resolver.id == null) {
		os.api('admin/abuse-report-resolver/create', {
			name: resolver.name,
			targetUserPattern: resolver.targetUserPattern || null,
			reporterPattern: resolver.reporterPattern || null,
			reportContentPattern: resolver.reportContentPattern || null,
			forward: resolver.forward,
		}).then(() => {
			os.alert({
				type: 'success',
				text: i18n.ts.saved
			});
			refresh();
		}).catch(e => {
			os.alert({
				type: 'error',
				text: e
			});
		});
	} else {
		os.api('admin/abuse-report-resolver/update', {
			resolverId: resolver.id,
			name: resolver.name,
			targetUserPattern: resolver.targetUserPattern || null,
			reporterPattern: resolver.reporterPattern || null,
			reportContentPattern: resolver.reportContentPattern || null,
			forward: resolver.forward,
		}).then(() => {
			os.alert({
				type: 'success',
				text: i18n.ts.saved
			});
		}).catch(e => {
			os.alert({
				type: 'error',
				text: e
			});
		});
	}
}

function refresh() {
	os.api('admin/abuse-report-resolver/list').then(resolverResponse => {
		resolvers = resolverResponse;
	});
}

function more() {
	os.api('admin/abuse-report-resolver/list', { untilId: resolvers.reduce((acc, resolver) => resolver.id != null ? resolver : acc).id }).then(resolverResponse => {
		resolvers = resolvers.concat(resolverResponse);
	});
}

function highlighter(code) {
	return highlight(code, languages.regex);
}

const headerActions = $computed(() => [{
	asFullButton: true,
	icon: 'fas fa-plus',
	text: i18n.ts.add,
	handler: add,
}]);

const headerTabs = $computed(() => []);

definePageMetadata({
	title: i18n.ts.abuseReportResolvers,
	icon: 'fas fa-exclamation-circle',
});
</script>

<style lang="scss" scoped>
.ztgjmzrw {
	margin: var(--margin);
}
</style>
