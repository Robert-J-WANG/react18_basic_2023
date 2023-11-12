# React18_2023 + TypeScript + Vite

### Part 1-react基础

+ #### 工程化的环境创建 

    ```
    yarn create vite
    ```

+ #### jsx基础

    1. ##### JSX介绍（略）

    2. ##### JSX中使用js表达式

    + **语法** { JS 表达式 }

    ```jsx
    const name = '柴柴'
    
    <h1>你好，我叫{name}</h1>   //    <h1>你好,我叫柴柴</h1>
    ```

    + **可以使用的表达式**
        + 字符串、数值、布尔值、null、undefined、object（ [] / {} ）
        + 1 + 2、'abc'.split('')、['a', 'b'].join('-')
        + fn()
    + **特别注意**
        + if 语句/ switch-case 语句/ 变量声明语句，这些叫做语句，不是表达式，不能出现在 `{}` 中！！

    3. ##### JSX列表渲染

    + 实现：使用数组的`map` 方法

    ```jsx
    // 来个列表
    const songs = [
      { id: 1, name: '痴心绝对' },
      { id: 2, name: '像我这样的人' },
      { id: 3, name: '南山南' }
    ]
    function App() {
      return (
        <div className="App">
          <ul>
            {
              songs.map(item => <li>{item.name}</li>)
            }
          </ul>
        </div>
      )
    }
    export default App
    ```

    + 注意点：需要为遍历项添加 `key` 属性
        + key 在 HTML 结构中是看不到的，是 React 内部用来进行性能优化时使用
        + key 在当前列表中要唯一的字符串或者数值（String/Number）
        + 如果列表中有像 id 这种的唯一值，就用 id 来作为 key 值
        + 如果列表中没有像 id 这种的唯一值，就可以使用 index（下标）来作为 key 值

    4. ##### JSX条件渲染

    + 根据是否满足条件生成HTML结构，比如Loading效果
    + 实现：可以使用 `三元运算符` 或  `逻辑与(&&)运算符`

    ```jsx
    // 来个布尔值
    const flag = true
    function App() {
      return (
        <div className="App">
          {/* 条件渲染字符串 */}
          {flag ? 'react真有趣' : 'vue真有趣'}
          {/* 条件渲染标签/组件 */}
          {flag ? <span>this is span</span> : null}
        </div>
      )
    }
    export default App
    ```

    5. ##### JSX样式处理

    + 行内样式 - style 

    ```jsx
    function App() {
      return (
        <div className="App">
          <div style={{ color: 'red' }}>this is a div</div>
        </div>
      )
    }
    
    export default App
    ```

    + 行内样式 - style - 更优写法

    ```jsx
    const styleObj = {
        color:red
    }
    
    function App() {
      return (
        <div className="App">
          <div style={ styleObj }>this is a div</div>
        </div>
      )
    }
    
    export default App
    ```

    +  类名 - className（推荐）

    ```css
    .title {
      font-size: 30px;
      color: blue;
    }
    ```

    + 类名 - className - 动态类名控制

    ```jsx
    import './app.css'
    const showTitle = true
    function App() {
      return (
        <div className="App">
          <div className={ showTitle ? 'title' : ''}>this is a div</div>
        </div>
      )
    }
    export default App
    ```

    6. ##### JSX注意事项

    + SX必须有一个根节点，如果没有根节点，可以使用`<></>`（幽灵节点）替代
    + 所有标签必须形成闭合，成对闭合或者自闭合都可以
    + JSX中的语法更加贴近JS语法，属性名采用驼峰命名法  `class -> className`  `for -> htmlFor`
    + JSX支持多行（换行），如果需要换行，需使用`()` 包裹，防止bug出现

    7. 阶段小练习：

    + 拉取准备好的项目模块到本地 ，安装依赖，run起来项目
        https://gitee.com/react-course-series/react-jsx-demo 
    + 按照图示，完成 `评论数据渲染`  `tab内容渲染`  `评论列表点赞和点踩`  三个视图渲染 

