## 2026-08-03 10:09:57

### 改动内容

- 修复 `global-table` 中 `selection-change` 回调参数类型，改为 `DataType<T>[]`
- 系统管理页（部门/角色/用户）表格插槽改用 `@vue-generic` 标注行类型，消除 `vue-tsc` 报错
- `TypeMap` 新增 `dept` 映射，部门页 `prop-key` 修正为 `dept`

### Commit Message

```
fix: 修复表格组件及系统管理页的 TypeScript 类型错误
```
