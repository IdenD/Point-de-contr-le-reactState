import {Container, Row, Col} from 'react-bootstrap';


export default function ProfilCard ({fullName, bio, imgSrc, profession}) {
    return (
        <Container>
            <Row>
                <Col>
                    <Row style={{height: "90vh"}}className='d-flex justify-content-center align-items-center'>
                        <Col lg={3}>
                            
                            <div style={{textAlign: "center",
                                padding: "40px 10px"
                            }}>
                                 <img src={imgSrc} alt={fullName}  
                                 style={{borderRadius: "100%",
                                    width: 200,
                                    height: 200,

                                 }}/>
                            </div>

                           
                        </Col>
                        <Col lg={8} style={{border: '1px solid #c353b48',
                                            borderRadius: '10px',
                                            backgroundColor : '#f5f6fa'
                        }}>
                            <div>
                                <h2>{fullName}</h2>
                                <h3>{profession}</h3>
                                <p>{bio}</p>
                            </div>

                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}

