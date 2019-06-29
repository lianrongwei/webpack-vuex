# 什么是Vuex？
简单说,Vuex是为了保存父子组件之间共享数据而诞生的，组件之间有要共享的数据，可以直接挂载到Vuex中，Vuex是一个全局的共享数据存储区域，相当于是一个数据仓库。(官网)[https://vuex.vuejs.org/zh/]

>小知识：
1.只有共享的数据,才有必要放到Vuex中
2.组件内部私有的数据，放到组件的data中即可
3.props和data和vuex的区别
  >> props: 存放父子组件之间传值的数据
   data: 存放私有数据的
   vuex: 存放组件之间共享的数据,是全局数据

## 安装
npm
```
npm install vuex --save
```

在一个模块化的打包系统中，您必须显式地通过 Vue.use() 来安装 Vuex
```JavaScript
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
```

### 起步
安装Vuex之后，创建一个 store和mutations和getters(store相当于vue中的data, mutations相当于vue中的methods, getters跟vue中过滤器或computed比较像)
```JavaScript
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
```
创建好需要挂载到vue实例上,如下
```JavaScript
const vm = new Vue({
	el: '#app',
	data: {
		msg: 'Gonefour_boke'
	},
	render: cEl => cEl(app),
	store /* 挂载 Vuex.store */
})
```

现在，你可以在任何个组件里面通过：
$store.state.'属性名' state的数据 
this.$store.commit('方法名') 访问到mutations里面的方法
$store.getters.optCount 访问到getters里面的方法
```JavaScript
console.log($store.state.count) // -> 0

this.$store.commit('increment')
console.log($store.state.count) // -> 1

this.$store.commit('subtract', 2)
console.log($store.state.count) // -> -1
//this.$store.commit('subtract', { a: 1, b: 2 }) //对象方式传参

console.log(this.$store.getters.optCount) // -> count： -1
```

#### 总结
1.state中的数据,不推荐直接修改,想要修改必须通过mutations
2.如果组件想要直接从 state 上获取数据, 使用 this.$store.state.属性名
3.如果组件想要修改数据,必须使用mutations提供的方法，使用 this.$store.commit('方法名', 参数)
4.如果state中的数据,对外提供需要包装,推荐用getters, 使用 this.$store.getters.方法名