+ #### 类式组件（了解）

    1. ##### 类组件

    + **概念**

        + 使用 ES6 的 class 创建的组件，叫做类（class）组件

    + **组件定义与渲染**

        ```jsx
        // 引入React
        import React from 'react'
        
        // 定义类组件
        class HelloC extends React.Component {
          render () {
            return <div>这是我的第一个类组件!</div>
          }
        }
        
        function App () {
          return (
            <div className="App">
              {/* 渲染类组件 */}
              <HelloC />
              <HelloC></HelloC>
            </div>
          )
        }
        export default App
        ```

    + **约定说明**

        + **类名称也必须以大写字母开头**
        + 类组件应该继承 React.Component 父类，从而使用父类中提供的方法或属性
        + 类组件必须提供 render 方法**render 方法必须有返回值，表示该组件的 UI 结构**

    2. ##### 类组件的事件绑定

    + 类组件中的事件绑定，整体的方式和函数组件差别不大

    + 唯一需要注意的 因为处于class类语境下 所以定义事件回调函数以及定它写法上有不同

        + 定义的时候: class Fields语法  
        + 使用的时候: 需要借助this关键词获取

        ```jsx
        
        import React from "react"
        class CComponent extends React.Component {
          // class Fields
          clickHandler = (e, num) => {
            // 这里的this指向的是正确的当前的组件实例对象 
            // 可以非常方便的通过this关键词拿到组件实例身上的其他属性或者方法
            console.log(this)
          }
        
          clickHandler1 () {
            // 这里的this 不指向当前的组件实例对象而指向undefined 存在this丢失问题
            console.log(this)
          }
        
          render () {
            return (
              <div>
                <button onClick={(e) => this.clickHandler(e, '123')}>click me</button>
                <button onClick={this.clickHandler1}>click me</button>
              </div>
            )
          }
        }
        
        function App () {
          return (
            <div>
              <CComponent />
            </div>
          )
        }
        
        export default App
        
        ```

    3. ##### 组件状态( 类式组件) 

    + 一个前提：
        + 在React hook出来之前，函数式组件是没有自己的状态的，所以我们统一通过类组件来讲解

    + 初始化状态

        + 通过class的实例属性state来初始化 
        +  state的值是一个对象结构，表示一个组件可以有多个数据状态 

        ```jsx
        class Counter extends React.Component {
          // 初始化状态
          state = {
            count: 0
          }
          render() {
            return <button>计数器</button>
          }
        }
        ```

    + 读取状态

        + 通过this.state来获取状态

        ```jsx
        class Counter extends React.Component {
          // 初始化状态
          state = {
            count: 0
          }
          render() {
            // 读取状态
            return <button>计数器{this.state.count}</button>
          }
        }
        ```

    + 修改状态

        + 语法 : this.setState({ 要修改的部分数据 })
        + setState方法作用 :
            + 修改state中的数据状态
            + 更新UI
        + 思想 : 数据驱动视图，也就是只要修改数据状态，那么页面就会自动刷新，无需手动操作dom 
        + 注意事项: **不要直接修改state中的值，必须通过setState方法进行修改**

        ```jsx
        class Counter extends React.Component {
          // 定义数据
          state = {
            count: 0
          }
          // 定义修改数据的方法
          setCount = () => {
            this.setState({
              count: this.state.count + 1
            })
          }
          // 使用数据 并绑定事件
          render () {
            return <button onClick={this.setCount}>{this.state.count}</button>
          }
        }
        ```

    4. ##### this问题说明

    + 这里我们作为了解内容，随着js标准的发展，主流的写法已经变成了class fields，无需考虑太多this问题

    5. ##### React的状态不可变

    + **概念**：不要直接修改状态的值，而是基于当前状态创建新的状态值

    + **错误的直接修改**

        ```jsx
        state = {
          count : 0,
          list: [1,2,3],
          person: {
             name:'jack',
             age:18
          }
        }
        // 直接修改简单类型Number
        this.state.count++
        ++this.state.count
        this.state.count += 1
        this.state.count = 1
        
        // 直接修改数组
        this.state.list.push(123)
        this.state.list.spice(1,1)
        
        // 直接修改对象
        this.state.person.name = 'rose'
        ```

    + **基于当前状态创建新值**

        ```jsx
        this.setState({
            count: this.state.count + 1
            list: [...this.state.list, 4],
            person: {
               ...this.state.person,
               // 覆盖原来的属性 就可以达到修改对象中属性的目的
               name: 'rose'
            }
        })
        ```

    6. ##### 表单处理

    + 受控表单组件（推荐使用）

        + 什么是受控组件？input框自己的状态被React组件状态控制
            + React组件的状态的地方是在state中，input表单元素也有自己的状态是在value中，React将state与表单元素的值（value）绑定到一起，由state的值来控制表单元素的值，从而保证单一数据源特性

        + **实现步骤 **-> 以获取文本框的值为例，受控组件的使用步骤如下：
            + 在组件的state中声明一个组件的状态数据
            + 将状态数据设置为input标签元素的value属性的值
            + 为input添加change事件，在事件处理程序中，通过事件对象e获取到当前文本框的值（`即用户当前输入的值`）
            + 调用setState方法，将文本框的值作为state状态的最新值
        + **代码落地**

        ```jsx
        import React from 'react'
        
        class InputComponent extends React.Component {
          // 声明组件状态
          state = {
            message: 'this is message',
          }
          // 声明事件回调函数
          changeHandler = (e) => {
            this.setState({ message: e.target.value })
          }
          render () {
            return (
              <div>
                {/* 绑定value 绑定事件*/}
                <input value={this.state.message} onChange={this.changeHandler} />
              </div>
            )
          }
        }
        
        function App () {
          return (
            <div className="App">
              <InputComponent />
            </div>
          )
        }
        export default App
        ```

        

    + 受控表单组件 （了解）

        + 什么是受控组件？  `input框自己的状态不被React组件状态控制`
            + 非受控组件就是通过手动操作dom的方式获取文本框的值，文本框的状态不受react组件的state中的状态控制，直接通过原生dom获取输入框的值
        + **实现步骤** -> 以获取文本框的值为例，受控组件的使用步骤如下：
            + 导入`createRef` 函数
            + 调用createRef函数，创建一个ref对象，存储到名为`msgRef`的实例属性中
            + 为input添加ref属性，值为`msgRef`
            + 在按钮的事件处理程序中，通过`msgRef.current`即可拿到input对应的dom元素，而其中`msgRef.current.value`拿到的就是文本框的值
        + **代码落地**

        ```jsx
        import React, { createRef } from 'react'
        
        class InputComponent extends React.Component {
          // 使用createRef产生一个存放dom的对象容器
          msgRef = createRef()
        
          changeHandler = () => {
            console.log(this.msgRef.current.value)
          }
        
          render() {
            return (
              <div>
                {/* ref绑定 获取真实dom */}
                <input ref={this.msgRef} />
                <button onClick={this.changeHandler}>click</button>
              </div>
            )
          }
        }
        
        function App () {
          return (
            <div className="App">
              <InputComponent />
            </div>
          )
        }
        export default App
        ```

