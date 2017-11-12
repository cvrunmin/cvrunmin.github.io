const HEADER = `<div class="container-fluid">
    <nav class="navbar navbar-expand-md navbar-light fixed-top"
         style=" background: linear-gradient(rgba(37, 136,92,1) 0%, rgba(37, 136, 92, 1) 85%, rgba(255,255,255,0) 100%)">
        <span class="navbar-brand mb-0 h1">cvrunmin's OpenSpace</span>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link disabled" href="#">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link disabled" href="#">About</a>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown"
                       aria-haspopup="true" aria-expanded="false">Pieces</a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <a class="dropdown-item" href="/mtmcl/main.html">MTMCL</a>
                        <a class="dropdown-item" href="#">Minecraft Mods</a>
                        <a class="dropdown-item" href="/utau.html">UTAUloid</a>
                    </div>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/links.html">Links</a>
                </li>
            </ul>
        </div>
    </nav>
</div>`;
const FOOTER = `<footer>
    <div class="container">
        <div class="row">
            <div class="col-2 mx-auto text-center">
                <p class="text-muted">Copyright &copy; cvrunmin</p>
            </div>
        </div>
    </div>
</footer>`;
$(function(){
	$("body").prepend(HEADER).append(FOOTER)
})