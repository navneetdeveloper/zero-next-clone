import { Button, Col, Container, Row } from "react-bootstrap";
import Image from "next/image";
import style from "../../styles/common.module.css";

export const ZeroTier = () => {
    return (
        <div className={style.ZeroTierService}>
            <Container className={style.ContainerPadding}>
                <div className={style.ZeroTierBox}>
                    <Row>
                        <Col md={8} xs={12}>
                            <div className="d-flex justify-content-center flex-column h-100">
                                <h3>ZeroTier Enterprise</h3>
                                <p className="mb-4">
                                    For high-volume VPN, IoT, IIoT, edge, embedded networking,
                                    multi & hybrid cloud, Infrastructure as Code (IaC), and
                                    Commercial Use.
                                </p>
                                <Button className={`${style.BorderYellow} ${style.WidthFit}`}>
                                    Contact Sales
                                </Button>
                            </div>
                        </Col>
                        <Col md={4} xs={12}>
                            <Image
                                src="/zerotier.webp"
                                alt="Image"
                                width={376}
                                height={376}
                            />
                        </Col>
                    </Row>
                </div>

                <div className={style.ZeroTierBox}>
                    <Row>
                        <Col md={4} xs={12} className="d-md-inline-block d-none">
                            <Image
                                src="/service.webp"
                                alt="Image"
                                width={376}
                                height={376}
                            />
                        </Col>
                        <Col md={8} xs={12}>
                            <div className="d-flex justify-content-center flex-column h-100">
                                <h3>Service Providers</h3>
                                <p className="mb-4">
                                    For hardware and software companies interested in embedding
                                    or integrating the ZeroTier platform within their service
                                    offering, as well as enterprise-facing channels including
                                    Managed Service Providers (MSPs), Resellers, and Systems
                                    Integrators.
                                </p>
                                <Button className={`${style.BorderYellow} ${style.WidthFit}`}>
                                    Contact SP Sales
                                </Button>
                            </div>
                        </Col>
                        <Col md={4} xs={12} className="d-md-none d-inline-block">
                            <Image
                                src="/service.webp"
                                alt="Image"
                                width={376}
                                height={376}
                            />
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    )
}