//页面全尺寸标题
var titleTemplate = `
<div id="title-fullsize" class="clearfix">
    <h3>{{tit}}</h3>
</div>
`
Vue.component('title-fullsize', {
    props: ['tit'],
    template: titleTemplate,
    data(){
    	return {}
    },
    methods: {

    }
})