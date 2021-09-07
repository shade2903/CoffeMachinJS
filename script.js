const  maxWater = 1800;
const maxCoffe = 300;
let water = maxWater;
let coffee = maxCoffe; 
class CoffeMachin{    
    water;
    coffee;
  
    // constructor(){
    //     this.water = this.maxWatter;
    //     this.coffee = this.maxCoffe;
    // }
    espresso(){
        water -=40;
        coffee -=10;
        console.log(`${water},${coffee}`);
         
        
    }
    doubleEspresso(){
        this.espresso();
        this.espresso();
        
    }
    americano(){
        this.doubleEspresso();
        water -=120;
        console.log(`${water},${coffee}`);     
        
    }
    fillWater(){
        water = maxWater;
        
    }
    fillCoffee(){
        coffee = maxCoffe;
    }

}
 var coffeMachin = new CoffeMachin();
 let iWater = document.querySelector('.amountOfWater');
 let iCoffe = document.querySelector('.amountOfCoffee');
 let dw = document.querySelector('.diagram');
dw.hight = 300;

 addEventListener('click',() =>{ //button
    iWater.textContent = water + " ml";
    iCoffe.textContent = coffee + " g";
    dw.style.height += 100;
 });
 


