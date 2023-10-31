// alert("i am linked!")
fetch("/api/pets").then(res=>res.json()).then(data=>{
    // console.log(data)
    data.forEach(pet=>{
        //1. create element
        const petLi = document.createElement("li");
        //2. add content/styles
        petLi.textContent=`${pet.id}. ${pet.name} is a good ${pet.color} ${pet.species}!`;
        //3. append
        document.querySelector("#pets").append(petLi)
    })
}).catch(err=>{
    console.log("womp womp")
    console.log(err);
})