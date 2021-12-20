const menu = document.querySelector(".menu-icon");

const handlePress = () => {
	[...menu.children].map((element,index) => {
		if(!element.classList.contains(`animate-line-${index}`)){
			element.classList.remove(`animate-line-rev-${index}`)
			element.classList.add(`animate-line-${index}`)			
		}else{
			element.classList.remove(`animate-line-${index}`)
			element.classList.add(`animate-line-rev-${index}`)	
		}		
	})
};

menu.addEventListener("click", handlePress);