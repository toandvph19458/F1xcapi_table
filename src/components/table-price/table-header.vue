<template>
	<div class="header">
		<div class="header-marquee">
			<div class="header-marquee__inner">
				<div class="header-marquee__icon">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="25"
						viewBox="0 0 24 25"
						fill="none"
					>
						<path
							d="M16 4.5H17C19.2091 4.5 21 6.29086 21 8.5V18.5C21 20.7091 19.2091 22.5 17 22.5H7C4.79086 22.5 3 20.7091 3 18.5V8.5C3 6.29086 4.79086 4.5 7 4.5H8M16 4.5C16 5.60457 15.1046 6.5 14 6.5H10C8.89543 6.5 8 5.60457 8 4.5M16 4.5C16 3.39543 15.1046 2.5 14 2.5H10C8.89543 2.5 8 3.39543 8 4.5M8 10.5H16M8 14.5H16M8 18.5H12"
							stroke="#FFDC00"
							stroke-width="1.5"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</svg>
				</div>

				<h3 class="header-marquee__title">Báo cáo mới nhất</h3>
			</div>

			<div class="header-marquee__list">
				<vue3-marquee
					:duration="40"
					:pause-on-hover="true"
					class="header-marquee__c"
				>
					<div
						v-for="i in 10"
						:key="i"
						class="header-marquee__item"
					>
						<p class="header-marquee__text">Nhận định Lúa mì 15/07</p>

						<div class="header-marquee__dot"></div>

						<p class="header-marquee__caption">18/07/2024 - 17:34:12</p>
					</div>
				</vue3-marquee>
			</div>
		</div>

		<div class="header-filter">
			<div class="header-filter__tab">
				<div
					v-for="item in lstData"
					:key="item.id"
					:class="['header-filter__item', { active: item.id === check }]"
					@click="() => (check = item.id)"
				>
					{{ item.name }}
				</div>
			</div>

			<div class="header-filter__search">
				<i class="header-filter__icon">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="18"
						height="19"
						viewBox="0 0 18 19"
						fill="none"
					>
						<path
							d="M8.25 14.75C11.5637 14.75 14.25 12.0637 14.25 8.75C14.25 5.43629 11.5637 2.75 8.25 2.75C4.93629 2.75 2.25 5.43629 2.25 8.75C2.25 12.0637 4.93629 14.75 8.25 14.75Z"
							stroke="#6D649E"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
						<path
							d="M15.7469 16.25L12.4844 12.9875"
							stroke="#6D649E"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</svg>
				</i>

				<input
					type="text"
					placeholder="Tìm kiếm"
				/>
			</div>

			<div class="header-filter__box">
				<div
					class="header-filter__btn"
					@click="toggle"
				>
					Hợp tác
				</div>
				<div class="header-filter__line"></div>
				<div
					class="header-filter__btn"
					@click="toggle"
				>
					Bộ lọc
				</div>

				<Popover ref="op"> Bộ lọc </Popover>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { ref, defineComponent } from "vue";
import { Vue3Marquee } from "vue3-marquee";
import Popover from "primevue/popover";

export default defineComponent({
	name: "table-header",
	components: {
		Vue3Marquee,
		Popover,
	},
	setup(props, ctx) {
		const check = ref(0);
		const op = ref();

		const lstData = ref([
			{
				id: 0,
				name: "Tất cả",
			},
			{
				id: 1,
				name: "Nông sản",
			},
			{
				id: 2,
				name: "Năng lượng",
			},
			{
				id: 3,
				name: "Kim loại",
			},
			{
				id: 4,
				name: "Nguyên liệu công nghiệp",
			},
		]);

		const toggle = (event: any) => {
			op.value.toggle(event);
		};

		return {
			op,
			check,
			lstData,
			toggle,
		};
	},
});
</script>

<style scoped lang="scss">
.header {
	height: max-content !important;
	width: 100%;
	max-width: 1760px;
	margin: 0 auto;
	background-color: transparent;

	.header-marquee {
		padding: 12px;
		display: flex;
		align-items: center;

		.header-marquee__inner {
			display: flex;
			align-items: center;
		}

		.header-marquee__title {
			font-size: 18px;
			font-weight: 700;
			color: var(--white-text);
			text-transform: uppercase;
			margin-left: 8px;
		}

		.header-marquee__list {
			flex: 1;
			width: calc(100% - 400px);
			margin-left: 24px;
		}

		.header-marquee__c {
		}

		.header-marquee__item {
			display: flex;
			gap: 12px;
			align-items: center;
			padding: 12px;
			background-color: #100c26;
			border-radius: 12px;
			margin-left: 12px;
		}
		.header-marquee__text {
			font-size: 14px;
			font-weight: 600;
			color: var(--white-text);
		}
		.header-marquee__dot {
			width: 6px;
			height: 6px;
			background-color: #766cad;
			border-radius: 50%;
		}
		.header-marquee__caption {
			font-size: 14px;
			color: #766cad;
			font-style: italic;
			font-weight: 400;
		}
	}

	.header-filter {
		display: flex;
		gap: 40px;
		align-items: center;
		padding: 12px 0;

		.header-filter__tab {
			display: flex;
			gap: 40px;
			align-items: center;
		}
		.header-filter__item {
			padding: 12px 40px;
			border-radius: 12px;
			background-color: transparent;
			font-size: 16px;
			font-weight: 500;
			cursor: pointer;
			color: rgba(255, 255, 255, 0.6);

			&.active {
				color: var(--white-text);
				background-color: #100c26;
			}
		}

		.header-filter__search {
			position: relative;
			width: 440px;
			max-width: 100%;

			input {
				width: 100%;
				padding: 12px 12px 12px 40px;
				background-color: transparent;
				color: var(--white-text);
				border: none;
				border-radius: 12px;
				background: #100c26;
				font-size: 14px;

				&::placeholder {
					font-size: 14px;
					color: #6d649e;
					font-weight: 600;
				}
			}
		}

		.header-filter__icon {
			position: absolute;
			left: 12px;
			top: 50%;
			transform: translateY(-50%);
		}

		.header-filter__box {
			display: flex;
			align-items: center;
			border-radius: 12px;
			overflow: hidden;
		}

		.header-filter__btn {
			padding: 12px 24px;
			color: var(--white-text);
			background-color: #100c26;
			color: rgba(255, 255, 255, 0.6);
			cursor: pointer;
		}

		.header-filter__line {
			width: 1px;
			height: 16px;
			background-color: #6d649e;
		}
	}
}
</style>
