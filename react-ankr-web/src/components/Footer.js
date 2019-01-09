import React, { Component } from 'react';
import { Popover, OverlayTrigger } from 'react-bootstrap';
import '../css/Footer.css';

import TeamForm from './forms/TeamForm';
import PartnerFrom from './forms/PartnerForm';
import webChatIcon from '../images/QR.jpg';

class Footer extends Component {
    render() {

        const webChatPopover = (
            <Popover id="popover-trigger-hover-focus">
                <img src={webChatIcon} />
            </Popover>
        );

        return (
            <div className="footer">
                <div className="footer-forms">
                    {/*Add TeamForm and PartnerForm here, followed by "stay_tuned"*/}
                    <div className="footer-team-form">
                        <TeamForm show={this.props.teamShow} onChange={this.props.onTeamChange} />
                    </div>
                    <div className="footer-partner-form">
                        <PartnerFrom show={this.props.partnerShow} onChange={this.props.onPartnerChange} />
                    </div>
                </div>

                {/*"stay_tuned" below*/}
                <div className="footer-middle">
                    <div className="footer-stay-tuned">
                        <div className="footer-stay-tuned-info">
                            <div className="footer-stay-tuned-info-title"><strong>Stay tuned</strong></div>
                            <div className="footer-stay-tuned-info-divider"></div>
                            <div className="footer-stay-tuned-info-desc">Stay tuned for the latest news</div>
                        </div>

                        <form className="footer-middle-form" onSubmit = {this.props.handleSubmit}>
                            <input className="footer-middle-email-form"  type="text" placeholder="      Your email address" />
                            <div className="footer-middle-email-form-btn"><button  type="submit">Subscribe</button></div>
                        </form>

                        <div className="footer-middle-email-addr">
                            <span class="far fa-envelope"></span>
                            support@ankr.network
                        </div>
                    </div>

                    <div className="footer-links">
                        <div className="about-footer">
                            <h5><strong>About</strong></h5>
                            <ul>
                                <li><a href="about#our-story">STORY</a></li>
                                <li><a href="about#career">CAREER</a></li>
                                <li><a href="about#team">TEAM</a></li>
                                <li><a href="product">PRODUCT</a></li>
                                <li><a href="/#news">NEWS</a></li>
                            </ul>
                        </div>
                        <div className="support-footer">
                            <h5><strong>Support</strong></h5>
                            <ul>
                                <li><a href="faq">FAQ</a></li>
                                <li><a href="contacts#contacts">CONTACT</a></li>
                                <li><a href="https://www.ankr.network/pdf/LOGO%20ASSETS.pdf" target="_blank">LOGO ASSETS</a></li>
                                <li><a href="https://www.ankr.network/pdf/AnkrWhitepaper.pdf" target="_blank">WHITE PAPER</a></li>
                                <li><a href="product#tech_overview">TECHNOLOGY</a></li>
                            </ul>
                        </div>
                        <div className="social-footer">
                            <h5><strong>Social</strong></h5>
                            <ul>
                                <a href="https://medium.com/ankr-network" target="_blank"><li><span className="fab fa-medium-m"></span>Medium</li></a>
                                <a href="https://twitter.com/ankrnetwork?lang=en" target="_blank"><li><span className="fab fa-twitter"></span>Twitter</li></a>
                                <a href="https://t.me/ankrnetwork" target="_blank"><li><span className="fab fa-telegram-plane"></span>Telegram Official</li></a>
                                <a href="https://t.me/anrknetworkann" target="_blank"><li><span className="fab fa-telegram-plane"></span>Telegram Announcements</li></a>
                                <a href="https://www.youtube.com/channel/UCr6z1C2Ti0DOS_zNqh62U-A" target="_blank"><li><span className="fab fa-youtube"></span>Youtube</li></a>
                                <li style={{color:'#337ab7'}}>
                                    <OverlayTrigger
                                        trigger={['hover', 'focus']}
                                        placement="top"
                                        overlay={webChatPopover}
                                    >
                                        <div><span className="fab fa-weixin"></span>Wechat</div>
                                    </OverlayTrigger>
                                </li>
                                <a href="https://www.instagram.com/ankrnetwork/" target="_blank"><li><span className="fab fa-instagram"></span>Instagram</li></a>
                                <a href="https://open.kakao.com/o/g4sfftV" target="_blank"><li><span>Kakaotalk</span></li></a>
                            </ul>
                        </div>
                    </div>
                </div>

                <footer className="footer-copyright">
                    <p>&copy; 2018 Ankr All rights reserved</p>
                </footer>
            </div>
        );
    }
}

export default Footer;