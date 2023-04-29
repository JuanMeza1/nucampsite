import {card, Cardimg, CardBody, Col} from 'bootstrap-4-react';



const CampsiteDetail = ( {campsite} ) => {
    const { image, name, description } = campsite;

    return (
        <Col md='12' className='m-4'>
            <Card>
                <CardImg top src={image} alt={name} />
                <CardBody>
                    <CardText>{description}</CardText>
                </CardBody>
            </Card>
        </Col>
    );
};

export default CampsiteDetail;