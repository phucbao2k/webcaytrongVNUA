import React, { Component } from 'react';
import { connect } from 'react-redux';
import './MedicalFacility.scss';
import { FormattedMessage } from 'react-intl';
import Slider from "react-slick";
import {getAllClinic} from '../../../services/userService';
import {withRouter} from 'react-router';
class MedicalFacility extends Component {
    constructor(props){
        super(props);
        this.state={
            dataClinics: []
        }
    }
    async componentDidMount(){
        let res = await getAllClinic();
        if(res && res.errCode === 0){
            this.setState({
                dataClinics: res.data ? res.data : []
            })
        }
    }
    handleViewDetailClinic = (clinic) => {
        if(this.props.history){
            this.props.history.push(`/detail-clinic/${clinic.id}`)
        }
    }

    render() {
        // let settings ={
        //     dots: false,
        //     isFinite: true,
        //     speed: 500,
        //     slidesToShow:4,
        //     slidesToScroll:1
        // };
        // trên đây là setting cho Slider
        // 
        let {dataClinics} = this.state;
        return (
            <div className="section-share section-medical-facility">
                <div className="section-container">
                    <div className="section-header">
                        <span className="title-section"><FormattedMessage id="homeheader.health-facility" /></span>
                        <button className="btn-section"><FormattedMessage id="carousel.carousel-2" /></button>
                    </div>
                    <div className="section-body">
                        {/* Dưới đây là cách bọc các ảnh, chữ thành 1 slide lớn, nằm ngang */}
                        <Slider {...this.props.settings}>
                          {dataClinics && dataClinics.length>0
                          && dataClinics.map((item, index)=> {
                            return(
                                <div className="section-customize clinic-child" key={index}></div>
                            )
                          })}
                        </Slider>
                    </div>

                </div>
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language,
    };
};

const mapDispatchToProps = dispatch => {
    return {

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MedicalFacility);