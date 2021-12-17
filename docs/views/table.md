### :tada: elm-table

### 基本用法

::: demo

```html
<template>
  <elm-table
    :table-config="tableConfig"
    :table-columns="tableColumns"
    :table-operations="tableOperations"
    :data-list="tableData"
  ></elm-table>
</template>

<script>
  export default {
    data() {
      return {
        tableConfig: {
          manual: true,
        },
        tableColumns: [
          {
            label: '日期',
            prop: 'createTime',
          },
          {
            label: '姓名',
            prop: 'name',
          },
          {
            label: '编码',
            prop: 'code',
          },
        ],
        tableOperations: {
          options: {
            align: 'left',
            width: 200,
            fixed: 'right',
          },
          list: [
            {
              text: '启用',
              type: 'primary',
              size: 'mini',
              handler: (row) => {
                console.log(row, 'row')
              },
            },
          ],
        },
        tableData: [
          {
            createTime: '2016-05-02',
            name: '王小虎',
            code: '上海市普陀区金沙江路 1518 弄',
          },
        ],
      }
    },
  }
</script>
```

:::

### 自动请求数据用法

::: demo

```html
<template>
  <elm-table
    :table-config="tableConfig"
    :table-columns="tableColumns"
    :table-operations="tableOperations"
  ></elm-table>
</template>

<script>
  export default {
    data() {
      return {
        tableConfig: {
          manual: false,
          getTableData: `Function`,
        },
        tableColumns: [
          {
            label: '日期',
            prop: 'createTime',
          },
          {
            label: '姓名',
            prop: 'name',
          },
          {
            label: '编码',
            prop: 'code',
          },
        ],
        tableOperations: {
          list: [
            {
              text: '启用',
              type: 'primary',
              size: 'mini',
              handler: (row) => {
                console.log(row, 'row')
              },
            },
          ],
        },
      }
    },
  }
</script>
```

:::

### 手动请求数据用法

::: demo

```html
<template>
  <div>
    <el-button
      type="primary"
      size="small"
      @click="clickRequest"
      style="float: right"
    >
      手动请求数据
    </el-button>
    <elm-table
      ref="elmTable"
      :table-config="tableConfig"
      :table-columns="tableColumns"
      :table-operations="tableOperations"
    ></elm-table>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        tableConfig: {
          manual: true,
          getTableData: `Function`,
          tableDataParams: {
            moduleCode: 'aa',
          },
        },
        tableColumns: [
          {
            label: '日期',
            prop: 'createTime',
          },
          {
            label: '姓名',
            prop: 'name',
          },
          {
            label: '编码',
            prop: 'code',
          },
        ],
        tableOperations: {
          list: [
            {
              text: '启用',
              type: 'primary',
              size: 'mini',
              handler: (row) => {
                console.log(row, 'row')
              },
            },
          ],
        },
      }
    },
    methods: {
      // 手动触发或刷新列表数据
      getListData(params = {}) {
        this.$refs.elmTable.getTableData(params)
      },
      clickRequest() {
        this.tableConfig.tableDataParams = {
          moduleCode: 'bbb',
        }
        this.getListData()
      },
    },
  }
</script>
```

:::

### API

| 参数            | 说明                                         | 类型     | 默认值                               |
| --------------- | -------------------------------------------- | -------- | ------------------------------------ |
| tableConfig     | 表格配置                                     | `Object` |                                      |
| tableColumns    | 表格子项                                     | `Array`  | 同原生                               |
| tableOperations | 表格操作项                                   | `Object` |                                      |
| pageParams      | 自定义分页参数                               | `Object` | { current: 1, size: 10}              |
| dataProps       | manual 为 false 时，接口返回数据格式时获取值 | `Object` | {records: 'records',total: 'total',} |
| dataList        | manual 为 true 时，自定义表格数据            | `Array`  | []                                   |

---

### tableConfigs props

| 参数            | 说明               | 类型    | 默认值 |
| --------------- | ------------------ | ------- | ------ |
| manual          | 是否自动请求数据   | Boolean | false  |
| tableDataParams | 初始化请求数据入参 | Object  |        |
| hidePagination  | 隐藏分页           | Boolean | false  |
| multiSelect     | 表格多选           | Boolean | false  |

### tableConfigs events

| 事件名            | 说明                              | 类型     | 参数 |
| ----------------- | --------------------------------- | -------- | ---- |
| getTableData      | 获取数据的函数                    | Function |      |
| selectChange      | 表格多选方法，multiSelect 为 true | Function |      |
| checkSelectEnable | 是否禁止选择，multiSelect 为 true | Function |      |

### tableOperations props

| 参数    | 说明     | 类型   |
| ------- | -------- | ------ |
| options | 操作配置 | Object |
| list    | 操作列   | Array  |

#### options props

| 参数  | 说明       | 类型   |
| ----- | ---------- | ------ |
| width | 操作列宽度 | String |
| 其他  | 同原生     | --     |

#### list props

| 参数    | 说明           | 类型                |
| ------- | -------------- | ------------------- |
| text    | 按钮文本       | String              |
| type    | 按钮类型       | String              |
| isShow  | 是否隐藏和显示 | [Boolean, Function] |
| handler | 按钮方法类     | Function            |
