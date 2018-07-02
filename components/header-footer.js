// 页面公共头部和底部
var headerFooterTemplate = `
<div>
	<header>
		<div class="header-main">
			<img @click='naveTo' src="../assets/images/card_logo.png" alt="" class="header-logo">
			<div class="header-btn-nav">
				<ul>
					<li>
						<img src="../assets/images/my.png" alt="">
						<span>入场与操课</span>
					</li>
					<li>
						<img src="../assets/images/my.png" alt="">
						<span>私教上课</span>
					</li>
					<li>
						<img src="../assets/images/my.png" alt="">
						<span>收银台</span>
					</li>
					<li>
						<img src="../assets/images/my.png" alt="">
						<span>营销平台</span>
					</li>
				</ul>
			</div>
			<div class="header-outIn">
				<img src="../assets/images/share.png" alt="">
				<span>退出登陆</span>
			</div>
			<div class="header-account">
				<img src="../assets/images/my.png" alt="">
				<div>
					<span>欢迎您：</span>
					<span>dafdasfdsafsda123213</span>
				</div>
				<img src="" alt="">
			</div>
		</div>
	</header>
	<footer>
		<div class='footer-main'>
			<div class="footer-left">
				<p>青铜体育健身可以有限公司 ALL rights reserved</p>
				<p>地址：武汉市汉江区万里广场A2单元706室&nbsp;&nbsp;&nbsp;&nbsp;联系电话：027-8672 5341&nbsp;&nbsp;&nbsp;&nbsp;额ICP证150121号</p>
			</div>
			<div class="footer-right">
				<div>
					<img src="../assets/images/default_headimg.png" alt="">
					<span>微信公众号</span>
				</div>
				<div>
					<img src="../assets/images/default_headimg.png" alt="">
					<span>小程序</span>
				</div>
			</div>
		</div>
	</footer>
</div>
`

Vue.component('header-footer', {
    template: headerFooterTemplate,
    data(){
    	return {}
    },
    methods: {
    	naveTo(){
    		console.log(1)
    	}
    }
})