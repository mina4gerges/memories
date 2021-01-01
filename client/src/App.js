import React, {useEffect} from 'react';
import {Layout, Typography, Row, Col} from 'antd';
import {useDispatch} from 'react-redux';

import {getPosts} from './actions/posts';
import {setIsLoading} from "./actions/loading";
import memories from './images/memories.jpg';
import Posts from "./components/Posts/Posts";

import FormComp from "./components/Form/FormComp";
import 'antd/dist/antd.css';
import './style.css';

const {Title} = Typography;
const {Header, Content, Footer} = Layout;

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setIsLoading(true));
        dispatch(getPosts())
    }, [dispatch])

    return (
        <Layout style={{minHeight: '100vh'}}>
            <Layout className="site-layout">
                <Content style={{margin: '15px'}}>
                    <div className="site-layout-background" style={{padding: 24, minHeight: 360}}>
                        <Header className='app-bar'>
                            <Title level={2} className='heading'>
                                Memories
                                {/*<img src={memories} alt='memories' height='40' className='image'/>*/}
                            </Title>
                        </Header>
                        <Row>
                            <Col flex={2}>
                                <Posts/>
                            </Col>
                            <Col flex={1}>
                                <FormComp/>
                            </Col>
                        </Row>
                    </div>
                </Content>
                <Footer style={{textAlign: 'center'}}>
                    Mina Gerges ©2020
                </Footer>
            </Layout>
        </Layout>
    );
}

export default App;
