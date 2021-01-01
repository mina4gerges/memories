import {Skeleton, Card, Image} from 'antd';
import {EditOutlined, EllipsisOutlined, DeleteFilled} from '@ant-design/icons';

const {Meta} = Card;

const CardComponent = ({title, description, loading, image, onIconClick}) => {
    return (
        <Card hoverable
              style={{width: 300, marginTop: 16}}
              actions={[
                  <EditOutlined key="edit"/>,
                  <DeleteFilled key="delete" onClick={onIconClick ? onIconClick('delete') : null}/>,
                  <EllipsisOutlined key="ellipsis"/>,
              ]}
        >
            <Skeleton loading={loading} avatar active>
                <Meta
                    avatar={
                        <Image width={100} height={100} src={image}/>
                    }
                    title={title}
                    description={description}
                />
            </Skeleton>
        </Card>
    )
}

export default CardComponent;

