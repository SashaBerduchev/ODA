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

