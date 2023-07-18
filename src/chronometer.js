class Chronometer {
  constructor() {
    // ... your code goes here
  this.currentTime= 0;
  this.intervalId= null;
    }

  start(printTimeCallback) {
    // ... your code goes here
    
      this.intervalId=setInterval(() => {
       this.currentTime++ 
       if(printTimeCallback){  //el if lo he sacado por mis compañeros pero no termino de entenderlo
       return printTimeCallback()
      }
    }, 1000)
      
    
  }

  getMinutes() {
    // ... your code goes here
 return Math.floor(this.currentTime/60);

  }

  getSeconds() {
    // ... your code goes here
    return this.currentTime %= 60;
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
if (value<10){
  return "0" + value
}else {return value.toString()}
  }  //no lo veo si tengo que usar slice()

  stop() {
    // ... your code goes here
clearInterval(this.intervalId)

  }

    reset() {
    // ... your code goes here
    this.currentTime=0;
  }

  split() { //no funciona, me he guiado por el inidce de la act puesto que en este labs estan siendo de muy descriptivos pero no lo saco
    // ... your code goes here
    return this.computeTwoDigitNumber(this.getMinutes, this.getSeconds)    
  }
}

//el 3,4 y 6 lo he sacado porque el mismo enunciado te lo decia 