import React from 'react'
import Ban from '../../components/blog/ban/Ban'
import Cata from '../../components/blog/catag/Cata'
import './blog.css'

const Blog = () => {
  return (
    <>
        <Ban/>
        <div className="container cata_container">
            <Cata/>
        </div>
    </>
  )
}

export default Blog