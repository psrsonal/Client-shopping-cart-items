import Layout from "./Layout"
import React from 'react'
import { Form, Input, Button} from 'antd'

const signin = () => {
  return <Layout title="登录" subTitle="2">
    <Form>
        <Form.Item name="password" label="密码">
            <Input.Password />
        </Form.Item>
        <Form.Item name="email" label="邮箱">
            <Input />
        </Form.Item>
        <Form.Item name="email" label="邮箱">
            <Button type="primary" htmlType="submit">
                登录
            </Button>
        </Form.Item>
    </Form>
</Layout>
}

export default signin