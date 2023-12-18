import { Col, Container, Row } from "react-bootstrap";
import Image from "next/image";
import style from "../../styles/common.module.css";

export const SecureNetwork = () => {
    return (
        <div className={style.Secure}>
            <Container>
                <h2 className={style.SameHead}>
                    Secure networks for teams of any size
                </h2>
                <Row>
                    <Col xl={3} lg={3} md={6} xs={12}>
                        <div className={style.Box}>
                            <Image
                                src="/individual.webp"
                                alt="Image"
                                width={147}
                                height={147}
                            />
                            <h3>Individuals</h3>
                            <p>
                                Access your computers, NAS, home automation, IP cameras, ham
                                radios or other devices from anywhere
                            </p>
                            <p>
                                Conveniently share files and data, or even play LAN games with
                                others
                            </p>
                            <p>Manage secure network access to users of choice</p>
                        </div>
                    </Col>

                    <Col xl={3} lg={3} md={6} xs={12}>
                        <div className={style.Box}>
                            <Image
                                src="/it-team.webp"
                                alt="Image"
                                width={147}
                                height={147}
                            />
                            <h3>IT Teams</h3>
                            <p>
                                Simplify your network stack by unifying VPNs, VLANs, and
                                SD-WANs with one solution
                            </p>
                            <p>
                                Build, manage, and observe any number of remote, on premise,
                                or cloud networks with one management interface
                            </p>
                            <p>Easily provision remote access for all of your users</p>
                        </div>
                    </Col>

                    <Col xl={3} lg={3} md={6} xs={12}>
                        <div className={style.Box}>
                            <Image
                                src="/devops.webp"
                                alt="Image"
                                width={147}
                                height={147}
                            />
                            <h3>DevOps</h3>
                            <p>
                                Quickly build backplane networks spanning multiple cloud
                                providers
                            </p>
                            <p>Save on performance, storage, and bandwidth</p>
                            <p>Administrate and debug from anywhere</p>
                            <p>Secure corporate network overlay and failover layer</p>
                        </div>
                    </Col>

                    <Col xl={3} lg={3} md={6} xs={12}>
                        <div className={style.Box}>
                            <Image
                                src="/embedded.webp"
                                alt="Image"
                                width={147}
                                height={147}
                            />
                            <h3>Embedded</h3>
                            <p>Enjoy vastly superior network control and functionality</p>
                            <p>
                                Develop and manage products or services running on their own
                                decentralized networks
                            </p>
                            <p>
                                Create 4G/5G-capable secure networks for any IoT, edge or
                                embedded device that can operate on 64MB of RAM
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}