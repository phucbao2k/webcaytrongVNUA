import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import Slider from "react-slick";
import * as actions from "../../../store/actions";
import { LANGUAGES } from "../../../utils";
import { withRouter } from 'react-router';

class OutStandingDoctor extends Component {
    constructor(props) {
        super(props)
        this.state = {
            arrDoctors: []
            // dataSpecialty: []
        }
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.topDoctorRedux !== this.props.topDoctorRedux) {
            this.setState({
                arrDoctors: this.props.topDoctorRedux
            })
        }
     
    }
   async componentDidMount() {
        this.props.loadTopDoctors();
      
    }
    handleViewDetailDoctor = (doctor) => {
        if (this.props.history) {
            console.log('baophuc2k check doctor', doctor);
            this.props.history.push(`/detail-doctor/${doctor.id}`);
        }

    }
    render() {
        let arrDoctors = this.state.arrDoctors;
        let { language } = this.props;
        let settings = {
            dots: true,
            infinite: false,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 4,
            initialSlide: 0,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        initialSlide: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };

        return (
            <div className="section-share section-outstanding-doctor  mb-5" id=>
                <div className="section-container">
                    <div className="section-header">
                        <span className="title-section"><FormattedMessage id="carousel.gooddoctor" /></span>
                        {/* <button className="btn-section"><FormattedMessage id="carousel.carousel-2" /></button> */}
                    </div>
                    <div className="section-body">

                        {/* D?????i ????y l?? c??ch b???c c??c ???nh, ch??? th??nh 1 slide l???n, n???m ngang */}
                        <Slider {...settings}>
                            {arrDoctors && arrDoctors.length > 0 &&
                                arrDoctors.map((item, index) => {
                                    let imageBase64 = '';
                                    if (item.image) {
                                        imageBase64 = new Buffer(item.image, 'base64').toString('binary');
                                    }
                                    
                                        
                                    let nameVi = `${item.positionData.valueVi}, ${item.firstName} ${item.lastName}`;
                                    let nameEn = `${item.positionData.valueEn}, ${item.lastName} ${item.firstName}`;
                                    //Nh???ng c??u l???nh n???m tr??n h??m return s??? c?? kh??? n??ng ??p d???ng to??n b??? v??o h??m return ph??a sau, t??y ?? ????? c???a ch??ng ta
                                    return (
                                        <div className="section-customize" key={index} onClick={() => this.handleViewDetailDoctor(item)}>
                                            <div className="customize-border">
                                                <div className="outer-bg">
                                                    <div className="bg-image section-outstanding-doctor"
                                                        style={{ backgroundImage: `url(${imageBase64})` }} />


                                                </div>
                                                <div className="position text-center">
                                                    <div>{language === LANGUAGES.VI ? nameVi : nameEn}</div>
                                                   

                                                </div>
                                            </div>


                                        </div>
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
        topDoctorRedux: state.admin.topDoctors
    };
};

const mapDispatchToProps = dispatch => {
    return {
        loadTopDoctors: () => dispatch(actions.fetchTopDoctor())
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(OutStandingDoctor));