function on_click() {
    console.log('startclick');

    this.myMethod()
}
function myMethod(){
    console.log('methodODA')

    setInterval(()=>{
        this.counter++;
        console.log(this.counter);
    }, 1000);
}

    function calcClaws(frontPows, hindPows) {
        this.clawstext = this.frontPows + this.hindPows;
        console.log(this.clawstext);
    }
