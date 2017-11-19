import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu, Icon } from 'antd';

const { Header, Content, Footer, Sider } = Layout;

class SideBar extends React.Component {
  render() {
    return (
      <Layout>
        <Sider
          style={{
            overflow: 'auto',
            height: '100vh',
            position: 'fixed',
            left: 0
          }}
        >
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">
              <Link to="/">
                <Icon type="home" />
                <span className="nav-text">Home</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to="/player">
                <Icon type="user" />
                <span className="nav-text">Player Stats</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="3">
              <Link to="/team">
                <Icon type="global" />
                <span className="nav-text">Team Stats</span>
              </Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Content />
        </Layout>
      </Layout>
    );
  }
}

export default SideBar;
