import React from "react";
import style from "../../styles/common.module.css";
import { Col, Container, Row } from "react-bootstrap";
import { Svg1, Svg2, Svg3, Svg4, Svg5, Svg6, Svg7 } from "../SvgImages";

export const Footer = () => {
  return (
    <div>
      <div className={style.Footer}>
        <Container className={style.ContainerPadding}>
          <Row>
            <Col xl={5} md={4} xs={12}>
              <a href="#" className="mb-4 d-block">
                <Svg1 />
              </a>
              <p>Securely Connecting The {"World's"} Devices.</p>
            </Col>
            <Col xl={2} lg={2} md={3} xs={12}>
              <h4>GET STARTED</h4>
              <ul className="p-0">
                <li>
                  <a href="#">Download</a>
                </li>
                <li>
                  <a href="#">GitHub</a>
                </li>
                <li>
                  <a href="#">SDK</a>
                </li>
                <li>
                  <a href="#">Partners</a>
                </li>
              </ul>
            </Col>
            <Col xl={3} lg={3} md={3} xs={12} className="ps-xl-5 ps-lg-5">
              <h4>SUPPORT</h4>
              <ul className="p-0">
                <li>
                  <a href="#">Documentation</a>
                </li>
                <li>
                  <a href="#">Knowledge Base</a>
                </li>
                <li>
                  <a href="#">Community</a>
                </li>
                <li>
                  <a href="#">Getting Started</a>
                </li>
              </ul>
            </Col>
            <Col xl={2} lg={3} md={2} xs={12} className="px-xl-0 ps-lg-5">
              <h4>COMPANY</h4>
              <ul className="p-0">
                <li>
                  <a href="#">Contact</a>
                </li>
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Careers</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
                <li>
                  <a href="#">Media Kit</a>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </div>
      <div className={style.FooterBottom}>
        <Container className={style.ContainerPadding}>
          <Row>
            <Col md={6} xs={12}>
              <ul className={`p-0 mb-4 ${style.SocialList}`}>
                <li>
                  <a href="#">
                    <Svg2 />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <Svg3 />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <Svg4 />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <Svg5 />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <Svg6 />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <Svg7 />
                  </a>
                </li>
              </ul>
              <p>© 2023 ZeroTier, Inc. All rights reserved.</p>
            </Col>
            <Col md={6} xs={12} className="text-md-end">
              <ul className={`p-0 mt-md-5 mt-3 ${style.TermList}`}>
                <li>
                  <a href="#">Terms</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};
