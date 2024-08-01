<template>
	<!--@@@ Start Header  -->
	<header class="header">
		<div class="header__container container d-flex align-items-center">
			<div class="header__left">
				<a
					href="index.html"
					class="header__logo"
				>
					<img
						src="../../../assets/img/logo/logo-1.png"
						alt="F1"
					/>
				</a>

				<nav class="header__nav">
					<ul class="d-flex">
						<li class="nav__item">
							<a href="#">Trang chủ</a>
						</li>
						<li class="nav__item">
							<a href="#">
								<span>Giao dịch</span>
								<i class="d-inline-flex">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="20"
										height="20"
										viewBox="0 0 20 20"
										fill="none"
									>
										<path
											d="M14.166 8.33333L9.99935 11.6667L5.83268 8.33333"
											stroke="white"
											stroke-width="1.25"
											stroke-linecap="round"
											stroke-linejoin="round"
										/>
									</svg>
								</i>
							</a>

							<div class="nav__item-sub">
								<a href="#">Hướng dẫn giao dịch A-Z</a>
								<a href="#">Lịch giao dịch & sự kiện</a>
								<a href="#">Biểu phí</a>
								<a href="#">Ký quỹ & đòn bẩy</a>
							</div>
						</li>
						<li class="nav__item">
							<a href="#">Kiến thức và đào tạo</a>
						</li>
						<li class="nav__item">
							<a href="#">Thông tin thị trường</a>
						</li>
					</ul>
				</nav>
			</div>

			<div class="header__right d-flex align-items-center">
				<div class="header__search">
					<img
						src="../../../assets/img/icon/icon-search.png"
						alt="Search"
					/>
				</div>

				<a
					href="login.html"
					class="btn btn--login text-uppercase"
					>Đăng Nhập</a
				>
				<a
					href="register.html"
					class="btn btn--register text-uppercase"
					>Đăng Ký</a
				>

				<div class="header__menu-icon">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="32"
						height="32"
						viewBox="0 0 32 32"
						fill="none"
						id="bar"
					>
						<path
							d="M8 10H23M8 16H23M8 22H23"
							stroke="white"
							stroke-width="1.5"
							stroke-linecap="round"
						/>
					</svg>

					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="32"
						height="32"
						viewBox="0 0 32 32"
						fill="none"
						id="close"
					>
						<path
							d="M21.6565 10.3432L10.3428 21.6569M21.6565 21.6569L10.3428 10.3431"
							stroke="white"
							stroke-width="1.5"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</svg>
				</div>
			</div>

			<!-- Nav Mobile -->
			<div
				id="menu"
				class="header-nav__mobile"
			>
				<div class="header-nav__mobile-input">
					<i class="header-nav__mobile-icon">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="18"
							height="18"
							viewBox="0 0 18 18"
							fill="none"
						>
							<path
								d="M8.25 14.25C11.5637 14.25 14.25 11.5637 14.25 8.25C14.25 4.93629 11.5637 2.25 8.25 2.25C4.93629 2.25 2.25 4.93629 2.25 8.25C2.25 11.5637 4.93629 14.25 8.25 14.25Z"
								stroke="#8F8F8F"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
							<path
								d="M15.7498 15.75L12.4873 12.4875"
								stroke="#8F8F8F"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
						</svg>
					</i>
					<input
						type="text"
						class="form-control"
						placeholder="Tìm kiếm"
					/>
				</div>
				<nav class="header-nav__mobile-list">
					<ul class="d-flex flex-column">
						<li class="header-nav__mobile-item">
							<a href="#">Trang chủ</a>
						</li>
						<li class="header-nav__mobile-item">
							<a
								href="#"
								class="menu-toggle"
							>
								<span>Giao dịch</span>
								<i class="header-nav__mobile-arrow d-inline-flex">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="20"
										height="20"
										viewBox="0 0 20 20"
										fill="none"
									>
										<path
											d="M14.166 8.33333L9.99935 11.6667L5.83268 8.33333"
											stroke="#090618"
											stroke-width="1.25"
											stroke-linecap="round"
											stroke-linejoin="round"
										/>
									</svg>
								</i>
							</a>

							<ul class="header-nav__mobile-sub">
								<a href="#">Hướng dẫn giao dịch A-Z</a>
								<a href="#">Lịch giao dịch & sự kiện</a>
								<a href="#">Biểu phí</a>
								<a href="#">Ký quỹ & đòn bẩy</a>
							</ul>
						</li>
						<li class="header-nav__mobile-item">
							<a
								href="#"
								class="menu-toggle"
							>
								<span>Kiến thức và đào tạo</span>
								<i class="header-nav__mobile-arrow d-inline-flex">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="20"
										height="20"
										viewBox="0 0 20 20"
										fill="none"
									>
										<path
											d="M14.166 8.33333L9.99935 11.6667L5.83268 8.33333"
											stroke="#090618"
											stroke-width="1.25"
											stroke-linecap="round"
											stroke-linejoin="round"
										/>
									</svg>
								</i>
							</a>

							<ul class="header-nav__mobile-sub">
								<a href="#">Hướng dẫn giao dịch A-Z</a>
								<a href="#">Lịch giao dịch & sự kiện</a>
								<a href="#">Biểu phí</a>
								<a href="#">Ký quỹ & đòn bẩy</a>
							</ul>
						</li>
						<li class="header-nav__mobile-item">
							<a href="#">Thông tin thị trường</a>
						</li>
					</ul>
				</nav>

				<div class="header-nav__mobile-btn">
					<a
						href="login.html"
						class="btn btn__login btn--primary"
					>
						Đăng Nhập
					</a>
					<a
						href="register.html"
						class="btn btn__register btn--primary"
						>Đăng Ký</a
					>
				</div>
			</div>
		</div>
	</header>
	<!--@@@ End Header  -->
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
	name: "the-header",
	setup(props, ctx) {},
});
</script>

<style lang="scss"></style>
