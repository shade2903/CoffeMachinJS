class CofeMachin{
    maxWatter = 1800;
    maxCoffe = 300;
    watter = 0 ;
     cofee = 0 ;
    // CofeMachin(){
    //     this.watter = 1800;
    //     this.cofee = 300;
    // }
    espresso(){
        // watter =40;
        // cofee =10;
        alert("Ваш эспрессо готов");
        console.log(cofee - 10)

    }
}
const coffeMachin = new CofeMachin();
coffeMachin.espresso();