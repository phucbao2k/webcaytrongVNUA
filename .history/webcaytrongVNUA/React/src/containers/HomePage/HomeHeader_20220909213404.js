import React, { Component} from 'react';
import {connect} from 'react-redux';
import './HomeHeader.scss';

import {FormattedMessage} from 'react-intl';
class HomeHeader extends Component {
    render(){
        return (
            <React.Fragment>
  <div className="home-header-container">
                <div className="home-header-content">
                    <div className="left-content">
                    <i className="fa-solid fa-bars-staggered"></i>
                   
                    <div className="header-logo"></div>
                    </div>
                    <div className="center-content">
                        <div className="child-content">
                            <div><b><FormattedMessage id="homeheader.speciality"/></b></div>
                            <div className="sub-title"> <FormattedMessage id="homeheader.searchdoctor"/></div>
                        </div>
                        <div className="child-content">
                            <div><b> <FormattedMessage id="homeheader.searchdoctor"/></b></div>
                            <div className="sub-title"> health-facility </div>
                        </div>
                        <div className="child-content">
                            <div><b>Kỹ sư</b></div>
                            <div className="sub-title"> Chọn kỹ sư giỏi </div>
                        </div>
                        <div className="child-content">
                            <div><b>Gói khám</b></div>
                            <div className="sub-title">Khám toàn diện cho cây trồng</div>
                        </div>

                    </div>
                    <div className="right-content">
                        <div className="support"><i className="fa-solid fa-circle-question"></i>Hỗ trợ</div>
                        <div className="flag">VN</div>
                    </div>
                </div>
            </div>
            <div className="home-header-banner">
                <div className="content-up">
                <div className="title1">NỀN TẢNG Y TẾ</div>
                <div className="title2">CHĂM SÓC CÂY TRỒNG TOÀN DIỆN</div>
                <div className="search"><i className="fa-solid fa-magnifying-glass"></i>
                <input type="text" placeholder='Tìm kiếm loại cây trồng...'></input></div>
                </div>
               <div className="content-down">
               <div className="options">
                <div className="option-child">
                    <div className="icon-child"><i className="fa-solid fa-tree"></i></div>
                    <div className="text-child">Khám cây trồng kinh tế</div>
                </div>
                <div className="option-child">
                    <div className="icon-child"><i className="fa-solid fa-mobile-screen-button"></i></div>
                    <div className="text-child">Khám từ xa</div>
                </div>
                <div className="option-child">
                    <div className="icon-child"><i className="fa-solid fa-book-medical"></i></div>
                    <div className="text-child">Khám tổng quát</div>
                </div>
                <div className="option-child">
                    <div className="icon-child"><i className="fa-solid fa-mosquito"></i></div>
                    <div className="text-child">Xét nghiệm cây trồng</div>
                </div>
                <div className="option-child">
                    <div className="icon-child"><i className="fa-brands fa-pagelines"></i></div>
                    <div className="text-child">Khám cây cảnh</div>
                </div>
                <div className="option-child">
                    <div className="icon-child"><i className="fa-solid fa-sun-plant-wilt"></i></div>
                    <div className="text-child">Khám môi trường</div>
                </div>
               </div>
               </div>
 
            </div>
            </React.Fragment>
          
        )
    }
}
const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeHeader);