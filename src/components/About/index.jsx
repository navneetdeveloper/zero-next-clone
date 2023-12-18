
import { Button, Col, Container, Row } from "react-bootstrap";
import Image from "next/image";
import style from "../../styles/common.module.css";

export const About = () => {
    return (
        <div className={style.WorkBg}>
            <Container className={style.ContainerPadding}>
                <div className={style.WorkDiv}>
                    <Row>
                        <Col md={6} xs={12}>
                            <div className={style.WorkImg}>
                                <Image
                                    src="/work.webp"
                                    alt="Image"
                                    height={450}
                                    width={500}
                                />
                            </div>
                        </Col>
                        <Col md={6} xs={12}>
                            <div className="d-flex flex-column justify-content-center h-100 ps-md-4">
                                <h2>It just works</h2>
                                <p className="mb-4">
                                    ZeroTier combines the capabilities of <span>VPN</span> and
                                    <span> SD-WAN</span>, simplifying network management. Enjoy
                                    flexibility while avoiding costly hardware vendor lock in.
                                </p>
                                <Button className={`${style.BtnWhite} ${style.WidthFit}`}>
                                    Learn more {"›"}
                                </Button>
                            </div>
                        </Col>
                    </Row>
                    <Row className="mt-md-5">
                        <Col md={6} xs={12} className="d-md-none d-block mt-5">
                            <div className={style.WorkImg}>
                                <Image
                                    src="/speed.webp"
                                    alt="Image"
                                    height={450}
                                    width={500}
                                />
                            </div>
                        </Col>
                        <Col md={6} xs={12}>
                            <div className="d-flex flex-column justify-content-center h-100 mt-md-4 ps-md-2">
                                <h2>Speed, flexibility, and security</h2>
                                <p className="mb-4">
                                    Set up ZeroTier in minutes with remote, automated
                                    deployment.
                                </p>
                                <p className="mb-4">
                                    Emulates Layer 2 Ethernet with multipath, multicast, and
                                    bridging capabilities.
                                </p>
                                <p className="mb-4">
                                    ZeroTier’s zero-trust networking solution provides scalable
                                    security with 256-bit end-to-end encryption.
                                </p>
                                <Button
                                    className={`${style.BtnWhite} ${style.WidthFit} mb-md-4`}
                                >
                                    Get ZeroTier
                                </Button>
                            </div>
                        </Col>
                        <Col md={6} xs={12} className="d-md-inline-block d-none">
                            <div className={style.WorkImg}>
                                <Image
                                    src="/speed.webp"
                                    alt="Image"
                                    height={450}
                                    width={500}
                                />
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    )
}