+ #### 函数式组件

    1. ##### 函数组件

    + **概念**

        + 使用 JS 的函数（或箭头函数）创建的组件，就叫做`函数组件`

    + **组件定义与渲染**

        ```jsx
        // 定义函数组件
        function HelloFn () {
          return <div>这是我的第一个函数组件!</div>
        }
        
        
        function App () {
          return (
            <div className="App">
              {/* 渲染函数组件 */}
              <HelloFn />
              <HelloFn></HelloFn>
            </div>
          )
        }
        export default App
        ```

    + **约定说明**

        + 组件的名称**必须首字母大写**，react内部会根据这个来判断是组件还是普通的HTML标签
        + 函数组件**必须有返回值**，表示该组件的 UI 结构；如果不需要渲染任何内容，则返回 null
        + 组件就像 HTML 标签一样可以被渲染到页面中。组件表示的是一段结构内容，对于函数组件来说，渲染的内容是函数的**返回值**就是对应的内容
        + 使用函数名称作为组件标签名称，可以成对出现也可以自闭合

    2. ##### 函数组件的事件绑定

    + 如何绑定事件

        + 语法: on + 事件名称 = { 事件处理程序 } ，比如：`<div onClick={ onClick }></div>` 
        + 注意点: react事件采用驼峰命名法，比如：onMouseEnter、onFocus
        + 样例

        ```jsx
        // 函数组件
        function HelloFn () {
          // 定义事件回调函数
          const clickHandler = () => {
            console.log('事件被触发了')
          }
          return (
            // 绑定事件
            <button onClick={clickHandler}>click me!</button>
          )
        }
        ```
    
    + 获取事件对象
    
        + 获取事件对象e只需要在 事件的回调函数中 补充一个形参e即可拿到
    
        ```jsx
        // 函数组件
        function HelloFn () {
          // 定义事件回调函数
          const clickHandler = (e) => {
            console.log('事件被触发了', e)
          }
          return (
            // 绑定事件
            <button onClick={clickHandler}>click me!</button>
          )
        }
        ```
    
    + 传递额外参数
    
        + 解决思路: 改造事件绑定为箭头函数 在箭头函数中完成参数的传递
    
        ```jsx
        import React from "react"
        
        // 如何获取额外的参数？
        // onClick={ onDel } -> onClick={ () => onDel(id) }
        // 注意: 一定不要在模板中写出函数调用的代码 onClick = { onDel(id) }  bad!!!!!!
        
        const TestComponent = () => {
          const list = [
            {
              id: 1001,
              name: 'react'
            },
            {
              id: 1002,
              name: 'vue'
            }
          ]
          const onDel = (e, id) => {
            console.log(e, id)
          }
          return (
              <ul>
                {list.map(item =>（
                   <li key={item.id}>
                        {item.name}
                        <button onClick={(e) => onDel(e, item.id)}>x</button>
                   </li>
                ))}
              </ul>
          )
        }
        
        function App () {
          return (
            <div>
              <TestComponent />
            </div>
          )
        }
        
        export default App
        ```
    
    3. ##### useStat
    
