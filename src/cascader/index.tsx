import React, { PureComponent } from 'react';
import nanoId from 'nanoid';
import { Select, Col } from 'antd';
import district from './district';
import './style/index.less';

const { Option } = Select;

export interface IProps {
  defaultCity?: string;
  defaultProvince?: string;
  defaultDistrict?: string;
  handleSelectDistrict?: (params: { defaultCity?: string,
    defaultDistrict?: string,
    defaultProvince?: string }) => void;
}

export interface IState {
  cityData: any;
  province: any;
  districtData: any;
  defaultCity: string;
  defaultProvince: string;
  defaultDistrict: string;
}

export default class Cascader extends PureComponent<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    const defaultCity = props.defaultCity || '市辖区';
    const defaultProvince = props.defaultProvince || '北京市';
    const defaultDistrict = props.defaultDistrict ||  '朝阳区';
    this.state = {
      defaultCity,
      defaultDistrict,
      defaultProvince,
      province: district,
      cityData: district[defaultProvince],
      districtData: district[defaultProvince][defaultCity],
    }
  }

  handleSelect = (value: any, type: string) => {
    let key = '';
    let cityData: any = {};
    let districtData: any = {};
    const { handleSelectDistrict } = this.props;
    if (!handleSelectDistrict) {
      console.error('需要传递 handleSelectDistrict方法, 已获取选中的地区数据');
      return;
    }
    const { defaultProvince, defaultCity, defaultDistrict } = this.state;
    switch (type) {
      case 'city':
        key = 'defaultCity';
        cityData = district[defaultProvince];
        districtData = district[defaultProvince][value];
        break;
      case 'province':
        key = 'defaultProvince';
        cityData = district[value];
        break;
      case 'district':
        key = 'defaultDistrict';
        cityData = district[defaultProvince];
        districtData = district[defaultProvince][defaultCity];
        break;
      default:
        cityData = {};
        districtData = {};
        break;
    }
    this.setState<any>({
      [key]: value,
      cityData,
      districtData,
    });
    // @ts-ignore
    if (handleSelectDistrict) {
      handleSelectDistrict({
        defaultCity,
        defaultProvince,
        defaultDistrict,
        ...{[key]: value}
      });
    }
  };

  render() {
    const { districtData, province, cityData, defaultCity, defaultProvince, defaultDistrict } = this.state;
    return (
      <div style={{marginTop: 10}}>
        <Col span={8}>
          <Select value={defaultProvince} style={{ width: '95%' }} onSelect={(val: string) => this.handleSelect(val, 'province')}>
            { province && Object.keys(province).length && Object.keys(province).map((provinceItem) => {
              return <Option key={nanoId()} value={provinceItem}>{provinceItem}</Option>
            }) }
          </Select>
        </Col>
        <Col span={8}>
          <Select value={defaultCity} style={{ width: '95%' }} onSelect={(val: string) => this.handleSelect(val, 'city')}>
            { cityData && Object.keys(cityData).length && Object.keys(cityData).map((cityItem) => {
              return <Option key={nanoId()} value={cityItem}>{cityItem}</Option>
            }) }
          </Select>
        </Col>
        <Col span={8}>
          <Select value={defaultDistrict} style={{ width: '95%' }} onSelect={(val: string) => this.handleSelect(val, 'district')}>
            { districtData && Object.keys(districtData).length && Object.keys(districtData).map((districtItem) => {
              return <Option key={nanoId()} value={districtItem}>{districtItem}</Option>
            }) }
          </Select>
        </Col>
      </div>
    );
  }
}
