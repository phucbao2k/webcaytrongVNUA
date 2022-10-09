import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import './BookingModal.scss';
import {Modal} from 'reactstrap';

//lodash hỗ trợ ta kiểm tra và thao tác với mảng dễ dàng hơn

class BookingModal extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }

    }


    async componentDidMount() {

    }
    async componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.language !== prevProps.language) {

        }
    }


    render() {
        let{isOpenModal, closeBookingClose, dataTime} = this.props;
        return (
           <Modal
           isOpen={isOpenModal}
           className={'booking-modal-container'}
           size="lg"
           centered>
            <div className="booking-modal-content">
                    <div className="booking-modal-header">
                        <span className="left">Thông tin đặt lịch khám bệnh</span>
                        <span className="right"
                            onClick={closeBookingClose}>
                            <i className="fa-solid fa-xmark"></i>
                        </span>
                    </div>
                    <div className="booking-modal-body">
                        <div className="doctor-infor">

                        </div>
                        <div className="price">
                            Gía khám 350.000 VND
                        </div>
                        <div className="row">
                            <div className="col-6 form-group">
                                <label>Họ tên</label>
                                <input className="form-control"/>
                            </div>
                            <div className="col-6 form-group">
                                <label>Số điện thoại</label>
                                <input className="form-control" />
                            </div>
                            <div className="col-6 form-group">
                                <label>Địa chỉ email</label>
                                <input className="form-control" />
                            </div>
                            <div className="col-6 form-group">
                                <label>Địa chỉ liên hệ</label>
                                <input className="form-control" />
                            </div>
                            <div className="col-12 form-group">
                                <label>Lý do khám</label>
                                <input className="form-control" />
                            </div>
                            <div className="col-6 form-group">
                                <label>Hình ảnh cây trồng bị bệnh(Đang phát triển...)</label>
                                <input className="form-control" />
                            </div>
                            <div className="col-6 form-group">
                                <label>Tên loài cây</label>
                                <input className="form-control" />
                            </div>
                            <div className="col-6 form-group">
                                <label>Ngành cây(cây cảnh/nông nghiệp/công nghiệp)</label>
                                <input className="form-control" />
                            </div>
                        </div>
                    </div>
                    <div className=""></div>
            </div>
           
                
               
                   
               
               
               
          
           </Modal>
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

export default connect(mapStateToProps, mapDispatchToProps)(BookingModal);



