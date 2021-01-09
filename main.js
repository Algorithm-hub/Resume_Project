var navMenuAnchorTag = document.querySelectorAll('.nav-menu a');
console.log(navMenuAnchorTag.length);

for(var i=0;i<navMenuAnchorTag.length;i++)
{
	navMenuAnchorTag[i].addEventListener('click',function(event){
		event.preventDefault();
		var targetSectionId = this.textContent.trim().toLowerCase();
		var targetSection=document.getElementById(targetSectionId);
		console.log(targetSection);
		var interval=setInterval(function(){

			var targetSectionCordinate = targetSection.getBoundingClientRect();
			if(targetSectionCordinate.top<=0)
			{
				clearInterval(interval);
				return;
			}
			window.scrollBy(0,50);
		},50);
	});
}

var progressBars=document.querySelectorAll('.skill-progress > div ');
var skillContainer=document.getElementById('skill-display');
window.addEventListener('scroll',checkScroll);
var animationDone=false;

function initialiseBar(){
	for(let bar of progressBars)
	{
		bar.style.width=0+'%';
	}
}
initialiseBar()

function fillBars(){

	for(let bar of progressBars)
	{
		let maxWidth=bar.getAttribute('data-value');
		console.log(maxWidth);
		let currentWidth=0;
         let interval=setInterval(function(){

         	if( currentWidth> maxWidth)
         	{
         		clearInterval(interval);
         		return;
         	}
         	else
         	{
         		currentWidth++;
         		bar.style.width=currentWidth+'%';
         	}

         },5);
	}

}

function checkScroll(){

	var cordinates = skillContainer.getBoundingClientRect();
	if(!animationDone && cordinates.bottom< window.innerHeight){
		animationDone=true;
		console.log("skill-section-visible");
		fillBars();
	}
	else if(cordinates.bottom> window.innerHeight)
	{
		animationDone=false;
		initialiseBar();

	}

}