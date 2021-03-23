const button = document.getElementById("but1")
    button.addEventListener("click", funcSubmit)  
        function funcSubmit(){
            //Create new div and append to the exisiting container div,
            //give new div class attributes for "createdImages"
            let existingDiv = document.getElementById("createdImages")
            let newDiv = document.createElement('div')
            existingDiv.appendChild(newDiv)
            newDiv.setAttribute("class", "createdImages")
            //Create new image with the background of imageurl provided
            //by user
            let imgBackground = document.getElementById('imageurl').value
            let newImg = document.createElement('IMG');
            newImg.setAttribute("src", imgBackground);
            newImg.setAttribute('width', '400');
            newImg.setAttribute('height', '400');
            newDiv.appendChild(newImg);
            //create new top and bottom text divs and append to existing
            //NEW DIV
            let topDiv = document.createElement('div')
            newDiv.appendChild(topDiv)
            topDiv.setAttribute("class", "topTextDiv")
            let topText = document.createTextNode(document.getElementById('toptext').value)
            topDiv.appendChild(topText)
            let bottomDiv = document.createElement('div')
            newDiv.appendChild(bottomDiv)
            let bottomText = document.createTextNode(document.getElementById('bottomtext').value)
            bottomDiv.setAttribute("class", "bottomTextDiv")
            bottomDiv.appendChild(bottomText)
        }