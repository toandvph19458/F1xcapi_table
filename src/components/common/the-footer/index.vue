<template>
	<!--@@@ Start Footer  -->
	<footer class="footer">
		<div class="container">
			<div class="footer__top">
				<div class="d-flex align-items-center justify-content-center">
					<a
						href="index.html"
						class="footer__logo"
					>
						<img
							src="../../../assets/img/logo/logo-1.png"
							alt="F1"
						/>
					</a>
				</div>

				<div class="d-flex align-items-center justify-content-center">
					<div class="social">
						<a
							href="#"
							class="social__link"
						>
							<img
								src="../../../assets/img/icon/social/facebook.png"
								alt="Facebook"
							/>
						</a>
						<a
							href="#"
							class="social__link"
						>
							<img
								src="../../../assets/img/icon/social/youtube.png"
								alt="Youtube"
							/>
						</a>
						<a
							href="#"
							class="social__link"
						>
							<img
								src="../../../assets/img/icon/social/linkedin.png"
								alt="Linkedin"
							/>
						</a>
					</div>
				</div>
			</div>
			<div class="footer__bottom">
				<div class="container p-0">
					<div class="row">
						<div class="col-12 col-md-3">
							<h3 class="footer__title">Giới thiệu</h3>

							<ul class="footer__nav">
								<li class="footer__item">
									<a href="#">Về công ty</a>
								</li>
								<li class="footer__item">
									<a href="#">Về nền tảng giao dịch Vượt trội CQG</a>
								</li>
								<li class="footer__item">
									<a href="#">Tin tức nội bộ</a>
								</li>
								<li class="footer__item">
									<a href="#">Cơ hội nghề nghiệp</a>
								</li>
								<li class="footer__item">
									<a href="#">Thông tin liên hệ</a>
								</li>
							</ul>
						</div>
						<div class="col-12 col-md-3 mt-5 mt-md-0">
							<h3 class="footer__title">Giao dịch</h3>

							<ul class="footer__nav">
								<li class="footer__item">
									<a href="#">Nền tảng giao dịch Vượt trội CQG</a>
								</li>
								<li class="footer__item">
									<a href="#">Hướng dẫn giao dịch A-Z</a>
								</li>
								<li class="footer__item">
									<a href="#">Lịch giao dịch & sự kiện</a>
								</li>
								<li class="footer__item">
									<a href="#">Biểu phí</a>
								</li>
								<li class="footer__item">
									<a href="#">Ký quỹ & đòn bẩy</a>
								</li>
							</ul>
						</div>
						<div class="col-12 col-md-3 mt-5 mt-md-0">
							<h3 class="footer__title">Kiến thức & Đào tạo</h3>

							<ul class="footer__nav">
								<li class="footer__item">
									<a href="#">Hướng dẫn sử dụng phần mềm </a>
								</li>
								<li class="footer__item">
									<a href="#">Tài liệu khoá học</a>
								</li>
								<li class="footer__item">
									<a href="#">Khoá học</a>
								</li>
							</ul>
						</div>
						<div class="col-12 col-md-3 mt-5 mt-md-0">
							<h3 class="footer__title">Thông tin thị trường</h3>

							<ul class="footer__nav">
								<li class="footer__item">
									<a href="#">Nhận định hàng ngày</a>
								</li>
								<li class="footer__item">
									<a href="#">Báo cáo bởi Tornado</a>
								</li>
								<li class="footer__item">
									<a href="#">Tin tức</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>

			<div class="copy-right">
				<p>@2024 Commomdities Trading. All rights reserved</p>
			</div>
		</div>
	</footer>
	<!--@@@ End Footer  -->
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
	name: "the-footer",
	setup(props, ctx) {},
});
</script>

<style lang="scss"></style>
