<template>
	<fs-cell title="头像" justify="right" border tighten>
		<fs-avatar :src="src" slot="value" @click="chooseImage">
			<fs-icon type="icon-photo" colorType="primary"></fs-icon>
		</fs-avatar>
	</fs-cell>
</template>

<script>
	import utils from '@/utils/utils.js'
	import { mapMutations } from 'vuex'
	export default {
		props: {
			src: String
		},
		data() {
			return {
				
			}
		},
		methods: {
			...mapMutations(['setUserInfo']),
			chooseImage() {
				utils.chooseAndUploadAvatar().then(res => {
					if(res[0]) {
						this.setUserInfo({
							...this.$store.state.userInfo,
							photo: res[0]
						})
						
						this.$emit('update:src', res[0])
					}
				})
			}
		},
	}
</script>

<style>
</style>
