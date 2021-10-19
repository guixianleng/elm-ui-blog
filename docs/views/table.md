### :tada: elm-table

### 基本用法

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
				manualTrigger: true,
			},
			tableColumns: [
				{
					label: "事件名",
					prop: "eventName",
				},
				{
					label: "事件字段",
					prop: "eventField",
				},
				{
					label: "创建人",
					prop: "createBy",
				}
			],
			tableOperations: {
				options: {
					align: 'left',
					width: 200
				},
				list: [
					{
						text: "启用",
						type: "success",
						handler: row => {
							console.log(row, "row");
						},
					}
				]
			},
    }
  },
}
</script>
```
:::

### API

| 参数              | 说明                                    | 类型     | 默认值       |
| ----------------- | --------------------------------------- | -------- | ------------ |
| active            | 当前步骤                                | `Number` | 0            |
| active-svg        | 自定义激活状态底部图标，详见 svg 组件   | `String` | `checked`    |
| dot-svg           | 自定义未激活状态底部图标，详见 svg 组件 | `String` | `dot-circle` |
| active-text-color | 自定义激活状态颜色                      | `String` | `#268AED`    |
| active-line-color | 自定义激活线束颜色                      | `String` | `#268AED`    |

---
