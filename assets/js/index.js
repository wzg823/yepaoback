// 主按钮行列表
new Vue({
	el:'#main-btn-nav',
	data:{
		btnList:[
			{
				name:'返回',
				navagate:'123'
			},
			{
				name:'会员入场',
				navagate:'123'
			},
			{
				name:'访客登记',
				navagate:'123'
			},
			{
				name:'出入场统计表',
				navagate:'123'
			},
			{
				name:'操课预约统计',
				navagate:'123'
			},
			{
				name:'操课上课统计',
				navagate:'123'
			}	
		]
	}
})
//课程及人数提醒
new Vue({
	el:'#main-course-tips',
	data:{
		tipsList:[
			{
				tit:'今日入场人数',
				num:999
			},
			{
				tit:'当前在场人数',
				num:999
			},
			{
				tit:'超过10天未入场人数',
				num:99
			},
			{
				tit:'30天内到期会员',
				num:999
			},
			{
				tit:'7天内生日会员',
				num:999
			},
			{
				tit:'私教预约',
				num:999
			},
			{
				tit:'小团体课预约',
				num:999
			},
			{
				tit:'团操课预约',
				num:999
			},
			{
				tit:'团操课预约',
				num:999
			},
			{
				tit:'团操课预约',
				num:999
			}
		]	
	}
})
//首页提醒
$(document).ready(function () {
 	var mySwiper = new Swiper ('#tips',{
    	direction: 'vertical',
    	autoplay : 1000,
    	autoplayDisableOnInteraction : false,
    	loop: true,
    	freeMode : true,
  	})        
})
//公共弹窗900px实例
// new Vue({
// 	el:'.priCourse-confirm-alert'
// })
