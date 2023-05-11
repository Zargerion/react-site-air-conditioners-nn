<div class="shop-wrapper">
    <div class="content-container">
        <div id="shop" class="shop">
        <h1 class="ml-4">Продукция</h1>
        </div>
        <div class="shop-under">
        <div class="shop-img sii-1">
            <div class="shop-relative">
            <div class="shop-item">
                <p>Haier HSU-07HPL103/R3</p>
                <p>35 000 руб.</p>
            </div>
            </div>
        </div>
        <div class="shop-img sii-2">
            <div class="shop-relative">
            <div class="shop-item">
                <p>Electrolux EACS/I-07HF2/N8_23Y</p>
                <p>55 000 руб.</p>
            </div>
            </div>
        </div>
        </div>
    </div>
</div>

.shop {
  grid-column-start: 2;
  grid-column-end: 3;
  margin-top: 50px;
}

.shop-wrapper {
  background-image: url(./about-wp-v1.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  box-shadow: inset 0 0 20px rgba(0, 0, 0, 0.6);
}
.shop-under {
  grid-column-start: 2;
  grid-column-end: 3;
  display: -ms-grid;
  display: grid;
  -ms-grid-columns: 2fr 2fr;
  grid-template-columns: 2fr 2fr;
  margin-bottom: 50px;
}

.shop-img {
  width: 100%;
  width: calc(100% - ( 0.5 * 30px ) );
  box-sizing: border-box;
  margin-bottom: 0px;
  zoom: 1;
  background-position: center center;
  background-size: cover;
  height: 500px;
}

.sii-1 {
 background-image: url(./condei1.webp);
}

.sii-2 {
  background-image: url(./condei2.webp);
}

.shop-relative {
  position: relative;
  height: 500px;
}

.shop-item {
  background-color: #53ACFF;
  opacity: 0.8;
  width: auto;
  display: table;
  color: #fff;
  font-size: 20px;
  line-height: 0.5;
  padding: 12px 20px;
  border-left: 8px solid #393F47;
  margin-bottom: 30px;
  position: relative;
  left: -8px;
  min-height: 72px;
  min-width: 65%;
}

_mobile_________


.shop-under {
    display: flex;
    flex-direction: column;
  }

  .shop-item > :nth-child(1) {
    line-height: 1;
    margin-top: 0;
  }

  .shop-item > :nth-child(2) {
    margin-bottom: 0;
  }

