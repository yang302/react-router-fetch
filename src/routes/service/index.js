import React, {PureComponent} from 'react';
import './index.css';
import Header from './../../components/header/index';

class Service extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div className="service">
        <Header/>
        客户服务页面
      </div>
    )
  }
}

export default Service;