

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

		func.slide();
	},

	slide(){
		func.timer = setInterval(function(){
			var item = document.querySelector('.slide').querySelectorAll('[data-num]');
			var paging = document.querySelector('.page').querySelectorAll('a');

			for(var i=0; i<=item.length-1; i++){
				var itemNum = Number(item[i].getAttribute('data-num'));

				if(itemNum > 1){
					item[i].setAttribute('data-num', itemNum-1);
				} else {
					item[i].setAttribute('data-num', 3);
				};

				if(itemNum == 2){
					paging[i].classList.toggle('on', true);
				} else {
					paging[i].classList.toggle('on', false);
				};
			};
		}, 5000);
		
	},

}