import React from "react";

import {Col, Layout, Row} from "antd";

import Posts from "../Posts/Posts";
import FormComp from "../Form/FormComp";

const {Content} = Layout;

const Home = () => {

    return (
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
    )

}

export default Home;
