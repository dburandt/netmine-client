import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
import './App.css';

const { Header, Content, Footer, Sider } = Layout;

class App extends Component {
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
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">
              <Icon type="user" />
              <span className="nav-text">nav 1</span>
            </Menu.Item>
          </Menu>
        </Sider>
      </Layout>
    );
  }
}

export default App;
