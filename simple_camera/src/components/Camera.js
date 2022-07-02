import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import ImagePlaceHolder from '../assets/images/placeholder.png';
import {FaCamera, FaFolder} from 'react-icons/fa';
import Webcam from "react-webcam";

class Camera extends Component {

    constructor(props){
        super(props);
        this.cameraRef = React.createRef();
        this.state = {
            capturedPhoto: ImagePlaceHolder,
        };
    }

    onCapture =()=>{
        let capPhotoBase64 = this.cameraRef.current.getScreenshot();
        this.setState({capturedPhoto: capPhotoBase64});
    }

    onSave =()=>{
        let anchor  = document.createElement("a");
        anchor.href = this.state.capturedPhoto;
        anchor.download = "MyPhoto.jpeg";
        anchor.click();
    }

    render() {
        return (
            <Fragment>
                <Container>
                    <Row>
                        <Col className="p-2" md={6} sm={12} lg={6}>
                            <Webcam screenshotFormat={"image/jpeg"} ref={this.cameraRef } className="image-preview w-100" audio={false}/>
                            <button onClick={this.onCapture} className="btn-align btn mt-3 btn-primary"><FaCamera/>Capture</button>
                        </Col>

                        <Col className="p-2" md={6} sm={12} lg={6}>
                            <img className="image image-preview w-100" src={this.state.capturedPhoto}/>
                            <button onClick={this.onSave} className="btn-align btn mt-3 btn-primary"><FaFolder/>Save</button>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default Camera;