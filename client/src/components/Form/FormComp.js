import React, {useState} from 'react';

import {Form, Input, Button} from 'antd';
import {UserOutlined} from '@ant-design/icons';
import FileBase from 'react-file-base64';
import {useDispatch} from "react-redux";
import {createPost} from "../../actions/posts";

const {TextArea} = Input;
const {Item, useForm} = Form;

const FormComp = () => {

    const dispatch = useDispatch();

    const [form] = useForm();
    const [requiredMark, setRequiredMarkType] = useState(true);

    const [postData, setPostData] = useState({
        tags: '',
        title: '',
        creator: '',
        message: '',
        selectedFile: '',
    });

    const onRequiredTypeChange = ({requiredMark}) => {
        setRequiredMarkType(requiredMark);
    };

    const handleSubmit = e => {
        e.preventDefault();

        dispatch(createPost(postData));

        handleClear(e);
    }

    const handleClear = e => {
        e.preventDefault();

        setPostData({
            tags: '',
            title: '',
            creator: '',
            message: '',
            selectedFile: '',
        })
    }

    return (
        <Form form={form}
              layout="vertical"
              requiredMark={requiredMark}
              initialValues={{requiredMark}}
              onValuesChange={onRequiredTypeChange}>

            <Item required
                  label="Title"
                  tooltip="This is a required field"
                  rules={[{required: true, message: 'Please enter the Title!'}]}>
                <Input allowClear
                       placeholder="Title"
                       value={postData.title}
                       prefix={<UserOutlined/>}
                       onChange={({target: {value}}) => setPostData({...postData, title: value})}
                />
            </Item>

            <Item required
                  label="Creator"
                  tooltip="This is a required field"
                  rules={[{required: true, message: 'Please enter the Creator!'}]}>
                <TextArea placeholder="Creator"
                          value={postData.creator}
                          autoSize={{minRows: 3, maxRows: 5}}
                          onChange={({target: {value}}) => setPostData({...postData, creator: value})}
                />
            </Item>

            <Item required
                  label="Message"
                  tooltip="This is a required field"
                  rules={[{required: true, message: 'Please enter the Message!'}]}>
                <TextArea placeholder="Message"
                          value={postData.message}
                          autoSize={{minRows: 3, maxRows: 5}}
                          onChange={({target: {value}}) => setPostData({...postData, message: value})}
                />
            </Item>

            <Item required
                  label="Tags"
                  tooltip="This is a required field"
                  rules={[{required: true, message: 'Please enter the Tags!'}]}>
                <TextArea placeholder="Tags"
                          value={postData.tags}
                          autoSize={{minRows: 3, maxRows: 5}}
                          onChange={({target: {value}}) => setPostData({...postData, tags: value})}
                />
            </Item>

            <Item required
                  label="File"
                  tooltip="This is a required field"
                  rules={[{required: true, message: 'Please enter the File!'}]}>
                <FileBase type='file'
                          multiple={false}
                          onDone={({base64}) => setPostData({...postData, selectedFile: base64})}/>
            </Item>

            <Item>
                <Button type="primary" htmlType="submit" block={true} size="large" onClick={handleSubmit}>
                    Submit
                </Button>
            </Item>

            <Item>
                <Button type="secondary" htmlType="reset" danger={true} block={true} onClick={handleClear}>
                    Clear
                </Button>
            </Item>
        </Form>
    )
}

export default FormComp;
