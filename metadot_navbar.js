metadot_navbar.innerHTML = `
<style>

.metadot-link{
    cursor:pointer;
}

.product-title{
    font-size:14px;
}

.product-item img{
    height:28px;
    width:25px;}

.product-item{
    width: 100%;
    font-weight: 400;
    color: black;
    text-align: inherit;
    background-color: transparent;
    border: 0;
    display:flex;
    max-width: 300px;
}

.product-item p{
    font-size:12px;
    color: #4d4d4d;
    line-height: 13px;
}

.product-item:focus, .product-item:hover {
    color: #16181b;
    text-decoration: none;
    background-color: #e9ecef;
}

.solutions-item{
    font-size:14px;
    color: #4d4d4d;
}

@media all and (min-width: 992px) {
.navbar .nav-item .dropdown-menu{  display:block; opacity: 0;  visibility: hidden; transition:.3s; margin-top:0;  }
/* .navbar .nav-item:hover .nav-link { color: #fff;  } */
.navbar .dropdown-menu.fade-down{ top:80%; transform: rotateX(-75deg); transform-origin: 0% 0%; }
.navbar .dropdown-menu.fade-up{ top:180%;  }
.navbar .nav-item:hover .dropdown-menu { transition: .3s; opacity:1; visibility:visible; top:100%; transform: rotateX(0deg);}
.dropdown-products::before{ content: ''; position: absolute; width: 14px; height: 0; border: 7px solid transparent; border-bottom: 7px solid #fff; top: -14px; left: 9%; -ms-transform: translateX(-50%); transform: translateX(-50%);}
.dropdown-solutions::before{ content: ''; position: absolute; width: 14px; height: 0; border: 7px solid transparent; border-bottom: 7px solid #fff; top: -14px; left: 17%; -ms-transform: translateX(-50%); transform: translateX(-50%);}
.nav-item:hover .dropdown-toggle::after{ transform: rotateZ(180deg); }
}
</style>

<nav class="navbar navbar-expand-lg py-0" style="background-color: #141d2f;">
    <div class="container-lg">
        <a class="navbar-brand" href="https://www.metadot.com/"><img class="d-inline-block align-top" src="./images/metadot-logo-white.png" width="154px" height="28px" alt="metadot logo"></a>
        <!-- <button class="navbar-toggler my-1" type="button" data-toggle="collapse" data-target="#navbarsExample05" aria-controls="navbarsExample05" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button> -->
        <div class="collapse navbar-collapse justify-content-between navbar-dark" id="navbarsExample05" >
            <ul class="navbar-nav" >
                <li class="nav-item dropdown" >
                    <a class=" nav-link metadot-link dropdown-toggle text-white" id="dropdown05" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Products</a>
                    <div class="dropdown-menu dropdown-products p-3 container" aria-labelledby="dropdown05" style="min-width:500px;">
                        <div class="d-flex flex-row">
                            <a class="product-item p-2 col-6 border-right" href="https://montastic.io">
                                <div class="d-flex flex-column ">
                                    <img src="./images/montastic-logo.png" width="75px" height="64px" alt="Montastic logo">                                        
                                </div>
                                <div class="d-flex flex-column ml-2">
                                    <span class="product-title font-weight-bold">Montastic Monitoring</span>
                                    <p>Be the first to know that your website is down!</p>
                                </div>
                            </a>
                            <a class="product-item p-2 col-6" href="https://montastic.io/">
                                <div class="d-flex flex-column ">
                                    <img src="./images/montastic-logo.png" width="49px" height="63px" alt="DasKeyboard logo"> 
                                </div>
                                <div class="d-flex flex-column ml-2">
                                    <span class="product-title font-weight-bold">Montastic Status</span>
                                    <p>The #1 status and incident communication tool. Keep customers and employees informed during downtime to build trust.</p>
                                </div>
                            </a>
                        </div>
                        <div class="d-flex flex-row">
                            <a class="product-item p-2 col-6 border-right" href="https://mojohelpdesk.com/">
                                <div class="d-flex flex-column ">
                                    <img src="./images/mojo-star.svg" width="158px" height="150px" alt="Mojo Helpdesk logo">
                                </div>
                                <div class="d-flex flex-column ml-2">
                                    <span class="product-title font-weight-bold">Mojo Helpdesk</span>
                                    <p>Delight internal and external customers with a ticket tracking & help desk system.</p>
                                </div>
                            </a>
                            <a class="product-item p-2 col-6" href="https://bamzooka.com/">
                                <div class="d-flex flex-column ">
                                    <img src="./images/bamzooka-logo.png" width="192px" height="192px" alt="metadot logo">
                                </div>
                                <div class="d-flex flex-column ml-2">
                                    <span class="product-title font-weight-bold">Bamzooka</span>
                                    <p>Organize repetitive processes into smart checklists.</p>
                                </div>
                            </a>
                        </div>
                        <div class="d-flex flex-row">
                            <a class="product-item p-2 col-6 border-right" href="https://www.daskeyboard.com/">
                                <div class="d-flex flex-column ">
                                    <img src="./images/dk-logo-black.png" width="49px" height="63px" alt="DasKeyboard logo"> 
                                </div>
                                <div class="d-flex flex-column ml-2">
                                    <span class="product-title font-weight-bold">Das Keyboard</span>
                                    <p>Make your fingers happy with the best keyboard in the world.</p>
                                </div>
                            </a>
                        </div>
                    </div>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link metadot-link dropdown-toggle text-white" id="dropdown05" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >Solutions</a>
                    <div class="dropdown-menu dropdown-solutions" aria-labelledby="dropdown05" style="min-width:250px;">
                        <a class="dropdown-item  solutions-item" href="https://montastic.io">Website and online app monitoring</a>
                        <a class="dropdown-item solutions-item" href="https://montastic.io">Status page for your websites and apps</a>
                        <a class="dropdown-item solutions-item" href="https://mojohelpdesk.com/">Customer services & IT support</a>
                        <a class="dropdown-item solutions-item" href="https://bamzooka.com/">Asset Management</a>
                        <a class="dropdown-item solutions-item" href="https://www.daskeyboard.com/">The best keyboard in the world</a>
                    </div>
                </li>

            </ul>
        </div>
    </div>
</nav>
`;
