import React, {PureComponent} from 'react';
import httpService from '../../fetch/httpService';
import './index.css';
import Header from '../../components/header/index';

let ReactHighcharts = require('react-highcharts');

class Detail extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {}
  }

  componentDidMount() {
    httpService.getUserInfo({
      sessionId: "066aa03b852b551987003e6375cd5f16857998ba996585f3340629fc8",
      userId: "517702017062615000768003"
    }, data => {
      //console.log(JSON.stringify(data));
    })
  }

  render() {
    var config = {
      xAxis: {
        categories: [
          'Jan',
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug',
          'Sep',
          'Oct',
          'Nov',
          'Dec'
        ]
      },
      series: [
        {
          data: [
            29.9,
            71.5,
            106.4,
            129.2,
            144.0,
            176.0,
            135.6,
            148.5,
            216.4,
            194.1,
            295.6,
            454.4
          ]
        }
      ]
    };

    return (
      <div className="channel">
        <Header/>
        <ReactHighcharts config={config}></ReactHighcharts>
      </div>
    )
  }
}

export default Detail;