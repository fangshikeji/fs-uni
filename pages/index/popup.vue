<template>
	<view class="text-center">
		<fs-button type="error" @click="popup('showPopup1')">上弹出</fs-button>
		<fs-button type="info" @click="popup('showPopup2')">下弹出</fs-button>
		<fs-button type="primary" @click="popup('showPopup3')">左弹出</fs-button>
		<fs-button type="warning" @click="popup('showPopup4')">右弹出</fs-button>

		<fs-popup :show.sync="showPopup1" direction="top">
			<fs-panel title="内容自定义">
				<fs-button slot="content" type="success" @click="close">关闭</fs-button>
			</fs-panel>
		</fs-popup>
		<fs-popup :show.sync="showPopup2" direction="bottom">
			<fs-panel title="内容自定义">
				<fs-button slot="content" type="success" @click="close">关闭</fs-button>
			</fs-panel>
		</fs-popup>
		<fs-popup :show.sync="showPopup3">
			<fs-panel title="内容自定义">
				<fs-button slot="content" type="success" @click="close">关闭</fs-button>
			</fs-panel>
		</fs-popup>
		<fs-popup :show.sync="showPopup4" direction="right" width="50%">
			<fs-panel title="内容自定义">
				<fs-button slot="content" type="success" @click="close">关闭</fs-button>
			</fs-panel>
		</fs-popup>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				showPopup1: false,
				showPopup2: false,
				showPopup3: false,
				showPopup4: false,
				direction: 'left',
			};
		},
		methods: {
			popup(pop) {
				this[pop] = true
			},
			close() {
				this.showPopup1 = false
				this.showPopup2 = false
				this.showPopup3 = false
				this.showPopup4 = false
			}
		}
	}
</script>

<style lang="scss">

</style>
