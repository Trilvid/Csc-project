function hideLoader () {
    document.getElementById('loaderx').style.display="none"
}

window.onload = () =>{
  hideLoader()
}

// setTimeout(() => {
//     hideLoader();   
// }, 1000);

// to display the dropdown menu
document.getElementById('menu-icon').addEventListener('click', ()=>{
  const x = document.getElementById('sm')

  if (x.style.display === 'none') {
    x.style.display='flex';
    console.log('showed ok');
  }
  else{
    x.style.display='none'
    console.log('failed');
  }
})


// adding color to the nav bar 
function handleScroll() {
    const navbar = document.getElementById("navbar");
    const scrolledClass = "scrolled-header";
    
    if (window.pageYOffset > 500) {
      navbar.classList.add(scrolledClass);
    } 
    else {
      navbar.classList.remove(scrolledClass);
    }
  }
  
  window.addEventListener("scroll", handleScroll);
  