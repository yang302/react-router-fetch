import React, {PureComponent} from 'react';
import './index.css';
import Header from './../../components/header/index';

class Gqb extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div className="gqb">
        <Header/>
        滚钱宝页面
      </div>
    )
  }
}

export default Gqb;