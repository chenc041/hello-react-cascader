import * as React from 'react';
import Cascader from '../src/cascader';

export default class Demo extends React.Component {

  handleSelectDistrict = (addressInfo: any) => {
    console.log(addressInfo);
  }

  render() {
    return <Cascader handleSelectDistrict={this.handleSelectDistrict} />
  }

}
