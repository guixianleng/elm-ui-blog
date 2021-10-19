### :tada: elm-form

### 基本用法

::: demo

```html
<template>
  <elm-form :formColumns="formColumns" @on-submit="submit"></elm-form>
</template>

<script>
  export default {
    data() {
      return {
        formColumns: [
          {
            component: 'input',
            label: '活动名称',
            prop: 'name',
          },
          {
            type: 'select',
            label: '活动区域',
            prop: 'text',
            initValue: 'shanghai',
            options: [
              {
                label: '区域一',
                value: 'shanghai',
              },
              {
                label: '区域二',
                value: 'hangzhou',
              },
            ],
          },
          {
            component: 'datePicker',
            label: '活动时间',
            prop: 'date1',
            type: 'date',
            colLayout: {
              span: 12,
            },
            $attrs: {
              valueFormat: 'yyyy-MM-dd',
            },
          },
          {
            component: 'datePicker',
            label: '',
            prop: 'date2',
            type: 'date',
            colLayout: {
              span: 12,
            },
            labelWidth: '20px',
            $attrs: {
              valueFormat: 'yyyy-MM-dd',
            },
          },
          {
            type: 'checkbox',
            label: '活动性质',
            prop: 'type',
            options: [
              {
                label: '美食/餐厅线上活动',
                value: '1',
              },
              {
                label: '地推活动',
                value: '2',
              },
              {
                label: '线下主题活动',
                value: '3',
              },
            ],
          },
          {
            component: 'input',
            label: '活动形式',
            prop: 'desc',
            type: 'textarea',
          },
        ],
      }
    },
    methods: {
      submit(val) {
        console.log(val)
      },
    },
  }
</script>
```

:::

### API

| 参数        | 说明     | 类型     | 默认值 |
| ----------- | -------- | -------- | ------ |
| formConfig  | 表单配置 | `Object` |        |
| formColumns | 表单项   | `Object` |        |

---

### formCnfigs props

| 参数       | 说明         | 类型     | 默认值 |
| ---------- | ------------ | -------- | ------ |
| rowLayout  | 表单布局     | `Object` |        |
| labelWidth | 表单项宽度   | String   | 同原生 |
| size       | 表单尺寸大小 | String   | 同原生 |

### formColumns props

| 参数       | 说明                       | 类型   | 可选值                  | 默认值 |
| ---------- | -------------------------- | ------ | ----------------------- | ------ |
| type       | 表单类型                   | String | select、radio、checkbox | --     |
| component  | 动态表单类型               | String | 除上述之外的表单类型    | --     |
| label      | 表单项名称                 | String | ''                      | --     |
| \$attrs    | 组件 props 的继承          | Object | --                      | {}     |
| colLayout  | 子项布局，优先于 rowLayout | Object | --                      | --     |
| labelWidth | label 的宽度               | String | --                      | --     |

### event

| 事件名    | 说明     | 类型     | 参数       |
| --------- | -------- | -------- | ---------- |
| on-submit | 提交事件 | Function | 表单返回值 |
| on-rest   | 重置事件 | Function | 重置表单   |
