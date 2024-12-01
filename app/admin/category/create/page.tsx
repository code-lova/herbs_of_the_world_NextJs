import Create from '@/components/admin/category/Create'
import Sidebar from '@/components/admin/Sidebar'
import React from 'react'

const Page = () => {
  return (
    <div className='admin'>
        <Sidebar />
        <Create />
    </div>
  )
}

export default Page