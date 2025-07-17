import React, { useState, useEffect } from 'react';
import { Button, Menu, Typography, Avatar, Drawer } from 'antd';
import { Link } from 'react-router-dom';
import { 
  HomeOutlined, 
  MoneyCollectOutlined, 
  BulbOutlined, 
  FundOutlined, 
  MenuOutlined,
  CloseOutlined 
} from "@ant-design/icons";
import icon from '../images/cryptocurrency.png';

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [screenSize, setScreenSize] = useState(null);
  const [drawerVisible, setDrawerVisible] = useState(false);

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (screenSize < 768) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);

  const menuItems = [
    {
      key: 'home',
      icon: <HomeOutlined />,
      label: <Link to="/">Home</Link>,
    },
    {
      key: 'cryptocurrencies',
      icon: <FundOutlined />,
      label: <Link to="/cryptocurrencies">Cryptocurrencies</Link>,
    },
    {
      key: 'exchanges',
      icon: <MoneyCollectOutlined />,
      label: <Link to="/exchanges">Exchanges</Link>,
    },
    {
      key: 'news',
      icon: <BulbOutlined />,
      label: <Link to="/news">News</Link>,
    },
  ];

  return (
    <div className="nav-container">
      <div className="logo-container">
        <Avatar src={icon} size="large" />
        <Typography.Title level={2} className="logo">
          <Link to="/">BitBlend</Link>
        </Typography.Title>
        <Typography.Text className="logo-subtext">CRYPTO HUB</Typography.Text>
        {!activeMenu && (
          <Button 
            className="menu-control-container"
            icon={<MenuOutlined />}
            onClick={() => setDrawerVisible(true)}
          />
        )}
      </div>

      {activeMenu && (
        <Menu 
          theme="dark" 
          items={menuItems} 
          className="cyber-menu"
        />
      )}

      {/* Mobile Drawer */}
      <Drawer
        title={
          <div className="drawer-header">
            <Avatar src={icon} size="large" />
            <Typography.Title level={4} className="logo" style={{ marginLeft: 10 }}>
              BitBlend
            </Typography.Title>
          </div>
        }
        placement="left"
        closable={true}
        onClose={() => setDrawerVisible(false)}
        visible={drawerVisible}
        closeIcon={<CloseOutlined style={{ color: '#00ff9d' }} />}
        headerStyle={{ 
          background: 'rgba(10, 10, 20, 0.9)',
          borderBottom: '1px solid #00ff9d'
        }}
        bodyStyle={{ 
          background: 'rgba(10, 10, 20, 0.8)',
          padding: 0
        }}
        drawerStyle={{
          background: 'rgba(10, 10, 20, 0.9)',
        }}
      >
        <Menu 
          theme="dark" 
          items={menuItems} 
          mode="vertical"
          className="cyber-menu-mobile"
          onClick={() => setDrawerVisible(false)}
        />
      </Drawer>
    </div>
  );
};



export default Navbar;