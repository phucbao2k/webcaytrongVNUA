import React, { Component } from 'react';
import { connect } from "react-redux";
import './DoctorExtraInfor.scss';
import { LANGUAGES } from '../../../utils';
import { getExtraInforDoctorById } from '../../../services/userService';
import { FormattedMessage } from 'react-intl';
import NumberFormat from 'react-number-format';
class DoctorExtraInfor extends Component {
    constructor(props) {
        super(props);
        this.state = {
          isShowDetailInfor: false,
          extraInfor: {}
        }
    }
    async componentDidMount() {
       
    }
   
   
    async componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.language !== prevProps.language) {
           
        }
        if(this.props.doctorIdFromParent !== prevProps.doctorIdFromParent) {
            let res = await getExtraInforDoctorById(this.props.doctorIdFromParent);
            if(res && res.errCode === 0){
                this.setState({
                    extraInfor: res.data
                })
            }
        }
    }
 showHideDetailInfor = (status)=>{
    this.setState({
        isShowDetailInfor: status
    })
 }
    render() {
        let { isShowDetailInfor, extraInfor } = this.state;
        let {language} = this.props;
       
        return (
            <div className="doctor-extra-infor-container">
                <div className="content-up">
                    <div className="text-address"> <FormattedMessage id="patient.extra-infor-doctor.text-address" /></div>
                    <div className="name-clinic">
                        {extraInfor && extraInfor.nameClinic ? extraInfor.nameClinic: ''}
                    </div>
                    <div className="detail-address">
                        {extraInfor && extraInfor.addressClinic ? extraInfor.addressClinic : ''}
                    </div>
                </div>
                <div className="content-down">
                    {isShowDetailInfor ===false &&
                    <div className="short-infor">
                        <FormattedMessage id="patient.extra-infor-doctor.price"/>
                        <span onClick={() => this.showHideDetailInfor(true)}>
                            Xem chi ti???t
                        </span>
                        </div>
                        }
                        {isShowDetailInfor === true &&
                        <>
                        <div className="title-price">GI?? KH??M: </div>
                        <div className="detail-infor">
                            <div className="price">
                                <span className="left">
                                    G??a kh??m
                                </span>
                                <span className="right">350.000 VND</span>
                            </div>
                            <div className="note">
                                ???????c ??u ti???n kh??m tr?????c khi ?????t kh??m qua trang web n??y.
                            </div>
                            <div className="payment">
                                Ng?????i d??ng c?? th??? thanh to??n b???ng h??nh th???c ti???n m???t ho???c th??? t??n d???ng
                            </div>

                        </div>
                        <div className="hide-price">
                            <span onClick={() => this.showHideDetailInfor(false)}>
                                ???n b???ng gi??
                            </span>
                        </div>

                        </>
                        }
                    
                </div>
            </div>



        );

    }

}
const mapStateToProps = (state) => {
    return {
        language: state.app.language,
    };
};
const mapDispatchToProps = dispatch => {
    return {

    };
};
export default connect(mapStateToProps, mapDispatchToProps)(DoctorExtraInfor);
