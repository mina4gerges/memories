import moment from 'moment';
import {Skeleton, Card, Image} from 'antd';
import {EditFilled, DeleteFilled, LikeFilled} from '@ant-design/icons';

const {Meta} = Card;

const CardComponent = ({title, description, loading, image, createdAt, onIconClick}) => {

    return (
        <Card hoverable
              title={title}
              style={{width: 300, marginTop: 16}}
              actions={[
                  <LikeFilled key="like"/>,
                  <EditFilled key="edit" onClick={onIconClick ? onIconClick('edit') : null}/>,
                  <DeleteFilled key="delete" onClick={onIconClick ? onIconClick('delete') : null}/>,
              ]}
        >
            <Skeleton loading={loading} avatar active>
                <Meta
                    avatar={
                        <Image width={100} height={100} src={image}/>
                    }
                    description={description}
                    title={moment(createdAt).fromNow()}
                />
            </Skeleton>
        </Card>
    )
}

export default CardComponent;

