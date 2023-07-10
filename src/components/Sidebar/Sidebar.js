import React, { useEffect, useRef, useState } from 'react';
import Logo from '../../assets/images/logo.jpg';
import { Link, useLocation } from 'react-router-dom';
import { Game } from '../../assets/images/Game';
import { Category } from '../../assets/images/Category';
import { LocationImg } from '../../assets/images/Location';
import { Ticket_star } from '../../assets/images/Ticket_star';
import { NAV_BLUE } from '../../utils/Constant';

const sidebarNavItems = [
  {
    display: 'Dashboard',
    imgSrc: Category,
    to: '/',
    section: ''
  },
  {
    display: 'Trainings',
    imgSrc: Game,
    to: '/trainings',
    section: 'trainings'
  },
  {
    display: 'Users',
    imgSrc: Ticket_star,
    to: '/users',
    section: 'users'
  },
  {
    display: 'Analytics',
    imgSrc: LocationImg,
    to: '/analytics',
    section: 'analytics'
  },
  {
    display: 'My Account',
    imgSrc: LocationImg,
    to: '/my-account',
    section: 'my-account'
  },
  {
    display: 'support',
    imgSrc: LocationImg,
    to: '/support',
    section: 'support'
  }
];

function Sidebar() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [stepHeight, setStepHeight] = useState(0);
  const sidebarRef = useRef();
  const indicatorRef = useRef();
  const location = useLocation();

  useEffect(() => {
    setTimeout(() => {
      const sidebarItem = sidebarRef.current.querySelector('.sidebar__menu__item');
      indicatorRef.current.style.height = `${sidebarItem.clientHeight}px`;
      setStepHeight(sidebarItem.clientHeight);
    }, 50);
  }, []);

  // change active index
  useEffect(() => {
    const curPath = window.location.pathname.split('/')[1];
    const activeItem = sidebarNavItems.findIndex((item) => item.section === curPath);
    setActiveIndex(curPath.length === 0 ? 0 : activeItem);
  }, [location]);

  return (
    <div className="d-flex flex-column sidebar">
      <div className="d-flex align-items-center justify-content-center">
        {/* image box */}
        <div className="d-flex justify-content-center py-4 logo-container">
          <div
            style={{ width: '60%' }}
            className="d-flex align-items-center justify-content-center">
            <img
              src={Logo}
              style={{
                width: '100%',
                objectFit: 'cover',
                objectPosition: 'bottom'
              }}
              alt="logo"
            />
          </div>
        </div>
      </div>
      <div ref={sidebarRef} className="menu mt-4">
        <div
          ref={indicatorRef}
          className="indicator"
          style={{
            transform: `translateX(-50%) translateY(${activeIndex * stepHeight + 6}px)`
          }}></div>
        {sidebarNavItems.map((item, index) => (
          <Link to={item.to} key={index}>
            <div className={`sidebar__menu__item ${activeIndex === index ? 'active' : ''}`}>
              <div className="icon">
                <item.imgSrc color={activeIndex === index ? 'white' : NAV_BLUE} />
              </div>
              <div className="text typography__one">{item.display}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
