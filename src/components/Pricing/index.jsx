import { Button, Col, Container, Row } from "react-bootstrap";
import Image from "next/image";
import style from "../../styles/common.module.css";

export const Pricing = () => {
    return (
        <div className={style.Price}>
            <Container className={style.ContainerPadding}>
                <h2 className={style.SameHead}>Pricing</h2>
                <p className={style.PricePara}>
                    ZeroTier makes networking easy for everyone - anywhere.
                </p>
                <Row>
                    <Col xl={{ span: 4, offset: 0 }} lg={{ span: 4, offset: 0 }} md={{ span: 10, offset: 1 }} xs={12}>
                        <div className={style.PriceBox}>
                            <Image src="/basic.webp" alt="Image" width={64} height={64} />
                            <h3>Basic</h3>
                            <p>For Everyone / ZeroTier Hosted Controller</p>
                            <ul>
                                <li>✓ 1 Admin</li>
                                <li>✓ 25 Nodes</li>
                                <li>✓ Unlimited Networks</li>
                                <li>✖ Business SSO: n/a</li>
                                <li>✓ Community Support</li>
                                <li>FREE</li>
                            </ul>
                            <Button className={`${style.BtnWhite} my-2`}>
                                Free Sign Up
                            </Button>
                        </div>
                    </Col>

                    <Col xl={{ span: 4, offset: 0 }} lg={{ span: 4, offset: 0 }} md={{ span: 10, offset: 1 }} xs={12}>
                        <div className={style.PriceBox}>
                            <Image
                                src="/professional.webp"
                                alt="Image"
                                width={64}
                                height={64}
                            />
                            <h3>Professional</h3>
                            <p>Licensed Only For Individuals and Testing</p>
                            <ul>
                                <li>✓ Admins | $10 USD/mo each</li>
                                <li>✓ 25 Node Packs | $5 USD/mo</li>
                                <li>✓ Unlimited Networks</li>
                                <li>✓ Business SSO | $5 USD/mo per seat</li>
                                <li>✓ Community Support</li>
                                <li>Starting at $5 USD/month</li>
                            </ul>
                            <Button className={`${style.YellowBtn} my-2`}>Sign Up</Button>
                        </div>
                    </Col>

                    <Col xl={{ span: 4, offset: 0 }} lg={{ span: 4, offset: 0 }} md={{ span: 10, offset: 1 }} xs={12}>
                        <div className={style.PriceBox}>
                            <Image
                                src="/business.webp"
                                alt="Image"
                                width={64}
                                height={64}
                            />
                            <h3>Business</h3>
                            <p>Licensed for Commercial Deployments </p>
                            <ul>
                                <li>Use Cases Include:</li>
                                <li>∙ IoT/IIoT</li>
                                <li>∙ SD-WAN</li>
                                <li>∙ VPN</li>
                                <li>∙ Remote Monitoring and Management</li>
                                <li>Contact Sales for Pricing</li>
                            </ul>
                            <Button className={`${style.BlueBtn} my-2`}>
                                Contact Sales
                            </Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}