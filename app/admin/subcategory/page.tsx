import Sidebar from '@/components/admin/Sidebar';
import SubCategory from '@/components/admin/subcategory';
import React from 'react';

const Page = () => {
  return (
    <div className='admin'>
      <Sidebar />
      <SubCategory />
    </div>
  )
}

export default Page