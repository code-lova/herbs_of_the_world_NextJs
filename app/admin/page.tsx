import Admin from '@/components/admin/Admin'
import Sidebar from '@/components/admin/Sidebar'

import React from 'react'

const Page = () => {
  return (
    <div className='admin'>
      <Sidebar />
      <Admin />
    </div>
  )
}

export default Page