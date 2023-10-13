import styles from "./ProductCardForm.module.css";

const ProductCardForm = () => {
  return (
    <div className={styles.product}>
      <img className={styles.productChild} alt="" src="/rectangle-30.svg" />
      <div className={styles.productSell}>Product Sell</div>
      <div className={styles.inStockParent}>
        <div className={styles.inStock}>32 in stock</div>
        <div className={styles.div}>$ 45.99</div>
        <div className={styles.div1}>20</div>
        <div className={styles.abstract3dParent}>
          <div className={styles.abstract3d}>Abstract 3D</div>
          <div className={styles.loremIpsumDolor}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </div>
          <img
            className={styles.unsplashwh2fhl0vEoIcon}
            alt=""
            src="/unsplashwh2fhl0v-eo@2x.png"
          />
        </div>
      </div>
      <div className={styles.sarphensIllustrationParent}>
        <div className={styles.sarphensIllustration}>Sarphens Illustration</div>
        <div className={styles.inStock1}>32 in stock</div>
        <div className={styles.div2}>$ 45.99</div>
        <div className={styles.div3}>20</div>
        <div className={styles.loremIpsumDolor}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </div>
        <img
          className={styles.unsplashwh2fhl0vEoIcon}
          alt=""
          src="/unsplasha2j-namzag@2x.png"
        />
      </div>
      <div className={styles.landingPage3dMaxParent}>
        <div className={styles.sarphensIllustration}>Landing Page 3D max</div>
        <div className={styles.inStock1}>32 in stock</div>
        <div className={styles.div2}>$ 45.99</div>
        <div className={styles.div3}>20</div>
        <div className={styles.loremIpsumDolor}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </div>
        <img
          className={styles.unsplashwh2fhl0vEoIcon}
          alt=""
          src="/unsplashrazu-r66vuc@2x.png"
        />
      </div>
      <div className={styles.collabIllustrationParent}>
        <div className={styles.sarphensIllustration}>Collab Illustration</div>
        <div className={styles.inStock1}>32 in stock</div>
        <div className={styles.div2}>$ 45.99</div>
        <div className={styles.div3}>20</div>
        <div className={styles.loremIpsumDolor}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </div>
        <img
          className={styles.unsplashwh2fhl0vEoIcon}
          alt=""
          src="/unsplashcpccybprfa@2x.png"
        />
      </div>
      <div className={styles.groupParent}>
        <div className={styles.productNameParent}>
          <div className={styles.productName}>Product Name</div>
          <div className={styles.stock}>Stock</div>
          <div className={styles.price}>Price</div>
          <div className={styles.totalSales}>Total Sales</div>
        </div>
        <div className={styles.groupChild} />
      </div>
      <div className={styles.rectangleParent}>
        <div className={styles.groupItem} />
        <div className={styles.search}>Search</div>
        <img className={styles.search1Icon} alt="" src="/search-1.svg" />
      </div>
      <div className={styles.rectangleGroup}>
        <div className={styles.groupInner} />
        <img
          className={styles.chevronDown1Icon}
          alt=""
          src="/chevrondown-1.svg"
        />
        <div className={styles.last30Days}>Last 30 days</div>
      </div>
    </div>
  );
};

export default ProductCardForm;
