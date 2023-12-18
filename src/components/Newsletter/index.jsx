
import { Button, Col, Container, Row } from "react-bootstrap";
import style from "../../styles/common.module.css";

export const Newsletter = () => {
    return (
        <div className={style.Newsletter}>
            <Container className={style.ContainerPadding}>
                <div className={style.NewsletterBox}>
                    <Row>
                        <Col xl={8} lg={7} md={5} xs={12}>
                            <h3>Newsletter Signup</h3>
                            <p>
                                Join over 350,000 community members worldwide and receive the
                                latest news from Team ZeroTier.
                            </p>
                        </Col>
                        <Col xl={4} lg={5} md={7} xs={12}>
                            <div className="d-flex w-100 mt-md-5 align-items-center">
                                <input
                                    type="email"
                                    className="w-100 me-2"
                                    placeholder="Email Address"
                                />
                                <Button type="submit">Subscribe</Button>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    )
}