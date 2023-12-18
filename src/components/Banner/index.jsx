import { Button, Container } from "react-bootstrap";
import Image from "next/image";
import style from "../../styles/common.module.css";

export const Banner = () => {
  return (
    <div className={style.BannerDiv}>
      <div style={{ display: "grid" }}>
        <div className={style.BannerImg}>
          <Image src="/banner-bg.webp" alt="Image" width={400} height={500} />
        </div>
        <div className={style.BannerColor}></div>
        <div className={style.BannerContent}>
          <Container className={style.ContainerPadding}>
            <div className={style.BannerInner}>
              <div className={style.BannerDetail}>
                <h1>Securely connect any device, anywhere.</h1>
                <p className="d-xl-block d-none">
                  ZeroTier lets you build modern, secure multi-point <br />{" "}
                  virtualized networks of almost any type. From robust <br />
                  peer-to-peer networking to multi-cloud mesh <br />{" "}
                  infrastructure, we enable global connectivity with the{" "}
                  <br />
                  simplicity of a local network.
                </p>
                <p className="mb-4 mt-3 d-xl-none d-block">
                  ZeroTier lets you build modern, secure multi-point
                  virtualized networks of almost any type. From robust
                  peer-to-peer networking to multi-cloud mesh infrastructure,
                  we enable global connectivity with the simplicity of a local
                  network.
                </p>
                <Button
                  className={`${style.YellowBtn} d-md-inline-block d-block m-auto mb-2`}
                >
                  Get ZeroTier
                </Button>
                <a
                  href="#"
                  className={`${style.TextBtn} ms-md-3 d-md-inline-block d-block text-center`}
                >
                  Learn more {"›"}
                </a>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </div>
  )
}