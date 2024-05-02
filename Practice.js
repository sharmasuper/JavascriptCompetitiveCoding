//session storage


// sessionStorage.getItem("name")
// sessionStorage.clear()
// sessionStorage.setItem('name','harry')
// sessionStorage.removeItem("name")

localStorage.setItem("name","Mohit")
localStorage.setItem("names","Harry2")
localStorage.setItem("names","ms")
Window.onstorage = (e) =>{
  
   alert("changed")
   console.log(e)
}
//jab hum value change karaigai to yai call hoga

