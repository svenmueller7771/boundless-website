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

          <!-- <a class="navbar-link" href="products.html">Products</a> -->
          <a href="products.html"><button class="navbar-dropdown-button">Products</button></a>
          <div class="dropdown-content">
            <a href="frame-gallery.html">Frame gallery</a>
            <a href="floating-frames.html">Floating frames</a>
            <a href="standing-mirror.html">Standing mirror</a>
            <a href="acoustic-akupanels.html">Acoustic akupanels</a>
            <a href="lego-coffee-table.html">Lego coffee table</a>
            <a href="backgammon-travel.html">Backgammon travel set</a>
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
    </div>
  </nav>
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
    <p class="trademark">Copyright © 2022 | boundless | All rights reserved</p>
  </footer>   
    `;
  }
}

customElements.define('global-navbar', Header);
customElements.define('global-footer', Footer);

