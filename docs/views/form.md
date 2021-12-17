### :tada: elm-form

### 基本用法

::: demo

```html
<template>
  <elm-form :form-columns="formColumns" :on-submit="submit"></elm-form>
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
        console.log(val, 1111)
      },
    },
  }
</script>
```

:::

### 行内表单（搜索表单）

::: demo

```html
<template>
  <elm-form
    :form-columns="formColumns2"
    :form-config="formConfig"
    form-type="search"
    :on-submit="submit2"
  ></elm-form>
</template>

<script>
  export default {
    data() {
      return {
        formConfig: {
          inline: true,
        },
        formColumns2: [
          {
            component: 'input',
            label: '审批人',
            prop: 'name',
            labelWidth: '60px',
          },
          {
            type: 'select',
            label: '活动区域',
            prop: 'text',
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
        ],
      }
    },
    methods: {
      submit2(val) {
        console.log(val, 'form')
      },
    },
  }
</script>
```

:::

### 自定义布局表单

::: demo

```html
<template>
  <elm-form
    :form-columns="formColumns2"
    :form-config="formConfig"
    :on-submit="submit2"
  ></elm-form>
</template>

<script>
  export default {
    data() {
      return {
        formConfig: {
          inline: false,
          labelWidth: '80px',
        },
        formColumns2: [
          {
            component: 'input',
            label: '联系人',
            prop: 'linkMan',
            required: true,
            colLayout: {
              span: 12,
            },
          },
          {
            component: 'input',
            label: '联系电话',
            prop: 'linkPhone',
            required: true,
            labelWidth: '100px',
            colLayout: {
              span: 12,
            },
          },
          {
            component: 'inputNumber',
            label: '排序',
            prop: 'sort',
            initValue: 0,
            colLayout: {
              span: 12,
            },
            $attrs: {
              min: 0,
            },
          },
          {
            component: 'input',
            label: '备注',
            type: 'textarea',
            prop: 'attributeDesc',
            $attrs: {
              showWordLimit: true,
              maxlength: 100,
            },
            colLayout: {
              span: 15,
            },
          },
        ],
      }
    },
    methods: {
      submit2(val) {
        console.log(val, 'form')
      },
    },
  }
</script>
```

:::

### 插槽表单

::: demo

```html
<template>
  <elm-form
    :form-columns="formColumns2"
    :form-config="formConfig"
    :on-submit="submit2"
  >
    <template v-slot:upload="slotScope">
      <elm-upload local-preview v-model="slotScope.form.imageUrl" />
    </template>
  </elm-form>
</template>

<script>
  export default {
    data() {
      return {
        formConfig: {
          inline: false,
          labelWidth: '80px',
        },
        formColumns2: [
          {
            component: 'input',
            label: '联系人',
            prop: 'linkMan',
            required: true,
            colLayout: {
              span: 12,
            },
          },
          {
            label: '上传图片',
            prop: 'imageUrl',
            type: 'slot',
            initValue: '',
            slotName: 'upload',
          },
        ],
      }
    },
    methods: {
      submit2(val) {
        console.log(val, 'form')
      },
    },
  }
</script>
```

:::

### props

| 参数        | 说明           | 类型       | 默认值 | 可选值 | 参数       |
| ----------- | -------------- | ---------- | ------ | ------ | ---------- |
| formConfig  | 表单配置       | `Object`   | {}     | --     | --         |
| formColumns | 表单项         | `Object`   | {}     | --     | --         |
| formType    | 表单类型       | `String`   | submit | search | --         |
| modelData   | 动态设置表单值 | `Object`   | --     | --     | --         |
| on-submit   | 提交事件       | `Function` |        |        | 表单返回值 |

### formConfig props

| 参数       | 说明         | 类型     | 默认值 |
| ---------- | ------------ | -------- | ------ |
| rowLayout  | 表单布局     | `Object` |        |
| labelWidth | 表单项宽度   | String   | 同原生 |
| inline     | 行内表单     | Boolean  | 同原生 |
| size       | 表单尺寸大小 | String   | 同原生 |

### formColumns props

| 参数         | 说明                       | 类型             | 可选值                                               | 默认值 |
| ------------ | -------------------------- | ---------------- | ---------------------------------------------------- | ------ |
| type         | 表单类型                   | String           | select、radio、checkbox                              | --     |
| component    | 动态表单类型               | String           | input、inputNumber、cascader、datePicker、timePicker | --     |
| label        | 表单项名称                 | String           | ''                                                   | --     |
| prop         | 表单项 prop                | String           | ''                                                   | --     |
| \$attrs      | 表单项属性                 | Object           | 同原生                                               | {}     |
| \$listeners  | 表单项事件                 | Object           | 同原生                                               | {}     |
| colLayout    | 子项布局，优先于 rowLayout | Object           | --                                                   | --     |
| initValue    | 表单项默认值               | [String, Number] | --                                                   | --     |
| options      | 单选、多选、下拉选择有效   | Array            | --                                                   | []     |
| optionConfig | defaultProps               | Object           | { label : 'label', value: 'value' }                  | []     |

### event

| 事件名  | 说明     | 类型     | 参数     |
| ------- | -------- | -------- | -------- |
| on-rest | 重置事件 | Function | 重置表单 |
