import { Card } from 'antd'
import logo from '@/assets/logo.png'
import './index.scss'

import { Form, Input, Button, Checkbox } from 'antd'



function Login () {
  return (
    <div className='login'>
      <Card className='login-container'>
        <img className='login-logo' src={logo} alt="" />
        <Form>
          <Form.Item>
            <Input size="large" placeholder="请输入手机号"></Input>
          </Form.Item>
          <Form.Item>
            <Input size="large" placeholder="请输入验证码"></Input>
          </Form.Item>
          <Form.Item>
            <Checkbox className="login-checkbox-label">
              我已阅读并同意「用户协议」和「隐私条款」
            </Checkbox>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              登陆
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  )
}

export default Login