import { FC, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { Layout, Menu } from 'antd';
import { AppstoreOutlined } from '@ant-design/icons';
import { AntDesignOutlined } from '@ant-design/icons/lib/icons';
import classNames from 'classnames';

import { ROUTE_URL } from 'constant';
import MenuIcon from 'resources/svg/MenuIcon';

const { Sider } = Layout;

type SiderType = {};

const PrivateSider: FC<SiderType> = () => {
  const location = useLocation();

  const [collapsed, setCollapsed] = useState(false);
  const [openKeys, setOpenKeys] = useState<string[]>([]);
  const [selectedKeys, setSelectedKeys] = useState<string[]>([]);

  const handleToggleCollapse = () => setCollapsed((collapse) => !collapse);

  const SIDE_BAR_ITEMS = [
    {
      key: ROUTE_URL.DASHBOARD,
      label: <Link to={ROUTE_URL.DASHBOARD}>Dashboard</Link>,
      icon: <AppstoreOutlined />,
      children: [],
    },
    {
      key: '',
      icon: <AppstoreOutlined />,
      label: <Link to={ROUTE_URL.LOGIN}>Item</Link>,
    },
  ];

  useEffect(() => {
    for (const { key: parentKey, children } of SIDE_BAR_ITEMS) {
      if (parentKey === location.pathname) {
        setOpenKeys([]);
        setSelectedKeys([parentKey]);
        break;
      }

      if (children && children.length > 0) {
        for (const { key } of children) {
          if (key === location.pathname) {
            setOpenKeys([parentKey]);
            setSelectedKeys([key]);
            break;
          }
        }
      }
    }
  }, [location.pathname]);

  return (
    <Sider className='app-sider' width={236} collapsible collapsed={collapsed}>
      <div
        className={classNames('app-sider__top', {
          'justify-content-center': collapsed,
          'justify-content-between': !collapsed,
        })}
      >
        {!collapsed && <AntDesignOutlined />}
        <MenuIcon onClick={handleToggleCollapse} height={40} width={40} />
      </div>
      <Menu
        className='app-sider__menu'
        mode='inline'
        items={SIDE_BAR_ITEMS}
        openKeys={openKeys}
        selectedKeys={selectedKeys}
        onOpenChange={setOpenKeys}
      />
    </Sider>
  );
};

export default PrivateSider;
