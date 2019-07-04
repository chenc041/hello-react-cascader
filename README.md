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

参数 | 类型 | 默认值
---|--- | --- 
defaultCity | String | 北京
defaultProvince  | String | 北京
defaultDistrict  | String | 市辖区
handleSelectDistrict | func({defaultCity, defaultDistrict, defaultProvince }) => void | 

- 注意点
 因为ui组件是基于antd, 所以必须安装antd
