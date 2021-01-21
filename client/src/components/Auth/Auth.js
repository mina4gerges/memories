import React, {useState} from 'react';
import {Card, Form, Input, Button, Checkbox} from "antd";
import {GoogleLogin} from 'react-google-login';
import {useDispatch} from "react-redux";
import {useHistory} from 'react-router-dom';
import Icon from "./icon";
import {AUTH} from "../../constants/actionTypes";
// import {GOOGLE_CLIENT_ID_EXAMPLE} from "../../constants/secretes-exemple";
import {GOOGLE_CLIENT_ID} from "../../constants/secretes";

import './styles.css';
import {signIn, signUp} from "../../actions/auth";

const layout = {
    labelCol: {span: 8},
    wrapperCol: {span: 16},
};

const tailLayout = {
    wrapperCol: {offset: 8, span: 16},
};

const initialState = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    repeatPassword: '',
    remember: '',
}

const Auth = () => {

    const dispatch = useDispatch();

    const history = useHistory();

    const [formData, setFormData] = useState(initialState);
    const [isSignUp, setIsSignUp] = useState(false);

    const onFinish = values => {

        const newFormData = {...formData, ...values};

        if (isSignUp)
            dispatch(signUp(newFormData, history));
        else
            dispatch(signIn(newFormData, history));

        setFormData(newFormData);


    };

    const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };

    const switchMode = () => {
        setIsSignUp(prevIsSignUp => !prevIsSignUp);
    }

    const googleSuccess = async (res) => {

        const result = res?.profileObj;
        const token = res?.tokenId;

        try {
            dispatch({type: AUTH, data: {result, token}});
            history.push('/');
        } catch (e) {
            console.log('error ', e)
        }
    }

    const googleFailure = (e) => {
        console.log('googleFailure ', e)
    }

    return (
        <div className='auth-main'>
            <Card title='Welcome' className='auth-card'>
                <Form
                    {...layout}
                    name="basic"
                    initialValues={{remember: true}}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                >

                    {isSignUp &&
                    <>
                        <Form.Item
                            label="Name"
                            name="firstName"
                            rules={[{required: true, message: 'Please input your first name!'}]}
                        >
                            <Input
                                placeholder='Name'
                                autoFocus={isSignUp}
                            />
                        </Form.Item>

                        <Form.Item
                            label="Last Name"
                            name="lastName"
                            rules={[{required: true, message: 'Please input your last name!'}]}
                        >
                            <Input
                                placeholder='Last Name'
                            />
                        </Form.Item>
                    </>
                    }

                    <Form.Item
                        label="Email"
                        name="email"
                        rules={[{required: true, message: 'Please input your email!'}]}
                    >
                        <Input
                            type='email'
                            placeholder='Email'
                            autoFocus={!isSignUp}
                        />
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[{required: true, message: 'Please input your password!'}]}
                    >
                        <Input.Password
                            placeholder='Password'
                        />
                    </Form.Item>

                    {isSignUp &&
                    <Form.Item
                        label="Repeat Password"
                        name="repeatPassword"
                        rules={[{required: true, message: 'Please input your repeat password!'}]}
                    >
                        <Input.Password
                            placeholder='Repeat Password'
                        />
                    </Form.Item>
                    }

                    <Form.Item {...tailLayout} name="remember" valuePropName="checked">
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>

                    <Form.Item {...tailLayout}>
                        <Button type="primary" htmlType="submit">
                            {isSignUp ? 'Sign Up' : 'Sign In'}
                        </Button>
                    </Form.Item>

                    <Form.Item {...tailLayout}>
                        <GoogleLogin
                            clientId={GOOGLE_CLIENT_ID}
                            render={renderProps => (
                                <Button
                                    type='default'
                                    icon={<Icon/>}
                                    onClick={renderProps.onClick}
                                    disabled={renderProps.disabled}>
                                    &nbsp;&nbsp;Sign in with GOOGLE
                                </Button>
                            )}
                            onSuccess={googleSuccess}
                            onFailure={googleFailure}
                            cookiePolicy={'single_host_origin'}
                        />
                    </Form.Item>

                    <Button type="link" onClick={switchMode}>
                        {
                            isSignUp
                                ? 'Already have an account ? Sign In'
                                : 'Don\'t have an account ? Sign Up'
                        }
                    </Button>
                </Form>
            </Card>
        </div>
    )
}
export default Auth
