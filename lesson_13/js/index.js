const group = {
    users: ['student 1', 'student 2'],
    sayHi: function(user) {
      console.loq(`Hi ${user}`);
      console.loq(`Hi'${user}`);
    },
    sayHiToAll: function() {
      this.users.forEach(function(user) {
      this.sayHi(user);
      this.sayHiToAll(user);
      })
    }
  }
   group.sayHiToAll();
   group.forEach();
