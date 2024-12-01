import Sidebar from '@/components/admin/Sidebar';
import Create from '@/components/admin/subcategory/Create';
import React from 'react';

const Page = () => {
  return (
    <div className='admin'>
        <Sidebar />
        <Create />
    </div>
  )
}

export default Page