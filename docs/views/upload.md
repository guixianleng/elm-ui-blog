### :tada: elm-upload

### 基本用法

::: demo

```html
<template>
  <div>
    <elm-upload local-preview v-model="imageUrl" @preview="handlePreview" />
    <div style="margin-top: 10px">图片地址：{{imageUrl}}</div>
    <el-dialog :visible.sync="dialogVisible">
      <img width="100%" :src="imageUrl" alt="image" />
    </el-dialog>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        imageUrl: '',
        dialogVisible: false,
      }
    },
    methods: {
      handlePreview(value) {
        this.dialogVisible = true
      },
    },
  }
</script>
```

:::

### props

| 参数         | 说明               | 类型      | 默认值     | 可选值 |
| ------------ | ------------------ | --------- | ---------- | ------ |
| value        | 数据对象           | `String`  | ''         | --     |
| className    | 自定义样式         | `String`  | ''         | --     |
| localPreview | 本地预览           | `Boolean` | false      | --     |
| action       | 上传图片服务器地址 | `String`  | ''         | --     |
| autoUpload   | 自动上传           | `Boolean` | true       |        |
| disabled     | 禁止删除           | `Boolean` | true       |        |
| limit        | 限制张数           | `Number`  | 5          |        |
| maxSize      | 限制图片大小       | `Number`  | 5          |        |
| color        | 进度条背景色       | `String`  | '#26BDB7'  |        |
| subText      | 上传文案           | `String`  | '上传照片' |        |

### event

| 事件名  | 说明     | 类型     | 参数 |
| ------- | -------- | -------- | ---- |
| preview | 图片预览 | Function | file |
