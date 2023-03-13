const createNav = () => { 
    let nav = document.querySelector('.navbar');

    nav.innerHTML=`

    <div class="nav-logo">
    <img src = "images/logo.png" class="brand-logo" alt="">
    <div class="nav-options">
        <div class="search">
            <input type="text" class="search_box" placeholder="Search Products, Brand, Categories">
            <button class="search_btn">Search</button>
        </div>
        <a href="#"><img src="images/user.png" alt=""></a>
        <a href="#"><img src="images/cart.png" alt=""></a>
    </div>
</div>
<ul class="links_container">
    <li ckass="link_option"><a href="#" class="link">Home</a></li>
    <li ckass="link_option"><a href="#" class="link">Men</a></li>
    <li ckass="link_option"><a href="#" class="link">Women</a></li>
    <li ckass="link_option"><a href="#" class="link">Kids</a></li>
    <li ckass="link_option"><a href="#" class="link">Acessories</a></li>
</ul>
    `;
}

createNav();

