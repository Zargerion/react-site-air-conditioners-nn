import './App.css';
import Inst from './components/inst';

function scrollHigher() {
  setTimeout(() => {
    window.scrollTo(0, window.pageYOffset - 150);
  }, 0);
}

function openPlusZ() {
  document.getElementById("plus-z-window").style.display = "flex";
}

function closePlusZ() {
  document.getElementById("plus-z-window").style.display = "none";
}

function openMobileMenu() {
  document.getElementById("mobile-menu-window-holder").style.display = "flex";
}

function closeMobileMenu() {
  document.getElementById("mobile-menu-window-holder").style.display = "none";
  scrollHigher()
}

function App() {
  return (
    <div className="App">

      {/*Header*/}

      <div id="top_header">	
				<div class="rf_item"></div>
				<div class="rf_item rf_contacts">
					<div class="rf_phone">
            <img src={process.env.PUBLIC_URL + '/phone-or.svg'} alt="mail" />
						<a href="tel:+7 953 415 97 27">+7 953 415 97 27</a>
					</div>
					<div class="rf_email">
            <img src={process.env.PUBLIC_URL + '/mail_or.svg'} alt="phone" />
						<a href="mailto:alexanders-conditioners@bk.ru">alexanders-conditioners@bk.ru</a>
					</div>
				</div>
				<div class="rf_item">
          <div class="rf_item_hold">
            <button onClick={openPlusZ} title="Бесплатный замер" class="rf-btn rf-btn-primary">
              ВЫЗВАТЬ МАСТЕРА
            </button>
          </div>
				</div>
        <div class=".rf_item">
          <div class="rf_item soc">
            <a href="viber://chat?number=%2B79534159727">
              <img src={process.env.PUBLIC_URL + '/viber.svg'} alt="viber" />
            </a>
          </div>
          {/*<div class="rf_item soc">
            <a href="whatsapp://send?phone=+70000000000">

            </a>
          </div>
          <div class="rf_item soc">
            <a href="https://t.me/joinchat/ghdfghfgdhfdghfgdh">

            </a>
          </div>*/}
        </div>
			</div>

      {/*Navigation*/}

      <nav class="navigation">
        <div class="container">
          <ul class="menu">
            <li><a href="#about" onClick={scrollHigher}>О нас</a></li>
            <li><a href="#install" onClick={scrollHigher}>Монтаж</a></li>
            <li><a href="#service" onClick={scrollHigher}>Сервис</a></li>
            <li><a href="#shop" onClick={scrollHigher}>Продукция</a></li>
            <li><a href="#terms" onClick={scrollHigher}>Доставка</a></li>
            <li><a href="#terms" onClick={scrollHigher}>Гарантия</a></li>        
          </ul>
          <div onClick={openMobileMenu} class="hamburger-holder">
            <label class='menu-button-container'>
              <div class='menu-button'></div>
            </label>
          </div>
      </div>
    </nav>

    {/*Content*/}

    {/*Intro*/}

    <div class="content-wrapper">
      <div class="intro">
        <div class="content-container">
          <div class="intro-text-holder">
            <h1>Мы предоставляем услуги 3 в 1 монтаж, обслуживание и продажа любых кондиционеров.</h1>
            <h2>Позвоните или напишите нам - и мы подберем для вас лучший вариант, исходя из ваших предпочтений.</h2>
            <p>Всегда проще найти и купить в одной компании сразу кондиционер и квалифицированный, профессиональный монтаж! Возьмемся за работу любой сложности. Выгодно, просто и надежно, - вот наш девиз. Не ждите, а звоните! Вы получите <span>абсолютно бесплатную</span> консюльтацию по любому вопросу от мастера, знающего свое дело.</p>
          </div>
        </div>
      </div>

      {/*About*/}

      <div class="about-wrapper">
        <div class="content-container">  
          <div class="about-under">
              <div class="about-holder">
                <div id="about" class="about">
                  <h1 class="ml-4">О нас</h1>
                </div>
                <p>Мы знаем наше дело уже более 10 лет. При этом мы стараемся предлагать нашим клиентам максимально прозрачные, выгодные и простые условия, обеспечивая обширный спекр услуг, во имя комфорта наших клиентов. Качество для нас превыше всего. Предоставляя услуги одновременно по продаже систем кондиционирования помещений, их установке и сервису, мы принимаем на себя все сложности. Трудимся мы, а вы наслаждаетесь нашей работой!</p>
                <p>Мы внимательно выслушиваем пожелания наших клиентов. Даем профессиональные консультации. Беремся за работы любой сложности. К каждому клиенту нам присущь идивидуальный подход.</p>
                <p>Наши главные приимущества: качество, бережность и максимальный комфорт для наших клиентов. Работаем с любыми брендами!</p>
                <p>* Kentatsu TIBA Inverter
                    KSGTI26HZRN1/KSRTI26HZRN1
                    35700₽</p>
              </div>
              <div class="about-holder">
                <div class="img-holder-about">
                  {/*<img src={process.env.PUBLIC_URL + '/brends.png'} alt="brends"/>
                  <video  controls >
                        <source src={process.env.PUBLIC_URL + '/video1.mp4'} type="video/mp4"/>
                  </video>*/}
                  <Inst></Inst>
                </div>
              </div>
          </div>
        </div>
      </div>
      

      {/*Shop*/}
      
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
                  <p>25 000 руб.</p>
                </div>
                <div class="shop-item">
                  <p>Zanussi ZACS-09 HB/N1</p>
                  <p>30 000 руб.</p>
                </div>
                <div class="shop-item">
                  <p>Kentatsu KSGY26HZRN1</p>
                  <p>35 600 руб. руб.</p>
                </div>
              </div>
            </div>
            <div class="shop-img sii-2">
              <div class="shop-relative">
                <div class="shop-item">
                  <p>Shuft SFTHI-09HN1_22Y</p>
                  <p>33 000 руб.</p>
                </div>
                <div class="shop-item">
                  <p>Toshiba RAS-B05CKVG-EE</p>
                  <p>55 000 руб.</p>
                </div>
                <div class="shop-item">
                  <p>Royal Clima RCI-GR28HN</p>
                  <p>43 000 руб.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*Installation*/}

      <div class="installation-wrapper">
        <div class="content-container">
          <div class="installation-under">
            <div id="install" class="installation">
              <h1 class="ml-4">Монтаж</h1>
            </div>
            <p>Кондиционер в жаркий летний день становится незаменимым спутником в комнатах, будь то дом или офис. Однако, установка его самостоятельно может стать настоящей проблемой для неподготовленного человека. Именно поэтому мы предлагаем услуги монтажа кондиционеров любых брэндов, а также за грамотный и быстрый монтаж.</p>
            <p>Мы - это настоящие профессионалы своего дела. Быстро и качественно устанавливаем кондиционеры любых брендов и моделей. Независимо от сложности задачи, мы гарантируем Вам безукоризненное качество работы. После установки техники мы так же производим очистку помещения от строительной пыли и обрезков проводки. Вся работа выполняется с пылесосом!</p>
            <p>Не имеет значения, покупали вы кондиционер у нас или других продавцов. Мы подойдем к вам, когда вам будет удобно и займемся быстрой, качественной установкой уже имеющегося у Вас кондиционера. Мы также предоставляем услугу доставки блоков кондиционирования на объект и готовы работать в режиме экстренных заказов.</p>
            <p>Как дополнительное доказательство качества нашей работы, мы гарантируем нашим клиентам сервисное обслуживание и бесплатную проверку системы в течение года.</p>
            <h3>Стоимость услуги от 9 000 руб.</h3>
          </div>
        </div>
      </div>

      {/*Servece*/}

      <div class="service-wrapper">
        <div class="content-container">  
          <div class="service-under">
              <div class="service-holder">
                
              </div>
              <div class="service-holder">
                <div id="service" class="service">
                  <h1 class="ml-4">Сервис</h1>
                </div>
                <p>У нас Вы также можете заказать профессиональное обслуживание и ремонт кондиционеров любого бренда. Мы обращаем внимание на качество выполняемых работ и знаем все об устройстве систем кондиционирования вдоль и поперек.</p>
                <p>Мы предоставляем широкий перечень услуг, связанных с обслуживанием и ремонтом кондиционеров: от профилактических работ, таких как замена фреона, и технической диагностики до замены деталей и настройки оборудования. Мы выполняем любые виды ремонта, в том числе замену компрессора, ремонт электронных блоков и замену фильтров.</p>
                <p>Мы заботимся о том, чтобы клиенты были довольны нашими услугами и их кондиционеры работали на максимуме возможностей.</p>
                <h3>Cтоимость услуги от 1 000 руб.</h3>
              </div>
          </div>
        </div>
      </div>

      {/*Terms*/}

      <div class="terms-wrapper">
      <div class="content-container">
        <div id="terms" class="terms">
          <h1 class="ml-4">Дополнительная информация</h1>
        </div>
        <div class="tеrms-under">
            <div class="terms-box">
              <b>Доставка</b>
                <p>Доставка кондиционеров осуществляется в день монтажа, но вы можете выбрать другой удобный день по договорённости.</p> 
                <p>Доставка осуществляется только по Нижнему Новгороду и Нижегородской области.</p> 
                <p>Доставка – платная услуга, её условия обсуждаются заранее.</p>
                <p>Интервал доставки: с 8 до 20.</p>
                <p>Минимальная стоимость доставки по Нижнему Новгороду – от 500 рублей</p>
                <p>Минимальная стоимость доставки по Нижегородской области – от 1500 рублей.</p>
            </div>
            <div id="garanty" class="terms-box">
              <b>Гарантия</b>
              <p>Мы даём гарантию на продукцию и монтажные работы – 12 месяцев.</p> 
              <p>Гарантийные и не гарантийные случаи будут прописаны в договоре и в инструкции по эксплуатации изделия, которые выдаются после сдачи проекта.</p>
              <p>Вы получите полную инструкцию в день исполнения работ или раньше.</p>
            </div>
            <div class="terms-box">
              <b>Сроки</b>
              <p>Под каждый проект сроки рассчитываются индивидуально. К примеру, в случае с простой задачей - это примерно 3-8 часов.</p>
              <p>Также любые непредвиденные обстоятельства решаются в течении одного рабочего дня.</p>
            </div>
        </div>
      </div>
    </div>
  </div>

      {/*Contacts*/}

      <div id="rf_up_footer">
        <div class="rf-container">

          <div class="rf_item">
            <p class="like_h2">Свяжитесь с нами сейчас</p>
            <p class="rf_footer_contact_tel_box">
              По всем вопросам, звоните нам:
              <a href="tel:+7 953 415 97 27">+7 953 415 97 27</a>
              с 8:00 до 20:00 по МСК
            </p>
            <p onclick="openModal('#rf-book-up-modal');" class="rf_footer_p_with_icon">
              <img src={process.env.PUBLIC_URL + '/phone-or.svg'} alt="phones" />
              <span>Обратный звонок</span>
            </p>
            <button href="#" onClick={openPlusZ} class="my-fix-button rf-btn rf-btn-primary rf-btn-with-img">
              Вызвать мастера
            </button>
          </div>

          <div class="rf_item">
            <p class="like_h2">Наш адрес</p>
            <p class="rf_footer_p_with_icon">
              <img src={process.env.PUBLIC_URL + '/orange_location.svg'} alt="locations" />
              603155, Нижний Новгород			</p>
            
            <p class="like_h2">Электронная почта</p>
            <p class="rf_footer_p_with_icon">
              <img src={process.env.PUBLIC_URL + '/mail_or.svg'} alt="mails" />
              alexanders-conditioners@bk.ru			</p>
          </div>

        </div>
      </div>

      {/*Footer*/}

      <div class="footer">
        <div class="rf-container">
          <div class="rf_item">
            

          </div>
          <div class="rf_item">
            <div class="rf_row rf_footer_big_categories">
              <div class="rf_big_cat_box rf_secondary">
                <a onClick={scrollHigher} href="#install">
                  Монтаж
                </a>
              </div>
              <div class="rf_big_cat_box rf_primary">
                <a onClick={scrollHigher} href="#service">
                  Обслуживание
                </a>
              </div>
              <div class="rf_big_cat_box rf_third">
                <a onClick={scrollHigher} href="#shop">
                  Кондиционы
                </a>
              </div>
            </div>
            <div class="rf_row rf_footer_menu_box">
              <ul id="menu-footer-menu" class="menu">
                <li onClick={scrollHigher} id="menu-item-1451" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1451"><a href="#about">О нас</a></li>
                <li onClick={scrollHigher} id="menu-item-3087" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-3087"><a href="#terms">Доставка</a></li>
                <li onClick={scrollHigher} id="menu-item-2590" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2590"><a href="#terms">Гарантия</a></li>
              </ul>			  
            </div>
            <div class="rf_row rf_footer_bottom_desc">
              <p>© 2023. «Alexander». Информация, представленная на сайте не является публичной офертой и носит ознакомительный характер. </p>
            </div>
          </div>
          <div class="rf_item rf_footer_contacts">

          </div>
        </div>
      </div>

      {/*Call Master*/}

      <div id="plus-z-window" class="plus-z-window-holder">
        <div class="plus-z-window">
          <span  class="plus-z-window-closer">
            <button onClick={closePlusZ}>
              <img src={process.env.PUBLIC_URL + '/closer.svg'} alt="closer" />
            </button>
          </span>
          <h1>Мы всегда вам рады!</h1>
          <div class="to_phone">
            <a href="tel:+7 953 415 97 27">
              <img src={process.env.PUBLIC_URL + '/phone-or.svg'} alt="mail" />
              <p>+7 953 415 97 27</p>
            </a>
					</div>
					<div class="to_email">
            <a href="mailto:alexanders-conditioners@bk.ru">
              <img src={process.env.PUBLIC_URL + '/mail_or.svg'} alt="phone" />
              <p>alexanders-conditioners@bk.ru</p>
            </a>
					</div>
          <div class="to_viber">
            <a href="viber://chat?number=%2B79534159727">
              <img src={process.env.PUBLIC_URL + '/viberrr.svg'} alt="viber2"/>
              <p>+7 953 415 97 27</p>
            </a>
          </div>
        </div>
      </div>

      {/*Mobile Menu*/}

      <div id="mobile-menu-window-holder" class="mobile-menu-window-holder">
        <div class="mobile-menu-window">
          <span class="mobile-menu-window-closer">
            <button onClick={closeMobileMenu}>
              <img src={process.env.PUBLIC_URL + '/closer.svg'} alt="closer"/>
            </button>
          </span>
            <div class="">
              <a href="#about" onClick={closeMobileMenu}><p>О нас</p></a>
            </div>
            <div class="">
              <a href="#install" onClick={closeMobileMenu}><p>Монтаж</p></a>
            </div>
            <div class="">
              <a href="#service" onClick={closeMobileMenu}><p>Сервис</p></a>
            </div>
            <div class="">
              <a href="#shop" onClick={closeMobileMenu}><p>Продукция</p></a>
            </div>
            <div class="">
              <a href="#terms" onClick={closeMobileMenu}><p>Доставка</p></a>
            </div>
            <div class="">
              <a href="#garanty" onClick={closeMobileMenu}><p>Гарантия</p></a>
            </div>
        </div>
      </div>
		</div>  
  );
}

export default App;
