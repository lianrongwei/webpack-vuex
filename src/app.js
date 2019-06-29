/*入口文件*/

/*导入Vue包*/
import Vue from 'vue'
/* 1.导入vuex */
import Vuex from 'vuex'
/* 2.安装vuex */
Vue.use(Vuex)
/* 3.new Vuex.Store() 实例 得到数据仓储对象*/
const store = new Vuex.Store({
	state: { /* 存放数据 */
		count: 0
	},
	mutations: { /* 方法 修改数据 */
		increment (state) { /* 第1个参数固定死, state */
			state.count++
		},
		subtract (state, n) { /* 第2个参数是传参,注意只有两个参数，要想传多个参数，用对象或者数组 减N*/
			state.count -= n
			//state.count -= (n.a + n.b) /* 对象方式 */ 
		}
	},
	getters: { /* getters 只负责对外提供数据，不负责修改数据，修改数据在mutations操作*/
		optCount (state) {
			return 'count：' + state.count
		}
	}
})

/*导入模板对象*/
import app from './App.vue'

/* 创建一个vue 实例 */
const vm = new Vue({
	el: '#app',
	data: {
		msg: 'Gonefour_boke'
	},
	render: cEl => cEl(app),
	store /* 挂载 Vuex.store */
})
