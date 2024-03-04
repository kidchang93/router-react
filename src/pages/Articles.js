import React from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';

const Articles = () => {
  const activeStyle = { color: 'green', fontSize: 21 };
  return (
    <div>
      <Outlet />
      <NavLink to='/articles/1' style={({isActive}) => (isActive ? activeStyle : undefined)}>게시글 1</NavLink>
      <NavLink to='/articles/2' style={({ isActive }) => (isActive ? activeStyle : undefined)}>게시글 2</NavLink>
      <NavLink to='/articles/3' style={({isActive}) => (isActive ? activeStyle : undefined)}>게시글 3</NavLink>
      {/* <Link to='/articles/1'>게시글1</Link> |
      <Link to='/articles/2'>게시글2</Link> |
      <Link to='/articles/3'>게시글3</Link> */}
    </div>
  );
};

export default Articles;