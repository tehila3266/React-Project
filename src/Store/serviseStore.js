import { observable, makeObservable, action, computed, runInAction } from 'mobx';



const baseUrl = "http://localhost:8787";

class ServicesStore {

  servicesArr = [{ name: "new born", duratoin: "1", price: "1000",description: "sweet pictures for your baby" },
  { name: "smash cake", duratoin: "2", price: "1300", description: "amazing pictures!!!!" },
  { name: "chalake", duratoin: "4", price: "3000", description: "picture of chalake childern in sale!!!" },
  { name: "parties", duratoin: "8", price: "8000" ,description: "vides and pictures of parties of schools birthDay and other" }];

  isClickServices = false;
  isAdmin = false;

  constructor() {
    makeObservable(this, {
      servicesArr: observable,
      addService: action,
      getServices: action,
      getList: computed,
      isClickServices: observable,
      isAdmin: observable
    }
    )
    //  this.initData()
    ///////////למה מחלקים את הסטור לשירות ופגישה ולא למנהל ולקוח איך נדע לפי מה לחלק את הסטור :שאלה 

  }
  async addService({ name, duratoin, price ,description}) {
    const services = await this.getServices();

    // try{
    if (!services?.find((service) => service.name === name)) {


      console.log(name, duratoin, price,description);
      const res = await fetch(baseUrl + "/service", {
        method: 'POST',
        body: JSON.stringify({ name, duratoin, price ,description}),
        headers: { "Content-Type": "application/json" }
      });
      // console.log(res.json())
      // }catch(error){
      // console.error("the service is already exisit");
      // }

      console.log("add-post")
      //console.log(res.json().data);
      console.log("finish")
      //const data = await res.json();
      runInAction(() => {
        if (res.status === 200) {
          // conosle.log("status-is:",res.status)
          // newService.id = this.servicesArr.length++;//שאלה :אפשר לעשות לנגס בלי לעדכן וליצור אותו
        //  this.servicesArr.push({ name, duratoin, price,description }); //בהתחלה זה עבד -לבדוק אם זה נכון לעשות ככה או
          // this.servicesArr=[...this.servicesArr,{name,price,duratoin,description}]// או שצריך לעשות ככה
          console.log("this.servicesArr:",this.servicesArr);
          this.getServices();
        }
        else {

        }
      })

      //לעשות שליחה  לפונקציה get
      //this.initData()
      // newService.id = this.servicesArr.length++;//שאלה :אפשר לעשות לנגס בלי לעדכן וליצור אותו
      // this.servicesArr.push(newService);
      // this.servicesArr=[...this.servicesArr,{newService }]


    }
  }

  initData()//לבדוק אם צריך async
  {
    console.log("אני נמצא באיניט");
    //for (let index = 0; index < this.servicesArr.length; index++) {
    //  addService(servicesArr[index])
    //}
    this.servicesArr.map((s) => {
      console.log("אני נמצא באיניט");
      this.addService(s)
    });
    // this.servicesArr= res.json();
  }

  async getServices() {
    const res = await fetch(baseUrl + "/services");
    console.log(res);
    const data = await res.json();
     this.servicesArr = data;
    console.log("service-arr", this.servicesArr)
    return data;
  }

  get getList() {
    return this.servicesArr;
  }

} export default new ServicesStore();
