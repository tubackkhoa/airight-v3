import { Button, Drawer } from 'antd';
import { useState } from 'react';

import CloseDrawerIcon from 'resources/svg/CloseIcon';
import MenuIcon from 'resources/svg/MenuIcon';

import { Link } from 'react-router-dom';
import { menuList } from 'routes';

const MenuDrawer: React.FC = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => setOpen((open) => !open);

  console.log('open', open);

  return (
    <div className='drawer'>
      <div className='header'>
          <Button className='menu-btn' htmlType='button' onClick={toggleDrawer}>
            {open ? <CloseDrawerIcon /> : <MenuIcon />}
          </Button>
      </div>
      {open && 
        <div className='menu'>
          {menuList.map((item) => {
            return (
              <Link to={item.link} key={item.key} className='menu-item'>
                <span>{item.text}</span>
              </Link>
            );
          })}
        </div>}
    </div>
  );
};

export default MenuDrawer;
