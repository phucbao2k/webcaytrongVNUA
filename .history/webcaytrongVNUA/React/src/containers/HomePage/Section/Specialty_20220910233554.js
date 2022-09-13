import React, { Component } from 'react';
import {connect} from 'react-redux';
import './Specialty.scss';
import {FormattedMessage} from 'react-intl';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
class Specialty extends Component{
    render(){
        let settings ={
            dots: false,
            isFinite: true,
            speed: 500,
            slidesToShow:4,
            slidesToScroll:1
        };
        return(
            <div className="section-specialty">
                <div  className="specialty-container">
                    <div className="specialty-header">
                        <span className="title-section">Chuyên khoa phổ biến</span>
                        <button className="btn-section">Xem thêm</button>
                    </div>
                    <div className="specialty-body">
                    <Slider {...settings}>
                        <div className="img-customize">
                            <h3>1</h3>
                        </div>
                        <div className="img-customize">
                            <h3>2</h3>
                        </div>
                        <div className="img-customize">
                            <h3>3</h3>
                        </div>
                        <div className="img-customize">
                            <h3>4</h3>
                        </div>
                        <div className="img-customize">
                            <h3>5</h3>
                        </div>
                        <div className="img-customize">
                            <h3>6</h3>
                        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Specialty);