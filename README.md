# 一些DLL 依赖

将使用 C# 写的 dll文件 与 Electron 结合

### 安装

```
yarn add @glossmod/get-dll-path
```

### 使用 

```ts
inpurt { GetDllPath } from "@glossmod/get-dll-path"

GetDllPath.GetSpecialFolder()
```