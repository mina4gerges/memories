import React, {useEffect} from 'react';
import {Layout, Typography, Row, Col} from 'antd';
import {useDispatch} from 'react-redux';

import {getPosts} from './actions/posts';
import {setIsLoading} from "./actions/loading";
// import memories from './images/memories.jpg';
import Posts from "./components/Posts/Posts";

import FormComp from "./components/Form/FormComp";
import 'antd/dist/antd.css';

const {Title} = Typography;
const {Header, Content} = Layout;

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setIsLoading(true));
        dispatch(getPosts())
    }, [dispatch])

    return (
        <Layout className='app-layout'>
            <Header className='app-bar'>
                <Title level={2} className='heading'>
                    Memories
                    {/*<img src={memories} alt='memories' height='40' className='image'/>*/}
                </Title>
            </Header>
            <Content>
                <Row>
                    <Col flex={2}>
                        <Posts/>
                    </Col>
                    <Col flex={1}>
                        <div className='form-component'>
                            <FormComp/>
                        </div>
                    </Col>
                </Row>
            </Content>
        </Layout>
    )
}

export default App;
