import React, { Component} from 'react';
import {connect} from 'react-redux';
import './HomeHeader.scss';
class HomeHeader extends Component {
    render(){
        return (
            <div className="home-header-container">
                <div className="home-header-content">
                    <div className="left-content">
                    <i className="fa-solid fa-bars-staggered"></i>
                    <div className="header-logo"></div>
                    </div>
                    <div className="center-content">
                        <div className="child-content">
                            <div><b>Chuyên khoa(loại cây trồng)</b></div>
                            <div className="sub-title"> Tìm chuyên gia theo loại cây trồng</div>
                        </div>
                        <div className="child-content">
                            <div><b>Cơ sở khám bệnh</b></div>
                            <div className="sub-title"> Chọn nơi khám bệnh </div>
                        </div>
                        <div className="child-content">
                            <div><b>Cơ sở khám bệnh</b></div>
                            <div className="sub-title"> Chọn nơi khám bệnh </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}