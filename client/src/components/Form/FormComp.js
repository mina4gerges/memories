import React, {useState} from 'react';

import {Form, Input, Button} from 'antd';
import {UserOutlined} from '@ant-design/icons';
import FileBase from 'react-file-base64';

const {TextArea} = Input;
const {Item, useForm} = Form;

const FormComp = () => {

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

    return (
        <Form form={form}
              layout="vertical"
              requiredMark={requiredMark}
              initialValues={{requiredMark}}
              onValuesChange={onRequiredTypeChange}>

            <Item required
                  label="Title"
                  tooltip="This is a required field"
                  rules={[{required: true, message: 'Please input your username!'}]}
            >
                <Input allowClear
                       placeholder="Title"
                       value={postData.title}
                       prefix={<UserOutlined/>}
                       onChange={({target: {value}}) => setPostData({...postData, title: value})}
                />
            </Item>

            <Item required
                  label="Creator"
                  tooltip="This is a required field">
                <TextArea placeholder="Creator"
                          value={postData.creator}
                          autoSize={{minRows: 3, maxRows: 5}}
                          onChange={({target: {value}}) => setPostData({...postData, creator: value})}
                />
            </Item>

            <Item required
                  label="Message"
                  tooltip="This is a required field">
                <TextArea placeholder="Message"
                          value={postData.message}
                          autoSize={{minRows: 3, maxRows: 5}}
                          onChange={({target: {value}}) => setPostData({...postData, message: value})}
                />
            </Item>

            <Item required
                  label="Tags"
                  tooltip="This is a required field">
                <TextArea placeholder="Tags"
                          value={postData.tags}
                          autoSize={{minRows: 3, maxRows: 5}}
                          onChange={({target: {value}}) => setPostData({...postData, tags: value})}
                />
            </Item>

            <Item required
                  label="File"
                  tooltip="This is a required field">
                <FileBase type='file'
                          multiple={false}
                          onDone={({base64}) => setPostData({...postData, selectedFile: base64})}/>
            </Item>

            <Item>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
                {" "}
                <Button type="secondary" htmlType="clear">
                    Clear
                </Button>
            </Item>
        </Form>
    )
}

export default FormComp;
