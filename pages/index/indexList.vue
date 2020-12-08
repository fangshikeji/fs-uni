<template>
	<view>
		<fs-index-list :list="indexList" bd-key="company"></fs-index-list>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				indexList: [
				      {
				        name: 'A',
				        list: [
				          {
				            name: 'aba',
				            company: 'fanshi'
				          },
				          {
				            name: 'ac',
				            phone: '187'
				          }
				        ]
				      },
				      {
				        name: 'B',
				        list: [
				          {
				            name: 'ba'
				          },
				          {
				            name: 'bc'
				          }
				        ]
				      },
				      {
				        name: 'C',
				        list: [
				          {
				            name: 'aba'
				          },
				          {
				            name: 'ac'
				          }
				        ]
				      },
				      {
				        name: 'D',
				        list: [
				          {
				            name: 'ba'
				          },
				          {
				            name: 'bc'
				          }
				        ]
				      },
				      {
				        name: 'E',
				        list: [
				          {
				            name: 'aba'
				          },
				          {
				            name: 'ac'
				          }
				        ]
				      },
				      {
				        name: 'F',
				        list: [
				          {
				            name: 'ba'
				          },
				          {
				            name: 'bc'
				          }
				        ]
				      },
				    ]
			};
		}
	}
</script>

<style lang="scss">
page{
	background-color: #f0f0f0;
	padding: var(--gutter);
}
</style>
