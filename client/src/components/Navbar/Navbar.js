import React, {useEffect, useState} from "react";
import {Link, useHistory, useLocation} from 'react-router-dom';
import {Typography, Button, Layout, Avatar, Image} from "antd";
import {LOGOUT} from "../../constants/actionTypes";
import {useDispatch} from "react-redux";

import './styles.css';

const {Title, Text} = Typography;
const {Header} = Layout;

const Navbar = () => {

    const dispatch = useDispatch();

    const history = useHistory();

    const location = useLocation();

    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));

    useEffect(() => {

        setUser(JSON.parse(localStorage.getItem('profile')));

    }, [location])

    const logout = () => {
        dispatch({type: LOGOUT})

        setUser(null);

        history.push('/auth');
    }

    return (
        <Header className='app-bar navbar-main'>
            <Title level={2} className='heading'>
                Memories
            </Title>
            <div className='navbar-button'>
                {user ? (
                    <>
                        <Text>
                            <Text style={{textTransform: 'capitalize'}}>
                                {user?.result?.name}
                            </Text>
                            <Text>
                                ({user?.result?.email})
                            </Text>
                        </Text>
                        {' '}
                        <Avatar
                            alt={user?.result?.name?.charAt(0)}
                            src={<Image src={user?.result?.imageUrl} alt={user?.result?.name?.charAt(0)}/>}
                        />
                        {' '}
                        <Button type='danger' onClick={logout}>
                            Logout
                        </Button>
                    </>
                ) : (
                    <Button type='primary'>
                        <Link to='/auth'>Login</Link>
                    </Button>
                )}
            </div>
        </Header>
    )
}

export default Navbar