+ #### Hooks 基础

    + 什么是hooks
        + Hooks的本质：**一套能够使函数组件更强大，更灵活的“钩子”**
        + 经过多年的实战，函数组件是一个更加匹配React的设计理念 `UI = f(data)`，也更有利于逻辑拆分与重用的组件表达形式，而先前的函数组件是不可以有自己的状态的，为了能让函数组件可以拥有自己的状态，所以从react v16.8开始，Hooks应运而生
    + **注意点：**
        + 有了hooks之后，为了兼容老版本，class类组件并没有被移除，俩者都可以使用
        + 有了hooks之后，不能在把函数成为无状态组件了，因为hooks为函数组件提供了状态
        + hooks只能在函数组件中使用
    + Hooks解决了什么问题
        +  组件的逻辑复用
            + 在hooks出现之前，react先后尝试了 mixins混入，HOC高阶组件，render-props等模式
                但是都有各自的问题，比如mixin的数据来源不清晰，高阶组件的嵌套问题等等 
        + class组件自身的问题
            + class组件就像一个厚重的‘战舰’ 一样，大而全，提供了很多东西，有不可忽视的学习成本，比如各种生命周期，this指向问题等等，而我们更多时候需要的是一个轻快灵活的'快艇' 
    
+ #### useState

    1. 基础使用

    + **作用**

        + useState为函数组件提供状态（state）

    + **使用步骤**

        + 导入 `useState` 函数
        + 调用 `useState` 函数，并传入状态的初始值
        + 从`useState`函数的返回值中，拿到状态和修改状态的方法
        + 在JSX中展示状态
        + 调用修改状态的方法更新状态
    
    + **代码实现**
    
        ```jsx
        import { useState } from 'react'
        
        function App() {
          // 参数：状态初始值比如,传入 0 表示该状态的初始值为 0
          // 返回值：数组,包含两个值：1 状态值（state） 2 修改该状态的函数（setState）
          const [count, setCount] = useState(0)
          return (
            <button onClick={() => { setCount(count + 1) }}>{count}</button>
          )
        }
        export default App
        ```
    
    2. 状态的读取和修改
    
    + **读取状态**
        + 该方式提供的状态，是函数内部的局部变量，可以在函数内的任意位置使用
    + **修改状态**
        + setCount是一个函数，参数表示`最新的状态值`
        + 调用该函数后，将使用新值替换旧值
        + 修改状态后，由于状态发生变化，会引起视图变化
    + **注意事项**
        + 修改状态的时候，一定要使用新的状态替换旧的状态，不能直接修改旧的状态，尤其是引用类型
    
    3. 组件的更新过程
    
    + 函数组件使用 **useState** hook 后的执行过程，以及状态值的变化
    
        + 组件第一次渲染
            + 从头开始执行该组件中的代码逻辑
            + 调用 `useState(0)` 将传入的参数作为状态初始值，即：0
            + 渲染组件，此时，获取到的状态 count 值为： 0
        + 组件第二次渲染
            + 点击按钮，调用 `setCount(count + 1)` 修改状态，因为状态发生改变，所以，该组件会重新渲染
            + 组件重新渲染时，会再次执行该组件中的代码逻辑
            + 再次调用 `useState(0)`，此时 **React 内部会拿到最新的状态值而非初始值**，比如，该案例中最新的状态值为 1
            + 再次渲染组件，此时，获取到的状态 count 值为：1
    
    + 注意：
    
        + **useState 的初始值(参数)只会在组件第一次渲染时生效**。也就是说，以后的每次渲染，useState 获取到都是最新的状态值，React 组件会记住每次最新的状态值
    
        ```jsx
        import { useState } from 'react'
        
        function App() {
          const [count, setCount] = useState(0)
          // 在这里可以进行打印测试
          console.log(count)
          return (
            <button onClick={() => { setCount(count + 1) }}>{count}</button>
          )
        }
        export default App
        ```

    4. 使用规则

    + `useState` 函数可以执行多次，每次执行互相独立，每调用一次为函数组件提供一个状态 
    
        ```jsx
        function List(){
          // 以字符串为初始值
          const [name, setName] = useState('cp')
          // 以数组为初始值
          const [list,setList] = useState([])
        }
        ```
    
    + `useState` 注意事项 
    
        + 只能出现在函数组件或者其他hook函数中 
        + 不能嵌套在if/for/其它函数中（react按照hooks的调用顺序识别每一个hook） 
    
        ```jsx
        let num = 1
        function List(){
          num++
          if(num / 2 === 0){
             const [name, setName] = useState('cp') 
          }
          const [list,setList] = useState([])
        }
        // 俩个hook的顺序不是固定的，这是不可以的！！！
        ```
    
        + 可以通过开发者工具查看hooks状态
    
    5. ##### 阶段小练习：
    
    + 拉取项目模板到本地，安装依赖，run起来项目
        https://gitee.com/react-course-series/react-component-demo 
    
    + 完成tab点击切换激活状态交互
    
    + 完成发表评论功能
        注意：生成独立无二的id 可以使用  uuid 包  `yarn add uuid` 

        ```jsx
        import { v4 as uuid } from 'uuid'
        uuid() // 得到一个独一无二的id
        ```
    
    #### 

+ #### useEffect

+ #### useRef

+ #### 自定义hook

+ #### 智能组件和UI组件









