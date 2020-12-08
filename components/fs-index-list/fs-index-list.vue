<template>
	<view>
		<view class="sidebar" @tap="handleTap" @touchmove="handleMove" @touchend="handleEnd">
			<view class="sidebar-item" :class="{primary: activeId === item}" v-for="(item, index) in sidebar" :key="index" :data-id="item">
				{{item}}
			</view>
		</view>
		<view class="contact">
			<scroll-view scroll-y :scroll-into-view="intoView" @scroll="scroll" class="list">
				<!-- #ifdef H5 -->
				<view style="width: 100%;">
				<!-- #endif -->
					<view class="layout-box" style="padding-right: 30px;" v-if="collapse">
						<fs-collapse allOpen card>
							<fs-collapse-item v-for="item in list" :key="item.name" :id="item.name" :name="item.name">
								<view slot="title" :class="{sticky}">{{item[titleKey]}}</view>
								<view slot="content">
									<fs-cell v-for="subitem in item.list" :key="subitem.name" justify="left" align="center" :link="link + '?id=' + subitem.id">
										<fs-avatar :src="item[avatarKey]" slot="title">{{subitem.alais}}</fs-avatar>
										<view slot="value">
											<view class="hd">{{subitem[hdKey]}}</view>
											<view class="bd">{{subitem[bdKey]}}</view>
										</view>
									</fs-cell>
								</view>
							</fs-collapse-item>
						</fs-collapse>
					</view>
					
					<view v-else v-for="item in list" :key="item.name" :id="item.name" class="list-item">
						<view class="panel-title" :class="{sticky}">{{item[titleKey]}}</view>
						<fs-cell v-for="subitem in item.list" :key="subitem.name" justify="left" align="center" :link="link + '?id=' + subitem.id">
							<fs-avatar :src="item[avatarKey]" slot="title">{{subitem.alais}}</fs-avatar>
							<view slot="value">
								<view class="hd">{{subitem[hdKey]}}</view>
								<view class="bd">{{subitem[bdKey]}}</view>
							</view>
						</fs-cell>
					</view>
				<!-- #ifdef H5 -->
				</view>
				<!-- #endif -->
			</scroll-view>
		</view>
		<view class="layer" v-if="showLayer">{{activeId}}</view>
	</view>
</template>

<script>
	const letters = []
	for (var i = 0; i < 26; i++) {
		letters.push(String.fromCharCode(65 + i))
	}
	export default {
		props: {
			list: Array,
			titleKey: {
				type: String,
				default: 'name'
			},
			avatarKey: {
				type: String,
				default: 'src'
			},
			link: String,
			hdKey: {
				type: String,
				default: 'name'
			},
			bdKey: {
				type: String,
				default: 'phone'
			},
			sticky: {
				type: Boolean,
				default: true
			},
			collapse: Boolean
		},
		data() {
			return {
				intoView: '',
				activeId: '',
				showLayer: false,
				sidebar: letters
			};
		},
		created() {
			const windowHeight = wx.getSystemInfoSync().windowHeight
			const offsetHeight = 50
			const navHeight = windowHeight - offsetHeight * 2
			this.letterPos = []
			this.letterHeight = navHeight / letters.length

			letters.forEach((item, index) => {
				this.letterPos.push(offsetHeight + this.letterHeight * index)
			})
		},
		methods: {
			handleTap(e) {
				const id = e.target.dataset.id
				this.intoView = id
				this.activeId = id
			},
			handleMove(e) {
				const y = e.touches[0].clientY

				for (let i = 0, len = this.letterPos.length; i < len; i++) {
					if (y >= this.letterPos[i] && y <= this.letterPos[i] + this.letterHeight) {
						this.intoView = letters[i]
						this.activeId = letters[i]
						this.showLayer = true
						break
					}
				}
			},
			handleEnd(e) {
				setTimeout(() => {
					this.showLayer = false
				}, 200)
			},
			scroll(e) {
				this.createSelectorQuery().selectAll('.list-item').boundingClientRect(rects => {
					for (let i = 0; i < rects.length; i++) {
						let rect = rects[i]
						if (rect.top === 0 || rect.bottom > 0) {
							this.activeId = rect.id
							break
						}
					}
				}).exec()
			},
		}
	}
</script>

<style lang="scss" scoped>
	.sidebar {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		position: fixed;
		top: 50%;
		right: 10px;
		align-items: center;
		z-index: 1000;
		background-color: #fff;
		box-shadow: 0 0 5px #cecdcd;
		border-radius: 4px;
		transform: translateY(-50%);
	}

	.sidebar-item {
		padding: 4rpx 10rpx;
		flex-shrink: 1;
		font-size: 24rpx;
	}

	.sticky {
		position: sticky;
		top: 0;
		z-index: 100;
	}

	.contact {
		position: fixed;
		top: var(--window-top);
		left: 0;
		right: 0;
		bottom: 0;
	}

	.list {
		height: 100%;
	}

	.layer {
		width: 150rpx;
		height: 150rpx;
		background: rgba(0, 0, 0, .5);
		border-radius: 50%;
		line-height: 150rpx;
		color: #ffffff;
		text-align: center;
		position: fixed;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		font-weight: bolder;
		font-size: 55rpx;
	}

	.hd {
		font-size: 16px;
	}

	.panel-title {
		padding: var(--gutter);
		color: var(--title);
		text-align: left;
		background-color: var(--bg-color);
	}
</style>
