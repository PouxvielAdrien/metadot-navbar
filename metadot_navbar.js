metadot_navbar.innerHTML = `

<style>

.nav-link{
    cursor:pointer;
    color:white;
}

.product-item img{
    height:28px;
    width:25px;}

.product-item{
width: 100%;
/* clear: both; */
font-weight: 400;
color: white;
text-align: inherit;
background-color: transparent;
border: 0;
display:flex;
}

.product-item p{
font-size:12px;
}


.product-item:focus, .product-item:hover {
color: #16181b;
text-decoration: none;
background-color: #e9ecef;
}

@media all and (min-width: 992px) {
.navbar .nav-item .dropdown-menu{  display:block; opacity: 0;  visibility: hidden; transition:.3s; margin-top:0;  }
.navbar .nav-item:hover .nav-link{ color: #fff;  }
.navbar .dropdown-menu.fade-down{ top:80%; transform: rotateX(-75deg); transform-origin: 0% 0%; }
.navbar .dropdown-menu.fade-up{ top:180%;  }
.navbar .nav-item:hover .dropdown-menu{ transition: .3s; opacity:1; visibility:visible; top:100%; transform: rotateX(0deg);}
}
</style>

<nav class="navbar navbar-expand-lg py-0 navbar-dark " style="background-color: #141d2f;">
<div class="container">
    <a class="navbar-brand" href="https://www.metadot.com/"><img src="https://metadot.com/images/logo_metadot.webp" width="85px" height="15px" alt="metadot logo"></a>
    <button class="navbar-toggler my-1" type="button" data-toggle="collapse" data-target="#navbarsExample05" aria-controls="navbarsExample05" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-between" id="navbarsExample05" >
        <ul class="navbar-nav" >
            <li class="nav-item dropdown" >
                <a class=" nav-link dropdown-toggle text-white" id="dropdown05" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Products</a>
                <div class="dropdown-menu" aria-labelledby="dropdown05" style="background-color: #141d2f; min-width:500px;">
                    <div class="d-flex">
                        <div class="d-flex flex-column">
                            <div class="ml-2">
                                <a class="product-item p-2" href="https://www.daskeyboard.com/">
                                    <div class="d-flex flex-column ">
                                        <img src="https://www.daskeyboard.com/images/das-keyboard-brand-white.png" width="49px" height="63px" alt="DasKeyboard logo"> 
                                    </div>
                                    <div class="d-flex flex-column mt-1 ml-2">
                                        <span class="">DasKeyboard</span>
                                        <p>DasKeyboard is a company ... I write this to see if the reponsiveness is okay</p>
                                </div>
                                </a>
                            </div>
                            <div class="ml-2">
                                <a class="product-item p-2" href="https://bamzooka.com/">
                                    <div class="d-flex flex-column ">
                                        <img src="https://www.bamzooka.com//images/bamzooka-logo-192px.png" width="192px" height="192px" alt="metadot logo">
                                    </div>
                                    <div class="d-flex flex-column ml-2">
                                        <span class="">Bamzooka</span>
                                        <p>DasKeyboard is a company ... I write this to see if the reponsiveness is okay</p>
                                </div>
                                </a>
                            </div>
                            <div class="ml-2">
                                <a class="product-item p-2" href="https://www.daskeyboard.com/">
                                    <div class="d-flex flex-column ">
                                        <img src="https://www.daskeyboard.com/images/das-keyboard-brand-white.png" width="49px" height="63px" alt="DasKeyboard logo"> 
                                    </div>
                                    <div class="d-flex flex-column mt-1 ml-2">
                                        <span class="">DasKeyboard</span>
                                        <p>DasKeyboard is a company ... I write this to see if the reponsiveness is okay</p>
                                </div>
                                </a>
                            </div>
                        </div>

                        <div class="d-flex flex-column">
                            <div class="mr-2">
                                <a class="product-item p-2" href="https://mojohelpdesk.com/">
                                    <div class="d-flex flex-column ">
                                        <img src="https://mojohelpdesk.com/images/mojo-star.svg" width="158px" height="150px" alt="Mojo Helpdesk logo">
                                    </div>
                                    <div class="d-flex flex-column mt-1 ml-2">
                                        <span class="">Mojo Helpdesk</span>
                                        <p>DasKeyboard is a company ... I write this to see if the reponsiveness is okay</p>
                                </div>
                                </a>
                            </div>
                            <div class="mr-2">
                                <a class="product-item p-2" href="https://montastic.io">
                                    <div class="d-flex flex-column ">
                                        <img src="https://montastic.com/images/montastic-logo.png" width="75px" height="64px" alt="Montastic logo">                                        </div>
                                    <div class="d-flex flex-column ml-2">
                                        <span class="">Montastic</span>
                                        <p>DasKeyboard is a company ... I write this to see if the reponsiveness is okay</p>
                                </div>
                                </a>
                            </div>
                            <div class="mr-2">
                                <a class="product-item p-2" href="https://www.daskeyboard.com/">
                                    <div class="d-flex flex-column ">
                                        <img src="https://www.daskeyboard.com/images/das-keyboard-brand-white.png" width="49px" height="63px" alt="DasKeyboard logo"> 
                                    </div>
                                    <div class="d-flex flex-column mt-1 ml-2">
                                        <span class="">DasKeyboard</span>
                                        <p>DasKeyboard is a company ... I write this to see if the reponsiveness is okay</p>
                                </div>
                                </a>
                            </div>
                        </div>
                    </div>
                 </div>
                </li>
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle text-white" id="dropdown05" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >Solutions</a>
                <div class="dropdown-menu" aria-labelledby="dropdown05" style="background-color: #141d2f;">
                <a class="product-item" href="#">Text</a>
                <a class="product-item" href="#">Text</a>
                <a class="product-item" href="#">Text</a>
                </div>
            </li>
        </ul>
    </div>
</div>
</nav>



`;









// getElementById("metadot_navbar").innerHtml("hello");
console.log("coucou");