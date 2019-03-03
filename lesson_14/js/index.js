const user = {
    name: "John Smith",
    sayHi: function() {
      alert(this.name);
      alert(this.name);
    },
    timeoutSayHi: function() {
    setTimeout(this.sayHi, 1000);  
    }
   };
   user.sayHi();
   user.timeoutSayHi();
   user.setTimeout();
   
