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
                        <a class="dropdown-item" onclick="onmenuLinkClick(this)" href="/mtmcl/main.html">MTMCL</a>
                        <a class="dropdown-item" onclick="onmenuLinkClick(this)" href="#">Minecraft Mods</a>
                        <a class="dropdown-item" onclick="onmenuLinkClick(this)" href="/utau.html">UTAUloid</a>
                    </div>
                </li>
                <li class="nav-item">
                    <a class="nav-link" onclick="onmenuLinkClick(this)" href="/links.html">Links</a>
                </li>
            </ul>
        </div>
        <form class="form-inline">
        <select class="custom-select" id="selectLang" onchange="onLocaleChange(this)">
        <option value="en" selected>English</option>
        <option value="zh-Hans">简体中文</option>
        <option value="zh-Hant">繁體中文</option>
</select>
</form>
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
var c = window.location;

function getLocale() {
    var startInd = c.pathname.indexOf('/');
    return c.pathname.substring(startInd + 1, c.pathname.indexOf('/', startInd + 1));
}

function getLocalizedPage(unlocal, locale) {
	return c.origin + '/' + ((typeof locale !== undefined) ? locale : getLocale()) + unlocal;
}

function onmenuLinkClick(a) {
	a.setAttribute("href", getLocalizedPage(a.getAttribute("href")));
	return true;
}

function onLocaleChange(sel) {
	var page = c.pathname.substring(c.pathname.indexOf('/', 2));
	window.location = getLocalizedPage(page, sel.value);
}

$(function(){
	$("body").prepend(HEADER).append(FOOTER);
	$("#selectLang").val(getLocale());
})