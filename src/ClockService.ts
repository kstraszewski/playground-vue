import Vue from 'vue';

interface ClockObservable{
  clock: Date
}

class ClockService {
  public clockObservable: ClockObservable = Vue.observable({
    clock: new Date(),
  });

  constructor(){
    setInterval(() => {
      this.clockObservable.clock = new Date();
    }, 1000);
  }
}

export default new ClockService();
