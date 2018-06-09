# 半天速撸React官方文档

## 初级目录
- Hello World 页面
- JSX 简介
- 元素渲染
- 组件 & Props(****)
- State & 生命周期(****)
- 事件处理
- 条件渲染
- 列表 & Keys
- 表单
- 状态提升(**)
- 组合 vs 继承
- React 理念

 > 属性和组合为你提供了以清晰和安全的方式自定义组件的样式和行为所需的所有灵活性。
> 请记住，组件可以接受任意元素，包括基本数据类型、React 元素或函数

### JSX 简介
- 采用小驼峰命名 来定义属性的名称
- 类名: class 变成了 className，而自定义属性 tabindex 则对应着 tabIndex

### 元素渲染
- 元素是构成 React 应用的最小单位。
- 在此 div 中的所有内容都将由 React DOM 来管理，所以我们将其称之为 “根” DOM 节点。
    - 更新元素渲染  
React 元素都是immutable 不可变的。当元素被创建之后，你是无法改变其内容或属性的

### 组件 & Props

- 组件可以将UI切分成一些的独立的、可复用的部件，这样你就只需专注于构建每一个单独的部件
- 组件从概念上看就像是函数，它可以接收任意的输入值（称之为“props”），并返回一个需要在页面上展示的React元素。

> 警告: 组件名称必须以大写字母开头
> 所有的React组件必须像纯函数那样使用它们的props。

> 状态与属性十分相似，但是状态是私有的，完全受控于当前组件。

    - 函数定义/类定义组件
    - 组合组件
         在React应用中，按钮、表单、对话框、整个屏幕的内容等，这些通常都被表示为组件。组件的返回值只能有一个根元素
    - 提取组件
        可以将组件切分为更小的组件
- Props的只读性
    - 
  
 ### State & 生命周期
 
  > 时钟组件

    - 让我们快速回顾一下发生了什么以及调用方法的顺序：
    
    当 <Clock /> 被传递给 ReactDOM.render() 时，React 调用 Clock 组件的构造函数。 由于 Clock 需要显示当前时间，所以使用包含当前时间的对象来初始化 this.state 。 我们稍后会更新此状态。
    
    React 然后调用 Clock 组件的 render() 方法。这是 React 了解屏幕上应该显示什么内容，然后 React 更新 DOM 以匹配 Clock 的渲染输出。

    当 Clock 的输出插入到 DOM 中时，React 调用 componentDidMount() 生命周期钩子。 在其中，Clock 组件要求浏览器设置一个定时器，每秒钟调用一次 tick()。

    浏览器每秒钟调用 tick() 方法。 在其中，Clock 组件通过使用包含当前时间的对象调用 setState() 来调度UI更新。 通过调用 setState() ，React 知道状态已经改变，并再次调用 render() 方法来确定屏幕上应当显示什么。 这一次，render() 方法中的 this.state.date 将不同，所以渲染输出将包含更新的时间，并相应地更新DOM。
    
    一旦Clock组件被从DOM中移除，React会调用componentWillUnmount()这个钩子函数，定时器也就会被清除。


> 在典型的 React 数据流中, 属性（props）是父组件与子代交互的唯一方式。

> 正确地使用状态
- 关于 setState() 这里有三件事情需要知道
    - (1) 不要直接更新状态   构造函数是唯一能够初始化 this.state 的地方
    - (2) 状态更新可能是异步的
    - (3) 状态更新合并    状态可能包含一些独立的变量

- 要修改子组件，你需要使用新的 props 重新渲染它。但是，某些情况下你需要在典型数据流外强制修改子代。要修改的子代可以是 React 组件实例，
也可以是 DOM 元素。对于这两种情况，React 提供了解决办法

### 数据自顶向下流动（单向数据流）
- 任何状态始终由某些特定组件所有，并且从该状态导出的任何数据或 UI 只能影响树中下方的组件。

### 事件处理（绑定）
- React 元素的事件处理和 DOM元素的很相似。但是有一点语法上的不同:
    - React事件绑定属性的命名采用驼峰式写法，而不是小写
    - 如果采用 JSX 的语法你需要传入一个函数作为事件处理函数，而不是一个字符串(DOM元素的写法)
    - 不能使用返回 false 的方式阻止默认行为。你必须明确的使用 preventDefault
    
> 谨慎对待 JSX 回调函数中的 this，类的方法默认是不会绑定 this 的。
如果你忘记绑定 this.handleClick 并把它传入 onClick, 当你调用这个函数的时候 this 的值会是 undefined。

### 条件渲染
-  JavaScript 操作符 if 或条件运算符来创建表示当前状态的元素，然后让 React 根据它们来更新 UI。
- 与运算符 && 条件是 true，&& 右侧的元素就会被渲染，如果是 false，React 会忽略并跳过它。   
- 三目运算符  条件渲染的另一种方法是使用 JavaScript 的条件运算符 condition ? true : false。
- 阻止组件渲染 让 render 方法返回 null 而不是它的渲染结果即可实现。
组件的 render 方法返回 null 并不会影响该组件生命周期方法的回调。例如，componentWillUpdate 和 componentDidUpdate 依然可以被调用

### 列表 & Keys
- 一个元素的key最好是这个元素在列表中拥有的一个独一无二的字符串。通常，我们使用来自数据的id作为元素的key:
- 当元素没有确定的id时，你可以使用他的序列号索引index作为key
- 如果列表可以重新排序，我们不建议使用索引来进行排序，因为这会导致渲染变得很慢
- Keys可以在DOM中的某些元素被增加或删除的时候帮助React识别哪些元素发生了变化

