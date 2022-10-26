import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import './ProfileDoctor.scss';
import { getProfileDoctorById } from '../../../services/userService';
import { LANGUAGES } from '../../../utils';
import NumberFormat from 'react-number-format';
import _ from 'lodash';
import moment from 'moment';
//lodash hỗ trợ ta kiểm tra và thao tác với mảng dễ dàng hơn
import {Link} from 'react-router-dom';
class ProfileDoctor extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dataProfile: {}
        }

    }


    async componentDidMount() {
        let data = await this.getInforDoctor(this.props.doctorId);
        this.setState({ dataProfile: data });
    }
    getInforDoctor = async (id) => {
        let result = {};
        if (id) {
            let res = await getProfileDoctorById(id);
            if (res && res.errCode === 0) {
                result = res.data;
            }
        }
        return result;
    }
    async componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.language !== prevProps.language) {

        }
        if (this.props.doctorId !== prevProps.doctorId) {

        }
    }

renderTimeBooking = (dataTime) => {
    let { language} = this.props;
    if( dataTime && !_.isEmpty(dataTime)){
        let time = language === LANGUAGES.VI ?
        dataTime.timeTypeData.valueVi : dataTime.timeTypeData.valueEn;
        let date = language === LANGUAGES.VI ?
        //ta phải chia cho 1000 vì biến chứa giá trị đơn vị thời gian của js(dataTime.date) ở trên, được tính theo milisecond
        //còn unix lại tính theo second
        moment.unix(+dataTime.date / 1000).format('dddd -DD/MM/YYYY') :
            moment.unix(+dataTime.date / 1000).locale('en').format('ddd -MM/DD/YYYY')
            return(
                <>
                <div>{time} -{date}</div>
                <div><FormattedMessage id="patient.booking-modal.priceBooking"/></div>
                </>
            )
    }
    return <></>
}
    render() {
        let { dataProfile} = this.state;
        let { language, isShowDescriptionDoctor, dataTime,
         is} = this.props;
        let nameVi = '', nameEn = '';
        if (dataProfile && dataProfile.positionData) {
            nameVi = `${dataProfile.positionData.valueVi}, ${dataProfile.firstName} ${dataProfile.lastName}`;
            nameEn = `${dataProfile.positionData.valueVi}, ${dataProfile.lastName} ${dataProfile.firstName}`;
        }
        return (
            <div className="profile-doctor-container">
                <div className="intro-doctor">
                    <div className="content-left"
                        style={{ backgroundImage: `url(${dataProfile && dataProfile.image ? dataProfile.image : ''})` }}>

                    </div>
                    <div className="content-right">
                        <div className="up">
                            {language === LANGUAGES.VI ? nameVi : nameEn}
                        </div>
                        <div className="down">
                            {isShowDescriptionDoctor === true ? 
                            <>
                                {dataProfile && dataProfile.Markdown && dataProfile.Markdown.description
                                    &&
                                    <span>
                                        {dataProfile.Markdown.description}</span>}
                            </>
                            :
                            <>
                            {this.renderTimeBooking(dataTime)}
                            </>}
                           
                        </div>
                    </div>
                </div>
                <div className="price">
                    <FormattedMessage id="patient.booking-modal.price" />
                    {dataProfile && dataProfile.Doctor_Infor && language === LANGUAGES.VI
                        &&
                        <NumberFormat
                            className="currency"
                            value={dataProfile.Doctor_Infor.priceTypeData.valueVi}
                            displayType={'text'}
                            thousandSeparator={true}
                            suffix={'VND'}
                        />
                    }
                    {dataProfile && dataProfile.Doctor_Infor && language === LANGUAGES.EN &&
                        <NumberFormat
                            className="currency"
                            value={dataProfile.Doctor_Infor.priceTypeData.valueEn}
                            displayType={'text'}
                            thousandSeparator={true}
                            suffix={'USD'}
                        />
                    }
                </div>
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
        language: state.app.language,
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileDoctor);




