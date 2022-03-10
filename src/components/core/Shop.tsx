import { Col, Row, Space } from 'antd'
import React, { useState } from 'react'
import Checkbox from './Checkbox'
import Layout from './Layout'
import RadioBox from './RadioBox'

const Shop = () => {
    const [myFilters, setMyFilter] = useState<{
        category: string[]
        price: number[]
    }>({ category: [], price: [] })

    const filterDOM = () => <>
      <Space size="middle" direction="vertical">
        <Checkbox />
        <RadioBox />
      </Space>
    </>
    return (
        <Layout title="学习商城" subTitle="有选择的学习">
            <Row>
                <Col span="4">{filterDOM()}</Col>
                <Col span="20">right</Col>
            </Row>
        </Layout>
    )
}

export default Shop