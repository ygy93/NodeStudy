{
  let num;
  function hello(num) { // function 에서 this. 으로 하면 글로벌변수로 됨
    this.num = num;
    console.log(num);
    // console.log(this);
  }
  //console.log(num);
  hello(100);
  console.log(num);


  class Test { // class 에서 this. 은 로컬변수로 됨
    constructor(name) {
      this.name = name;
      console.log(this);
    }
  }
  const t = new Test('hong');
}