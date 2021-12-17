### :tada: elm-add-minus

### 基本用法

::: demo

```html
<template>
  <elm-add-minus :value="dynamic">
    <template v-slot:default="scope">
      <el-input v-model="scope.row.email"></el-input>
    </template>
  </elm-add-minus>
</template>

<script>
  export default {
    data() {
      return {
        dynamic: [
          {
            email: '',
          },
        ],
      }
    },
  }
</script>
```

:::

### props

| 参数         | 说明         | 类型      | 默认值 | 可选值 |
| ------------ | ------------ | --------- | ------ | ------ |
| value        | 值           | `Array`   | []     | --     |
| maxLength    | 最大新增数目 | `Number`  | 10     | --     |
| disabled     | 禁用         | `Boolean` | false  | --     |
| addStyles    | 新增样式     | `Object`  | --     | --     |
| removeStyles | 删除样式     | `Object`  |        |        |

### event

| 事件名 | 说明 | 类型     | 参数     |
| ------ | ---- | -------- | -------- |
| add    | 新增 | Function | 新增对象 |
| remove | 删除 | Function | 删除对象 |
