import Layout from './Layout'
import React from 'react'
import { Form, Input, Button} from 'antd'
import { signup, SignupPayload } from '../../store/actions/auth.actions'
import { useDispatch } from 'react-redux'

const Signup = () => {
    // 获取 dispatch 方法
    const dispatch = useDispatch()
    // 注册表单提交
    const onFinish = (value: SignupPayload) => {
        // 发送注册请求
        dispatch(signup(value))
    }

    // 1. 注册成功 清空表单
    // 2. 注册成功 显示成功的提示信息
    // 3. 注册失败 显示失败的提示信息
    // 4. 离开页面之前 重置状态

    return (
        <Layout title="注册" subTitle="1">
            <Form onFinish={onFinish}>
                <Form.Item name="name" label="昵称">
                    <Input />
                </Form.Item>
                <Form.Item name="password" label="密码">
                    <Input.Password />
                </Form.Item>
                <Form.Item name="email" label="邮箱">
                    <Input />
                </Form.Item>
                <Form.Item name="email" label="邮箱">
                    <Button type="primary" htmlType="submit">
                        注册
                    </Button>
                </Form.Item>
            </Form>
        </Layout>
    )
}

export default Signup