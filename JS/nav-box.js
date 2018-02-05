var btn = document.querySelector('.menu-btn-icon');
var menu = document.querySelector('.nav-container-list');
var menuIsCollaspe = false;

btn.onclick = function () {
	menuIsCollaspe = !menuIsCollaspe;
	if (menuIsCollaspe) {
		menu.style.display = 'none';
		btn.classList.remove('btn-icon-close');
		btn.classList.add('btn-icon-menu');
	} else {
		menu.style.display = 'block';
		btn.classList.remove('btn-icon-menu')
		btn.classList.add('btn-icon-close')
	}
}

if(window.matchMedia) {
	var mql = window.matchMedia("(min-width: 480px)");
	mql.addListener(mediaChangeHandler);
	mediaChangeHandler(mql);
} else {
	window.addEventListener('resize', function () {
		var innerWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
		mediaChangeHandler(innerWidth>=480? {matches: true}:{matches:false})
	},false)
}

function mediaChangeHandler(mql) {
	if (mql.matches) {
		menu.style.display = '';
	}
	else {
		if (menuIsCollaspe) {
			menu.style.display = 'none'
		} else {
			menu.style.display = ''
		}
	}
}
