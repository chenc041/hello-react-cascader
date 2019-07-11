# hello-react-cascader
 一个基于react和 antd 的省市区选择器

### Install

```bash
npm i hello-react-cascader or yarn hello-react-cascader

```

```js

import React from 'react';
import ReactDOM from 'react-dom';
import Cascader from 'hello-react-cascader';
import 'hello-react-cascader/style/index.css';

ReactDOM.render(
  <div>
    <Cascader />
  </div>,
  container
);

```

##### 参数, 返回

参数 | 类型 | 默认值 | 是否必须
---|--- | --- | ---
defaultCity | String | 北京 | 否
defaultProvince  | String | 北京 | 否
defaultDistrict  | String | 市辖区 | 否
handleSelectDistrict | func({defaultCity, defaultDistrict, defaultProvince }) => void | 是

- 查看 example
```js
yarn server or npm run server
```
- 注意点
 因为ui组件是基于antd, 所以必须安装antd
