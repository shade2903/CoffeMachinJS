const  maxWater = 1800;
const maxCoffe = 300;
class CoffeMachin{    
    water;
    coffee;  
    constructor(water,cofee){
        this.water = water;
        this.coffee = cofee;
    }
    espresso(){
        if(this.water -40 <=0){
            this.notEnoughWater();
        }else if(this.coffee - 10 <=0){
            this.notEnoughCoffee();
        }else{
            this.water -=40;
            this.coffee -=10;
        }
             
         
        
    }
    doubleEspresso(){
        this.espresso();
        this.espresso();
        
    }
    americano(){
        this.doubleEspresso();
        if(this.water - 120 <=0){
            this.water -=120;
        }            
        
    }
    fillWater(){
        this.water = maxWater;
        
    }
    fillCoffee(){
        this.coffee = maxCoffe;
    }
    notEnoughWater(){
        alert("Не хватает воды! Заполните бак водой.")
    }
    notEnoughCoffee(){
        alert("Не хватает кофе! Заполните кофейный контейнер")
    }

}
 var coffeMachin = new CoffeMachin(maxWater,maxCoffe);
 let iWater = document.querySelector('.amountOfWater');
 let iCoffe = document.querySelector('.amountOfCoffee');
 let diagram1 = document.getElementById('diagram1');
 let diagram2 = document.getElementById('diagram2');
 


 addEventListener('click',() =>{ //button
    iWater.textContent = coffeMachin.water + " ml";
    iCoffe.textContent = coffeMachin.coffee + " g";
    diagram1.style.height = coffeMachin.water/maxWater*100 + "%";
    diagram2.style.height = coffeMachin.coffee/maxCoffe*100 + "%";
 });
 


