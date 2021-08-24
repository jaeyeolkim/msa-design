

const func = {
	timer : new function(){},

	init(){
		document.querySelector('.sitemap').querySelector('.btn').addEventListener('click', (e) => {
			document.querySelector('.sitemap').classList.toggle('on');
		}, false);
	},

	indexInit(){
		document.querySelector('.slide').querySelector('.stop').addEventListener('click', (e) => {
			var thisClass =  document.querySelector('.slide').querySelector('.stop').getAttribute('class');

			if(thisClass == 'stop'){
				clearInterval(func.timer);
				console.log('stop');
			} else {
				func.slide();
				console.log('play');
			};

			document.querySelector('.slide').querySelector('.stop').classList.toggle('on');
		}, false);

		var notice = document.querySelector('.notice').querySelectorAll('h4');

		for(var i=0; i<=notice.length-1; i++){
			notice[i].addEventListener('click', (e) => {
				for(var i=0; i<=notice.length-1; i++){
					notice[i].classList.toggle('on', false);
				};
				e.target.classList.toggle('on', true);
			}, false);
		};
		
		var notice02 = document.querySelector('.notice').querySelectorAll('h5');

		for(var i=0; i<=notice02.length-1; i++){
			notice02[i].addEventListener('click', (e) => {
				for(var i=0; i<=notice02.length-1; i++){
					notice02[i].classList.toggle('on', false);
				};
				e.target.classList.toggle('on', true);
			}, false);
		};

		func.slide();
	},

	slide(){
		var num = 0;

		func.timer = setInterval(function(){
			var item = document.querySelector('.slide').querySelectorAll('[data-num]');
			var paging = document.querySelector('.page').querySelectorAll('a');

			if(num < item.length-1){
				num++;
			} else {
				num = 0;
			};
			console.log(num);

			for(var i=0; i<=item.length-1; i++){
				if(num == i){
					item[i].classList.toggle('on', true);
					paging[i].classList.toggle('on', true);
				} else {
					item[i].classList.toggle('on', false);
					paging[i].classList.toggle('on', false);
				};
			};
		}, 5000);
		
	},

}