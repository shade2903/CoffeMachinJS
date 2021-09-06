const  maxWatter = 1800;
const maxCoffe = 300;
let watter = maxWatter;
let cofee = maxCoffe; 
class CofeMachin{    
    
  
    // CofeMachin(){
    //     this.watter = this.maxWatter;
    //     this.cofee = this.maxCoffe;
    // }
    espresso(){
        watter -=40;
        cofee -=10;
        console.log(`${watter},${cofee}`);
         
        
    }
    doubleEspresso(){
        this.espresso();
        this.espresso();
        
    }
    americano(){
        this.doubleEspresso();
        watter -=120;
        console.log(`${watter},${cofee}`);     
        
    }
    fillWatter(){
        watter = maxWatter;
        
    }
    fillCoffee(){
        cofee = maxCoffe;
    }

}
 var coffeMachin = new CofeMachin();
 let iWatter = document.querySelector('.amountOfWatter');
 let iCoffe = document.querySelector('.amountOfCoffee');

 addEventListener('click',() =>{ //button
    iWatter.textContent = watter + " ml";
    iCoffe.textContent = cofee + " gm";
 });
 


