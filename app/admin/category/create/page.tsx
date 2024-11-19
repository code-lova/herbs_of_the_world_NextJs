import CreateCategory from '@/components/admin/category/CreateCategory'
import Sidebar from '@/components/admin/Sidebar'
import React from 'react'

const Page = () => {
  return (
    <div>
        <Sidebar />
        <CreateCategory />
    </div>
  )
}

export default Page