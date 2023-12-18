import { Button, Container } from "react-bootstrap";
import style from "../../styles/common.module.css";

export const CommunityEdition = () => {
    return (
        <div className={style.Community}>
            <Container className={style.ContainerPadding}>
                <div className={style.CommunityBox}>
                    <h3>Open Source Community Edition</h3>
                    <p>
                        Featuring unlimited nodes, networks, and admins. Self-hosted.
                        Designed for non-Commercial Use cases.
                    </p>
                    <Button
                        className={`${style.BorderBtnWhite} d-md-inline-block d-block m-auto`}
                    >
                        ZeroTier GitHub
                    </Button>
                    <a
                        href="#"
                        className={`ms-md-4 ${style.ReadText} d-md-inline-block d-block text-center mt-3`}
                    >
                        Read Documentation
                    </a>
                </div>
            </Container>
        </div>
    )
}