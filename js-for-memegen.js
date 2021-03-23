const button = document.getElementById("but1")
    button.addEventListener("click", funcSubmit)  
        function funcSubmit(){
            let imgBackground = document.getElementById('imageurl').value
            console.log('hello')
            let newDiv = document.createElement('IMG');
            newDiv.setAttribute("src", imgBackground);
            newDiv.setAttribute('width', '400');
            newDiv.setAttribute('height', '400');
            document.body.appendChild(newDiv);
        }