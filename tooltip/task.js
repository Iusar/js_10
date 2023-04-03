const toolTips = Array.from(document.getElementsByClassName("has-tooltip"))

toolTips.forEach(hintToOpen => {

        hintToOpen.addEventListener("click",  (event) => {

            hintToClose = document.querySelector('.tooltip_active')

            if (hintToClose != null) {
                hintToClose.remove()
            }
            
            let newDiv = document.createElement('div')

                newDiv.classList.add('tooltip')
                newDiv.classList.add('tooltip_active')
                newDiv.setAttribute('style', `left: ${Math.round(hintToOpen.getBoundingClientRect().left)}px; top: ${Math.round(hintToOpen.getBoundingClientRect().bottom)}px`)
                newDiv.innerHTML = hintToOpen.getAttribute('title')

                hintToOpen.append(newDiv);       

            event.preventDefault();
    })
})
