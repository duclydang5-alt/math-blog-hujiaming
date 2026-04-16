powered by gemini
用于上传我的数学笔记

```contributionGraph
title: Contributions
graphType: default
dateRangeValue: 180
dateRangeType: LATEST_DAYS
startOfWeek: 1
showCellRuleIndicators: true
titleStyle:
  textAlign: center
  fontSize: 15px
  fontWeight: normal
dataSource:
  type: PAGE
  value: ""
  dateField:
    type: FILE_CTIME
  filters: []
fillTheScreen: true
enableMainContainerShadow: true
cellStyleRules:
  - id: default_b
    color: "#9be9a8"
    min: 1
    max: 2
  - id: default_c
    color: "#40c463"
    min: 2
    max: 5
  - id: default_d
    color: "#30a14e"
    min: 5
    max: 10
  - id: default_e
    color: "#216e39"
    min: 10
    max: 999
mainContainerStyle:
  backgroundColor: "#0d0b0bff"

```
## 📚 笔记目录

- [[工具箱/01分部估计]]
- [[工具箱/02利用泰勒展开求收敛阶]]
- [[stolz定理]]
- [[Toepliz定理]]
- [[Heaviside Cover-up Method]]

### 进入终端：
cd D:\MyMathBlog\quartz\quartz\
(tap可达)
### 上传文件所用代码：

- `git add .`

- `git commit -m "这里写备注"`

- `git push`

### 预览：

终端输入：
npx quartz build --serve

访问：
localhost:8080

ctrl + c 结束预览

### 意外：
如果因为没有留言而进入Vim,

- 按 `i` 进入编辑模式
    
- 写你的留言
    
- 按 `Esc` 退出编辑模式
    
- 输入 `:wq` 保存并退出


