import React, {PureComponent} from 'react';
import './index.css';
import Header from '../../components/header/index';

class Fund extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div className="fund">
        <Header/>
        基金产品页面
      </div>
    )
  }
}

export default Fund;