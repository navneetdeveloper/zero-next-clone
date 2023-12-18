
import style from "../../styles/common.module.css";

export const LatestReleases = () => {
    return (
        <p className={`mt-xl-3 ${style.CurrentPara}`}>
        🔔 NEW! <a href="#">ZeroTier Webhooks</a> - Current Release:{" "}
        <a href="#">Download ZeroTier 1.12.2</a>
      </p>
    )
}