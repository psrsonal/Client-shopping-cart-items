import React from 'react'
import { useSelector } from 'react-redux'
import Layout from './Layout'

const Shop = () => {
    const state = useSelector(state => state)
    return <Layout title="学习商城" subTitle="有选择的学习">Shop {JSON.stringify(state)}</Layout>
}

export default Shop