import React from 'react';

export const RightSidebar = ({ children }) => {
  return (
    <aside className="right-sidebar">
      <h3>Right Sidebar</h3>
      {children}
    </aside>
  );
};
