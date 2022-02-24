import React from 'react'
import { useSelector } from 'react-redux'
import Layout from './Layout'

const Home = () => {
  const state = useSelector(state => state)
  return <Layout title="学习商城" subTitle="一起快乐学习">
    Home {JSON.stringify(state)}
  </Layout>
}

export default Home