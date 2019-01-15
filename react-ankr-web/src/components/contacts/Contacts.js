import React, { Component } from 'react';
import sky from '../../images/sky.mp4'
import ContactForm from '../forms/ContactForm';
import '../../scss/Contacts.css';
import contactsTemp from '../../images/contacts-temp.png';

class Contacts extends Component {
    render() {
        return(
            <div className="contacts">
                {/*1st part: "contacts"*/}
                <div className="contacts-office">
                    <div className="contacts-content">
                        <h2 className="contacts-title">Contacts</h2>
                        < div className = "contacts-divider" > </div>
                        <div className="contacts-sf">
                            <a className="us" href="https://www.google.com/maps/place/609+Mission+St,+San+Francisco,+CA+94105,+%D0%A1%D0%A8%D0%90/@37.7876886,-122.402119,17z/data=!3m1!4b1!4m5!3m4!1s0x80858062ca77fe75:0xa2d8156be59459a9!8m2!3d37.7876886!4d-122.3999303" target="_blank">
                                <span className="fas fa-map-marker-alt"></span>
                                <span className="contacts-office-header">San Francisco Office</span>
                                <div className="contacts-addy">
                                    <div>609 Mission St 2nd floor</div>
                                    <div>San Francisco, CA 94105</div>
                                </div>
                            </a>
                        </div>
                        <div className="contacts-sh">
                            <a className="china" href="https://map.baidu.com/?newmap=1&shareurl=1&l=19&tn=B_NORMAL_MAP&hb=B_SATELLITE_STREET&c=13517386,3614824&i=0,0&s=s%26da_src%3DsearchBox.button%26wd%3D1108%E5%AE%A4%E9%9B%B6%E5%8F%B7%E6%B9%BE%E7%A7%91%E6%8A%80%E5%A4%A7%E6%A5%BC%EF%BC%88%E9%97%B5%E8%A1%8C%E5%8C%BA%E5%89%91%E5%B7%9D%E8%B7%AF951%E5%8F%B7)%26c%3D1%26src%3D0%26wd2%3D%26pn%3D0%26sug%3D0%26l%3D15%26b%3D(3553111%2C5901891%3B3564119%2C5907059)%26from%3Dwebmap%26biz_forward%3D%7B%22scaler%22%3A2%2C%22styles%22%3A%22pl%22%7D%26sug_forward%3D%26auth%3D4wbw81aH3QSCKPTK9EZQc5P3c9NY95YGuxHEEVTHLBLtDpnSCE%40%40B1GgvPUDZYOYIZuVt1cv3uVtGccZcuVtPWv3GuxtVwi04960vyACFIMOSU7ucEWe1GDdw8E62qvSucFC%40B%40ZPuVteuVtegvcguxHEEVTHHEHtimNNz1yt%40%40YwW%26device_ratio%3D2" target="_blank">
                                <span className="fas fa-map-marker-alt"></span>
                                <span className="contacts-office-header">Shanghai Office</span>
                                < div className = "contacts-addy" >
                                    <div>Room 1108, Neo Bay Technology Building,</div>
                                    <div>951 Jianchuan Road, District of Minghang</div>
                                    <div>1108室零号湾科技大楼（闵行区剑川路951号)</div>
                                </div>
                            </a>
                        </div>

                        <div className="contacts-email">
                            <span className="far fa-envelope"></span>
                            <span className="contacts-email-addy">support@ankr.network</span>
                        </div>
                    </div>

                    <video id='sky' autoPlay muted loop>
                        <source src={sky} type="video/mp4"/>
                    </video>
                </div>

                {/*2nd part: "Contact form"*/}
                <div className="contacts-form">
                    <div className="contacts-form-item">
                        <ContactForm/>
                    </div>
                    <img src={contactsTemp} alt="contactsTemp" />
                </div>
            </div>
        );
    }
}

export default Contacts;