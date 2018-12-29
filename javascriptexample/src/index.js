const person = {
  talk() {
    const self = this;
    setTimeout(function() {
      console.log("self", self);
    }, 1000);
    console.log(this);
  }
};

person.talk();



const colors = ['red', 'green', 'blue'];
colors.map(function(color) {
    return '<li>' + color + '</li>';
})