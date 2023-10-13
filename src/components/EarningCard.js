import { useMemo } from "react";
import styles from "./EarningCard.module.css";

const EarningCard = ({
  financialData,
  financialAmounts,
  earningIconUrl,
  percentageData,
  timePeriodText,
  earningIconText,
  groupDivLeft,
  groupDivWidth,
  arrowUp1IconWidth,
  propColor,
}) => {
  const groupDivStyle = useMemo(() => {
    return {
      left: groupDivLeft,
      width: groupDivWidth,
    };
  }, [groupDivLeft, groupDivWidth]);

  const groupDiv1Style = useMemo(() => {
    return {
      width: arrowUp1IconWidth,
    };
  }, [arrowUp1IconWidth]);

  const bStyle = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  return (
    <div className={styles.earningParent} style={groupDivStyle}>
      <div className={styles.earning}>{financialData}</div>
      <div className={styles.k}>{financialAmounts}</div>
      <img className={styles.groupChild} alt="" src={earningIconUrl} />
      <div className={styles.thisMonthParent} style={groupDiv1Style}>
        <div className={styles.thisMonth}>
          <b style={bStyle}>{percentageData}</b>
          <span className={styles.thisMonth1}>{timePeriodText}</span>
        </div>
        <img className={styles.arrowUp1Icon} alt="" src={earningIconText} />
      </div>
    </div>
  );
};

export default EarningCard;
