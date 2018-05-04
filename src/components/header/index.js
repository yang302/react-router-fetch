import React, {PureComponent} from 'react';
import './index.css';
import {NavLink} from 'react-router-dom';

class Header extends PureComponent {

  render() {
    return (
      <div className='header'>
        <div className='headerTop'>
          <div className='headerMain wrapper'>
            <span>您好，请登录</span>
            <span className='bgBar'>免费注册</span>
            <span className='c_fb615f bgBar'>中欧基金</span>
            <span className='bgBar'>
              <img
                src="https://static.qiangungun.com/qggsy/images/icon/ico_mobile.gif"
                alt=""/>
              钱滚滚App
            </span>
            <span>
              <img
                src="https://static.qiangungun.com/qggsy/images/btn/weixin_icon.png"
                alt=""/>
            </span>
          </div>
        </div>
        <div className='headerNav'>
          <div className='headCont clearfix'>
            <img src="https://static.qiangungun.com/images/qgg-logo.png" alt=""/>
            <ul className='clearfix'>
              <li>
                <NavLink exact activeclassname="active" to='/' replace>首页</NavLink>
              </li>
              <li>
                <NavLink activeclassname="active" to='/gqb'>滚钱宝</NavLink>
              </li>
              <li>
                <NavLink activeclassname="active" to='/fund'>基金产品</NavLink>
              </li>
              <li>
                <NavLink activeclassname="active" to='/service'>客户服务</NavLink>
              </li>
              <li>
                <NavLink activeclassname="active" to='/about'>关于我们</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Header;