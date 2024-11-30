import Sidebar from '@/components/admin/Sidebar'
import CreateSubCategory from '@/components/admin/subcategory'
import React from 'react'

const Page = () => {
  return (
    <div className='admin'>
      <Sidebar />
      <CreateSubCategory />
    </div>
  )
}

export default Page