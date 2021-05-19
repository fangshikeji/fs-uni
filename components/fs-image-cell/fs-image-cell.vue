<template>
	<fs-cell :shadow="shadow" :gutter="gutter" :border="border" :tighten="tighten" :radius="radius" v-if="direction === 'h'" :link="link" :linkType="linkType" :reverse="imagePosition === 'right'">
		<template #title>
			<fs-avatar :imageMode="imageMode" :src="imageSrc" :size="imageSize" :width="imageWidth" :height="imageHeight" :shape="shape" :radius="imageRadius"></fs-avatar>
		</template>
		<template #value>
			<view class="cell-right" :style="{'min-height': imageSize || imageHeight}">
				<slot></slot>
			</view>
		</template>
	</fs-cell>
	<view :class="[{shadow,'gutter-v':gutter}]" v-else>
		<fs-avatar :imageMode="imageMode" :src="imageSrc" :size="imageSize" :width="imageWidth" :height="imageHeight" :shape="shape" :radius="imageRadius"></fs-avatar>
		<view class="layout-box"><slot></slot></view>
	</view>
</template>

<script>
	export default {
		props: {
			imageSrc: String,
			imageSize: {
				type: String,
				default: '80rpx'
			},
			imageWidth: String,
			imageHeight: String,
			imagePosition: {
				type: String,
				default: 'left'
			},
			shape: {
				type: String,
				default: 'square' // square, circle
			},
			imageRadius: Boolean,
			shadow: Boolean,
			gutter: Boolean,
			border: Boolean,
			tighten: Boolean,
			radius: Boolean,
			direction: {
				type: String,
				default: 'h'
			},
			imageMode: {
				type: String,
				default: 'scaleToFill'
			},
			link: String,
			linkType: {
				type: String,
				default: 'navigateTo'
			}
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">

</style>
