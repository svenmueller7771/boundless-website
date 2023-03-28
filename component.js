class Header extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <nav>
    <div class="topbanner">
      <div class="topbanner-text">
        Free shipping for orders over R1000
      </div>
      <button class="topbanner-button" type="button">
        <span class="material-icons">
          close
        </span>
      </button>
    </div>
    <div class="navbar" id="navbar">
      <div class="navbar-logo">boundless</div>
      <ul class="navbar-menu">
        <li class="navbar-item">
          <a class="navbar-link" href="index.html">Home</a>
        </li>
        <li class="navbar-item">
          <a class="navbar-link" href="products.html">Products</a>
          <div class="dropdown-content" id="dropdown">
            <a href="acoustic-wood-slat-panel.html">Acoustic wood slat panel</a>
            <a href="standing-mirror.html">Standing mirror</a>
            <a href="frame-gallery.html">Frame gallery</a>
            <a href="floating-frames.html">Floating frames</a>
            <a href="lego-coffee-table.html">Lego coffee table</a>
            <a href="custom-tables.html">Live edge tables</a>
            <a href="backgammon-travel.html">Backgammon travel set</a>
            <a href="fine-art-prints.html">Fine art prints</a>
  
          </div>
        </li>
        <li class="navbar-item">
          <a class="navbar-link" href="shop.html">Shop</a>
        </li>
        <li class="navbar-item">
          <a class="navbar-link" href="about.html">About</a>
        </li>
      </ul>
      <div class="navbar-menu-button">
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </div>
      <ul class="navbar-menu" id="navbar-menu-cart">
        <li class="navbar-item">
          <a class="material-icons" id="navbar-link" href="" alt="profile">account_circle</a>
        </li>
        <li class="navbar-item">
          <a class="material-icons" id="navbar-link" href="cart.html" alt="cart">shopping_bag</a>
        </li>
      </ul>

    </div>
  </nav>
    `
  }
}


class Section extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <div class="info-section">
    <div class="info-cards">
      <div class="info-card">
        <div class="material-icons">home_repair_service</div>
        <h3 class="info-heading">Onsite installations</h3>
        <p class="info-p">We're happy to help you achieve your goals. We offer an on-site service fee for installations (Western Cape only).</p>
      </div>
      <div class="info-card">
        <div class="material-icons">local_shipping</div>
        <h3 class="info-heading">Global shipping</h3>
        <p class="info-p">Free shipping for orders greater than R1000. International orders are subject to our <a class="navbar-link" href="terms.html">shipping terms</a>.</p>
      </div>
      <div class="info-card">
        <div class="material-icons">local_florist</div>
        <h3 class="info-heading">Locally made by artisans</h3>
        <p class="info-p">A curated selection of meticulously crafted goods, made locally by artisans in Cape Town.</p>
      </div>
      <div class="info-card">
        <div class="material-icons">forest</div>
        <h3 class="info-heading">Planting trees</h3>
        <p class="info-p">For every item purchased, R50 is donated to the <a class="navbar-link"
          href="https://greenpop.org/">Greenpop
          Foundation</a>.</p>
      </div>
    </div>
  </div>
    `
  }
}


class Footer extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `    
    <footer>
    <div class="footer-container">
      <h5 class="footer-title">The Company</h5>
      <ul class="footer-list">
        <li><a class="footer-text" href="about.html">Our Story</a></li>
        <li><a class="footer-text" href="products.html">Our Collection</a></li>
        <li><a class="footer-text" href="about.html">Our Artisans</a></li>
      </ul>
    <h5 class="footer-title">Customer Service</h5>
    <ul class="footer-list">
      <li><a class="footer-text" href="contact-us.html">Contact Us</a></li>
      <li><a class="footer-text" href="products.html">Shipping & Delivery</a></li>
      <li><a class="footer-text" href="products.html">FAQ</a></li>
      <li><a class="footer-text" href="products.html">Terms & Conditions</a></li>
      <li><a class="footer-text" href="products.html">Privacy Policy</a></li>
    </ul>
  
    <div class="footer-logo">
    <img class="footer-image" src="website-images/Boundless-ST-01.png" alt="boundless logo" width="150px" height="150px">
  </div>
    </div>
    <div class="social-buttons">
      <a class="fa fa-instagram fa-lg" href="https://www.instagram.com/boundless_collective/"></a>
      <a class="fa fa-facebook fa-lg" href="https://www.facebook.com/boundlessinteriors"></a>
  
    </div>
    <p class="trademark">copyright 2022 | boundless | all rights reserved</p>
  </footer>   
    `;
  }
}

customElements.define('global-navbar', Header);
customElements.define('global-footer', Footer);
customElements.define('info-section', Section);