### 表单
- 大多数情况下，我们都会构造一个处理提交表单并可访问用户输入表单数据的函数。实现这一点的标准方法是使用一种称为“受控组件”的技术。
    - 在HTML当中，像`<input>,<textarea>, 和 <select>`这类表单元素会维持自身状态，并根据用户输入进行更新
    - React中，可变的状态通常保存在组件的状态属性中，并且只能用 setState() 方法进行更新
    
###受控组件 
- React负责渲染表单的组件仍然控制用户后续输入时所发生的变化。相应的，其值由React控制的输入表单元素称为“受控组件

### 非受控组件
- 在大多数情况下，我们推荐使用 受控组件 来实现表单。
 在受控组件中，表单数据由 React 组件处理。如果让表单数据由 DOM 处理时，替代方案为使用非受控组件

### 状态提升
> 使用 react 经常会遇到几个组件需要共用状态数据的情况。这种情况下，我们最好将这部分共享的状态提升至他们最近的父组件当中进行管理

### 组合 vs 继承

> React 具有强大的组合模型，我们建议使用组合而不是继承来复用组件之间的代码
    - 包含关系
    - 继承关系
> 如果要在组件之间复用 UI 无关的功能，我们建议将其提取到单独的 JavaScript 模块中。这样可以在不对组件进行扩展的前提下导入并使用该函数、对象或类

### React 理念
- React 最初的目的是使用 JavaScript 创建大型的，快速响应的网络应用

- 从模拟页面开始
    - 已经有一个 JSON 接口和一个设计师给我们的原型图 JSON 接口返回类似下面的数据
    - 
- 第一步：把 UI 划分出组件层级  Photoshop 图层名称也许就是你的 React 组件名称！
    - 在理想状况下，一个组件应该只做一件事情。如果这个组件功能不断丰富，它应该被分成更小的组件
- 第二步：用 React 创建一个静态版本 添加交互则更多需要的是逻辑思考
> 创建能够复用其他组件的组件，并通过 props 来传递数据。props 是一种从父级向子级传递数据的方法。如果你熟悉 state 的概念， 在创建静态版本的时候不要使用 state。State 只在交互的时候使用，即随时间变化的数据。由于这是静态版本的应用，你不需要使用它。
- 第三步：定义 UI 状态的最小(但完整)表示
- 第四步：确定你的 State 应该位于哪里
- 第五步：添加反向数据流


## 高级目录
- 深入 JSX
- 使用 PropTypes 检查类型
- 静态类型检查
- Refs & DOM
-非受控组件
-性能优化
- 不使用 ES6
- 不使用 JSX
- Reconciliation
- Context
- Fragments
- Portals
- Error Boundaries
- Web Components
- 高阶组件
- 传递 Refs
- Render Props
- 与第三方库协同
- 可访问性
- Code-Splitting
- 严格模式

### 深入 JSX
### 使用 PropTypes 进行类型检查
> 注意: React.PropTypes 自 React v15.5 起已弃用。请使用 prop-types 库代替。
> PropTypes 包含一整套验证器，可用于确保你接收的数据是有效的
### 静态类型检查
- Flow 是一个针对 JavaScript 代码的静态类型检查器。它是在Facebook开发的，经常和React一起使用
    - 在一个项目中添加 Flow
        > npm install --save-dev flow-bin 
    - 第一个命令在你的项目中安装了最新版的 Flow
        > npm run flow init
    - 第二个命令创建一个您需要提交的 Flow 配置文件。
    
### Refs & DOM 何时使用 Refs ?
- 在典型的 React 数据流中, 属性（props）是父组件与子组件交互的唯一方式。要修改子组件，你需要使用新的 props 重新渲染它
    
    下面是几个适合使用 refs 的情况：
    
    处理焦点、文本选择或媒体控制。
    触发强制动画。
    集成第三方 DOM 库
    如果可以通过声明式实现，则尽量避免使用 refs。
 - 不要过度使用 Refs 
      - 创建 Refs
      - 访问 Refs 当一个 ref 属性被传递给一个 render 函数中的元素时，可以使用 ref 中的 current 属性对节点的引用进行访问
      - 你不能在函数式组件上使用 ref 属性，因为它们没有实例。
 - 为 DOM 元素添加 Ref
 - 为类组件添加 Ref
 > Ref 转发使组件可以像暴露自己的 ref 一样暴露子组件的 ref
 - 回调 Refs
 
 ### 性能优化
 > 更新UI时，React在内部使用几种巧妙的技术来最小化DOM操作的数量
 - 使用生产版本 在React应用中检测性能问题时，请务必使用压缩过的生产版本。最好在开发应用时使用开发模式，部署应用时换为生产模式
 - 注意只有发布项目时才有必要这样做，正常开发时，使用npm start。
 
 - 单文件生产版本
 > <script src="https://unpkg.com/react@15/dist/react.min.js"></script>
 > <script src="https://unpkg.com/react-dom@15/dist/react-dom.min.js"></script>
 
 - Webpack 为了创建最高效的Webpack生产版本，需要在生产版本的配置中添加这些插件：
 ```
 new webpack.DefinePlugin({
   'process.env': {
     NODE_ENV: JSON.stringify('production')
   }
 }),
 new webpack.optimize.UglifyJsPlugin()
 ```
 ### 协调（Reconciliation）
 > React提供了一组声明式API以让你不必关心每次更新的变化
 ### Context
 > Context 通过组件树提供了一个传递数据的方法，从而避免了在每一个层级手动的传递 props 属性