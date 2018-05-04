import React, {PureComponent} from 'react';
import './index.css';
import Header from '../../components/header/index';
import {Carousel, Tabs, Table} from 'antd';
const TabPane = Tabs.TabPane;

class Home extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      sortedInfo: null
    }
  }

  tabSwitchCallback(e) {
    console.log(e);
  }

  handleChange(sorter) {
    this.setState({sortedInfo: sorter});
  }

  render() {
    const tabTitle = [
      '混合型',
      '指数型',
      '债券型',
      '定期开放',
      '股票型',
      '货币型',
      '海外基金'
    ];

    const data = [
      {
        key: '1',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park'
      }, {
        key: '2',
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park'
      }, {
        key: '3',
        name: 'Joe Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park'
      }, {
        key: '4',
        name: 'Jim Red',
        age: 32,
        address: 'London No. 2 Lake Park'
      }
    ];

    let { sortedInfo } = this.state;
    const columns = [
      {
        title: 'Name',
        dataIndex: 'name'
      },
      {
        title: 'Age',
        dataIndex: 'age',
        sorter: (a, b) => a.age - b.age
      },
      {
        title: 'Address',
        dataIndex: 'address'
      }
    ];

    return (
      <div className="home">
        <Header/>
        <div className='carouselWrapper'>
          <Carousel effect="fade">
            <div>
              <img
                src="https://cms.qiangungun.com/qggsy/images/banner/20180413sdzt.jpg"
                alt=""/>
            </div>
            <div>
              <img
                src="https://cms.qiangungun.com/qggsy/images/banner/20180305zosdxf.jpg"
                alt=""/>
            </div>
            <div>
              <img
                src="https://cms.qiangungun.com/qggsy/images/banner/20180308haclyx.jpg"
                alt=""/>
            </div>
          </Carousel>
        </div>
        <div className='fundMarket wrapper'>
          <br/>
          <h3>基金超市</h3>
          <br/>
          <Tabs
            defaultActiveKey="0"
            animated={false}
            onTabClick={this
            .tabSwitchCallback
            .bind(this)}>
            {tabTitle.map((item, index) => {
              return (
                <TabPane tab={item} key={index}>
                  <Table columns={columns} dataSource={data}/>
                </TabPane>
              )
            })}
          </Tabs>
        </div>
      </div>
    )
  }
}

export default Home;