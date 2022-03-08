import React from 'react'
import { useSelector } from 'react-redux'
import Layout from './Layout'
import Search from './Search'

const Home = () => {
  return <Layout title="学习商城" subTitle="一起快乐学习">
    <Search />
  </Layout>
}

export default Home