### :tada: elm-pagination

### 基本用法

::: demo

```html
<template>
  <div>
    <elm-pagination
      :total="tableTotal"
      :query.sync="pagination"
      @change-page="handleChangePagination"
    />
    <div style="float: right">
      當前頁：{{pagination.current}}, 當前頁數：{{pagination.size}}
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        pagination: {
          current: 1,
          size: 10,
        },
        tableTotal: 100,
      }
    },
    methods: {
      handleChangePagination(value) {
        console.log(value, '分页')
      },
    },
  }
</script>
```

:::

### props

| 参数         | 说明                | 类型      | 默认值                          | 可选值 |
| ------------ | ------------------- | --------- | ------------------------------- | ------ |
| query        | 分页参数            | `Object`  | {current: 1, size: 10,}         | --     |
| defaultProps | 自定义分页字段      | `Object`  | {page: 'current',limit: 'size'} | --     |
| hidden       | 隐藏分页            | `Boolean` | false                           | --     |
| --           | 其他 props 继承原生 | --        | --                              | --     |

### event

| 事件名      | 说明             | 类型     | 参数           |
| ----------- | ---------------- | -------- | -------------- |
| change-page | 分页 change 事件 | Function | 当前分页和页数 |
