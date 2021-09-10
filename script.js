const  maxWater = 1800;
const maxCoffe = 300;
class CoffeMachin{    
    water;
    coffee;  
    constructor(water,cofee){
        this.water = water;
        this.coffee = cofee;
    }
    makingCoffe(water,coffe){
        if(this.water -water <=0){
            this.notEnoughWater();
        }else if(this.coffee - coffe <=0){
            this.notEnoughCoffee();
        }else{
            this.water -=water;
            this.coffee -=coffe;
        }  
    }
    notEnoughWater(){
        alert("Не хватает воды! Заполните бак водой.")
    }
    notEnoughCoffee(){
        alert("Не хватает кофе! Заполните кофейный контейнер.")
    }

    espresso(){
        this.makingCoffe(40,10);
                 
    }
    doubleEspresso(){
        this.makingCoffe(80,20);
    }
    americano(){
        this.makingCoffe(200,20);
    }
    fillWater(){
        this.water = maxWater;        
    }
    fillCoffee(){
        this.coffee = maxCoffe;
    }
    
}
 var coffeMachin = new CoffeMachin(maxWater,maxCoffe);
 let iWater = document.querySelector('.amountOfWater');
 let iCoffe = document.querySelector('.amountOfCoffee');
 let diagram1 = document.getElementById('diagram1');
 let diagram2 = document.getElementById('diagram2');


 addEventListener('click',() =>{ 
    iWater.textContent = coffeMachin.water + " ml";
    iCoffe.textContent = coffeMachin.coffee + " g";
    diagram1.style.height = coffeMachin.water/maxWater*100 + "%";
    diagram2.style.height = coffeMachin.coffee/maxCoffe*100 + "%";
    diagram1.textContent = Math.round((coffeMachin.water/maxWater*100)) + "%";
    diagram2.textContent = Math.round((coffeMachin.coffee/maxCoffe*100)) + "%";
 });
 const header = document.getElementById("header")
 header.style.backgroundImage = "url('https://img.freepik.com/free-photo/coffee-beans-top-view-on-a-white-background-space-for-text_176474-5028.jpg?size=626&ext=jpg')"
 header.style.backgroundSize = "100%";

 



