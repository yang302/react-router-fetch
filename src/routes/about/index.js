import React, {PureComponent} from 'react';
import './index.css';

import Header from '../../components/header/index';

class About extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div className="about">
        <Header/>
      </div>
    )
  }
}

export default About;