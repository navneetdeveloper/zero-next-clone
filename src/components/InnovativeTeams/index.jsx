import {Col, Container, Row } from "react-bootstrap";
import Image from "next/image";
import style from "../../styles/common.module.css";

export const InnovativeTeams = () => {
    return (
        <div className={style.Team}>
            <Container className={style.ContainerPadding}>
                <h2 className={style.SameHead}>
                    Used by the {"world's"} most innovative teams
                </h2>

                <div className="px-xl-4 pt-3">
                    <Row>
                        <Col xl={{ span: 10, offset: 1 }} lg={12} md={12}>
                            <div className={style.Box}>
                                <div className={style.BoxImg}>
                                    <Image
                                        src="/user.webp"
                                        alt="Image"
                                        width={48}
                                        height={48}
                                    />
                                </div>
                                <div className={style.Content}>
                                    <p>
                                        {`"Metropolis deploys computer vision in parking lots & car wash facilities across the US, integrating ZeroTier to eliminate the complexity of managing multiple, disparate networks to deliver a seamless, groundbreaking and world-class customer experience."`}
                                    </p>
                                    <h4>
                                        TODD SHIPWAY, HEAD OF TECHNICAL OPERATIONS, METROPOLIS
                                    </h4>
                                </div>
                            </div>

                            <div className={style.Box}>
                                <div className={style.BoxImg}>
                                    <Image
                                        src="/user.webp"
                                        alt="Image"
                                        width={48}
                                        height={48}
                                    />
                                </div>
                                <div className={style.Content}>
                                    <p>
                                        {`"In early product development, we needed a way to easily
                      connect our growing IoT product-base to our systems.
                      ZeroTier provided an easy, and reliable way to achieve
                      that, and has been growing with us."`}
                                    </p>
                                    <h4>
                                        PETER BOIN, PRINCIPAL SOFTWARE ENGINEER, ALLUME ENERGY
                                    </h4>
                                </div>
                            </div>

                            <div className={style.Box}>
                                <div className={style.BoxImg}>
                                    <Image
                                        src="/user.webp"
                                        alt="Image"
                                        width={48}
                                        height={48}
                                    />
                                </div>
                                <div className={style.Content}>
                                    <p>
                                        {`“ZeroTier provides a robust and essential backbone for our
                      communications stack."`}
                                    </p>
                                    <h4>
                                        ANDREW LIPSCOMB, MECHATRONICS ENGINEER, SWARMFARM ROBOTICS
                                    </h4>
                                </div>
                            </div>

                            <div className={style.Box}>
                                <div className={style.BoxImg}>
                                    <Image
                                        src="/user.webp"
                                        alt="Image"
                                        width={48}
                                        height={48}
                                    />
                                </div>
                                <div className={style.Content}>
                                    <p>
                                        {`"Loft Orbital uses ZeroTier to improve interoperability
                      between its offices in the United States and France. It
                      connects our engineers to key resources quickly and
                      easily, which allows our team to focus on making space
                      simple."`}
                                    </p>
                                    <h4>BRUNSTON POON, SOFTWARE ENGINEER, LOFT ORBITAL</h4>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    )
}