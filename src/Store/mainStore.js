import { observable, makeObservable, action, runInAction } from 'mobx';


const baseUrl = "http://localhost:8787"

class MainStore {

  businessDetails = {}; 
  isClickBussinesData=false;
  isLogin = false;
  degel = true;
  isSingin = false;
  isClickLogIn=false;
  tempBusinessData = { name: "Take a picture", address: "hoshea 12 bnei brak ", phone: "03-5513333",  owner: "stam",  logo: "url פה צריך לשים ", description: "blaBlaBla" };
  constructor() {
    makeObservable(this, {
      businessDetails: observable,
      isClickBussinesData:observable,
      isLogin: observable,
      isSingin: observable,
      isClickLogIn:observable,
      degel: observable,
      tempBusinessData :observable,//משתנה שמקשיב לעידכון הנתונים של בעל העסק
      checkLogin: action,//פונקצית אימות סיסמא ושם משתמש מול השרת
      saveDetails: action,//פונקציית שמירת הפרטים של בעל העסק
      // initDetails: action,
      getBusinessData: action
    })
    //this.saveDetails()
    //this.initDetails()
  }



  async checkLogin({name, password}) {//???????????????????????    axios.get() ומתי ב fetch מתי משתמשים ב 
    const res = await fetch(baseUrl + "/login", {
      method: 'POST',
      body: JSON.stringify({ name, password }),
      headers: { "Content-Type": "application/json" }
    });
    console.log({name, password});
    runInAction(() => {
   
      res.status===200 ? this.isLogin=true :  this.degel=false
    })
    console.log("status ",res.status);

  }


  // async initDetails() {
  //   const res = await fetch(baseUrl + "/businessData")
  //   console.log("initDetails")
  //   console.log(res)
  //   runInAction(() => {
  //     tempBusinessData = res.json();
  //   })
  // }

  async saveDetails({name,address,phone,owner,logo,description}) {
    const res = await fetch(baseUrl + "/businessData", {
      method: 'POST',
      body: JSON.stringify({name,address,phone,owner,logo,description}),
      headers: { "Content-Type": "application/json" }
    });
       if(res.status===200)
       {
         this.getBusinessData();

       }

  }

  //  initBusinessData()
  // {
  //   this.saveDetails(this.tempBusinessData);
  // }

  async getBusinessData()
  {
    const res= await fetch(baseUrl +"/businessData");
    console.log("getBusinessData:" +res)
    const data = await res.json();
   
    console.log("tempBusinesData:", this.tempBusinessData);
      this.tempBusinessData = data;
      return data;
  }

 async  initBusinessData()
  {
 await this.saveDetails(this.tempBusinessData);
    // localStorage.setItem(saveDetails);
  }

} export default new MainStore();


