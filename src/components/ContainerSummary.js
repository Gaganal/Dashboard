import EarningCard from "./EarningCard";
import styles from "./ContainerSummary.module.css";

const ContainerSummary = () => {
  return (
    <div className={styles.groupParent}>
      <EarningCard
        financialData="Earning"
        financialAmounts="$198k"
        earningIconUrl="/group-10.svg"
        percentageData="37.8%"
        timePeriodText=" this month"
        earningIconText="/arrowup-1.svg"
      />
      <EarningCard
        financialData="Balance"
        financialAmounts="$2.4k"
        earningIconUrl="/group-101.svg"
        percentageData="2%"
        timePeriodText=" this month"
        earningIconText="/arrowup-11.svg"
        groupDivLeft="319px"
        groupDivWidth="211px"
        arrowUp1IconWidth="107px"
        propColor="#d0004b"
      />
      <EarningCard
        financialData="Total Sales"
        financialAmounts="$89k"
        earningIconUrl="/group-102.svg"
        percentageData="11%"
        timePeriodText=" this week"
        earningIconText="/arrowup-12.svg"
        groupDivLeft="638px"
        groupDivWidth="204px"
        arrowUp1IconWidth="100px"
        propColor="#00ac4f"
      />
      <div className={styles.groupChild} />
      <div className={styles.groupItem} />
    </div>
  );
};

export default ContainerSummary;
