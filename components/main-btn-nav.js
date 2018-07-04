//公共顶部主按钮组件，需要插入#main-btn-nav中
var mainBtnNavTemplate=`
<div>
	<ul>
		<li 
		v-for="(item,index) in btnList" 
		:id='index' 
		@click='bindNavagateTo'
		>{{item.name}}</li>
	</ul>
</div>
`

Vue.component('main-btn-nav',{
	template:mainBtnNavTemplate,
	props:['btnList'],
	data(){
		return {
			btnListData:[]
		}
	},
	methods:{
		bindNavagateTo(e){
			let index = e.target.id
			console.log(this.btnList[index].navagate)
		}
	}
})