let obj01 = {
  name: "Sahil",
  detail: {
    lName: "khan",
    getName: function () {
      console.log(this.name + this.lName);
    },
  },
};

obj01.detail.getName();
