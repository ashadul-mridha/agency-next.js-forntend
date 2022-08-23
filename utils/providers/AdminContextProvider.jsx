import React, { createContext, useState } from 'react';

export const AdminContext = createContext();

const AdminContextProvider = ({children}) => {

    console.log('Admin Context Children',children);

  const [showSideBar, setShowSideBar] = useState(true);

    return (
      <AdminContext.Provider value={{ showSideBar, setShowSideBar }}>
        {children}
      </AdminContext.Provider>
    );
};

export default AdminContextProvider;