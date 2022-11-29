window.onload = function () {
    function clicked() {
        console.log('the button was clicked')
    }
    console.log('the document was loaded')
    
    
    var m1 = document.getElementById('m1')

    const submitBtn = document.getElementById("submitBtn");

    submitBtn.addEventListener("click",()=>{
        submitBtn.innerText = "Successfully Submitted";
        
        const timeout = setTimeout(()=>{
            submitBtn.innerText = "Submit Now";
        },3000)

    })
    
    m1.addEventListener('mouseover', function () {
        console.log("clicked on container2")
    })
    m1.addEventListener('mouseout', function () {
        console.log("clicked on container3")
    })
    m1.addEventListener('mouseup', function () {
        console.log("clicked on container4")
    })
    m1.addEventListener('mousedown', function () {
        console.log("clicked on container5")
    })
  

}    
