
import { observable, makeObservable, action, computed, runInAction } from 'mobx';


const baseUrl = "http://localhost:8787";

class AppointmentsStore {
  meeting = {
    id: "",
    serviceType: "",
    dataTime: "",
    clientName: "",
    clientPhone: "",
    clientEmail: ""
  };
  count = 1;
  appointmentsArr = [];
  isClickAppointment = false;
  isAddAppointment =false;
  isSameDate=false;
  isSucessed=false;
  
  constructor() {
    makeObservable(this, {
      meeting: observable,
      appointmentsArr: observable,
      isClickAppointment: observable,
      isAddAppointment: observable,
      isSameDate:observable,
      count: observable,
      isSucessed:observable,
      getAppointments: action,
      addAppointments: action
    })
    this.getAppointments();
  }

  async getAppointments() {

    const res = await fetch(baseUrl + "/appointments");
    console.log(res);
    let data = await res.json();
    console.log("appointments-arr:", this.appointmentsArr);


    

    const compareDates = (a, b) => new Date(a.date) - new Date(b.date);

   // Sort meetings based on date order (today, future, past)
   data.sort((a, b) => {
       const dateA = new Date(a.dateTime).getDate();
       const dateB = new Date(b.dateTime).getDate();
       const today = new Date().getDate();
   
       if (dateA === today) return -1; // Today's meeting first
       if (dateA > today && dateB !== today) return -1; // Future meetings next
       return compareDates(a, b); // Sort by date for future and past meetings
   })
  //  data.array.forEach((element) => {
  //   {element.id =this.count++};
  //  });

   this.appointmentsArr = data;

  }

  async addAppointments(serviceType,clientName,clientPhone, clientEmail,dateTime) {
    /* id */

    const res = await fetch(baseUrl + "/appointment", {
      method: 'POST',
      body: JSON.stringify( {serviceType, clientName, clientPhone, clientEmail, dateTime}),
      headers: { "Content-Type": "application/json" }
    })


    this.getAppointments();
    if (res.status === 200) { 
      console.log("הצלחתי להוסיף פגישה לשרת");
     this.count ++; 
      console.log("status of addAppointment:", res.status);

         this.isSucessed=true;
      //  this.appointmentsArr = [...this.appointmentsArr,{count,serviceType, dateTime,clientName,clientPhone,clientEmail}]
      
      //this.appointmentsArr.push({count,serviceType, dateTime,clientName,clientPhone,clientEmail});
      //this.appointmentsArr = data;
      

      //   this.appointmentsArr=[...this.appointmentsArr,{meeting}];

      //console.log({appointmentsArr});
    }
    else if(res.status===400)
    {
     this.isSameDate=true;
    }
  }




}
export default new AppointmentsStore();




// const compareDates = (a, b) => new Date(a.date) - new Date(b.date);

// // Sort meetings based on date order (today, future, past)
// data.sort((a, b) => {
//     const dateA = new Date(a.dateTime).getDate();
//     const dateB = new Date(b.dateTime).getDate();
//     const today = new Date().getDate();

//     if (dateA === today) return -1; // Today's meeting first
//     if (dateA > today && dateB !== today) return -1; // Future meetings next
//     return compareDates(a, b); // Sort by date for future and past meetings













// // console.log('get-meeting:60',this.list);
// //console.log('get-meeting:59',JSON.parse(this.list) );
// console.log("id appointment: ", IDcnt)
// let arr = this.list.slice(0, this.list.length).sort(({ dateTime: a }, { dateTime: b }) => a < b ? 1 : a > b ? -1 : 0);
// // const filtered=arr.filter((i)=>i.dateTime==Date.getDay())
// //arr = arr.filter(({dateTime:a= Date.now()},{dateTime:b})=>a<b?1:a>b?-1:0);
// const data = arr.slice(0, this.list.length).map(i => ({ id: IDcounter(), ...i }));
// console.log("id appointment after: ", IDcnt)

// const compareDates = (a, b) => new Date(a.date) - new Date(b.date);

// // Sort meetings based on date order (today, future, past)
// data.sort((a, b) => {
//     const dateA = new Date(a.dateTime).getDate();
//     const dateB = new Date(b.dateTime).getDate();
//     const today = new Date().getDate();

//     if (dateA === today) return -1; // Today's meeting first
//     if (dateA > today && dateB !== today) return -1; // Future meetings next
//     return compareDates(a, b); // Sort by date for future and past meetings
// });
// //AFTER SORTING THE MEETINGS--------------------------------
// // const meeting = {
// //     id: "758",
// //     serviceType: "11",
// //     dateTime: "2021-06-20T10:00:00.000Z",//מבנה של תאריך ושעה סטנדרטי בjs
// //     clientName: "אבי כהן",
// //     clientPhone: "050-1234567",
// //     clientEmail: "m@m.com",
// // };
// //------ ARRANGE THE ARRAY FROM NEW ------
// var newArray = [];
// for (var i = 0; i < data.length; i++) {
//     newArray[i] = {
//         id: i,
//         serviceType: GetServiceById(data[i].serviceType),
//         date: ExtractDate((data[i].dateTime)),
//         time: ExtractTime((data[i].dateTime)),
//         clientName: data[i].clientName,
//         clientPhone: data[i].clientPhone,
//         clientEmail: data[i].clientEmail,
//         IsOver: checkDateStatus(data[i].dateTime)

//     }




// }


// // console.log('get-meeting:59',data);
// //data.sort()//(app)=>{app.dateTime}
// return newArray;
// }







// //  get getMeetings() {
       
// //     this.meetingsList.forEach(element => {

// //      console.log("element@: ", element);
// //      console.log("idCounter@: ", idCounter);
// //      element.id = ++idCounter;
// //  });

// //  const data = this.meetingsList;
// //  return data;

  
// //   data = data.filter(x=> new Date(x.dateTime).getDate() >= new Date().getDate());

// //   const compareDates = (a, b) => new Date(a.date) - new Date(b.date);

// //   // Sort meetings based on date order (today, future, past)
// //   data.sort((a, b) => {
// //       const dateA = new Date(a.dateTime).getDate();
// //       const dateB = new Date(b.dateTime).getDate();
// //       const today = new Date().getDate();

// //       if (dateA === today) return -1; // Today's meeting first
// //       if (dateA > today && dateB !== today) return -1; // Future meetings next
// //       return compareDates( b,a); // Sort by date for future and past meetings
// //   });

// //   data.forEach(element => {element.id = ++idCounter;});
  
// //   return data;
// // }

// // async addMeeting(meeting) {

// //   try {
// //       console.log(meeting);
// //       // let newMeeting = { ...meeting}
// //       meeting.id = `${++idCounter}`;
// //       const res = await fetch(this.baseUrl, {
// //           method: 'POST',
// //           headers: {
// //               'Content-Type': 'application/json'
// //           }, body: JSON.stringify(meeting)
// //       });

// //       runInAction(() => {
// //           if (res.status == 200) {
// //               this.meetingsList = { ...this.meetingsList, newMeetingeeting }
// //               console.log("meetingList: ", this.meetingsList)
// //               //alert("The appointment was successfully set!  Thank you for contacting our services!")
// //           }
// //           else if (res.status == 400) {
// //               alert("Error! The time you requested is not available...")
// //           }
// //       })

// //       console.log(res);

// //   }
// //   catch (error) {
// //       console.log(error)
// //   }
// // }

// // get getMeetingsHistory(){

// //   let data = this.meetingsList.slice(0, this.meetingsList.length);
  
// //   data = data.filter(x=> new Date(x.dateTime).getDate() < new Date().getDate());

// //   const compareDates = (a, b) => new Date(a.date) - new Date(b.date);

// //   // Sort meetings based on date order (today, future, past)
// //   data.sort((a, b) => {
// //       const dateA = new Date(a.dateTime).getDate();
// //       const dateB = new Date(b.dateTime).getDate();
// //       const today = new Date().getDate();

// //       if (dateA === today) return -1; // Today's meeting first
// //       if (dateA > today && dateB !== today) return -1; // Future meetings next
// //       return compareDates(b ,a); // Sort by date for future and past meetings
// //   });

// //   data.forEach(element => {

// //       console.log("element@: ", element);
// //       console.log("idCounter@: ", idCounter);
// //       element.id = ++idCounter;
// //   });
// //   return data;


// //   // const now = new Date();
// //   // console.log("now ",now);
// //   // let pastMeetings = this.meetingsList.filter(x => x.dateTime < now);
// //   // console.log("past: ",pastMeetings);
// //   // return pastMeetings.sort((a,b)=> b.dateTime - a.dateTime);
// // }

// // get getNextMeetings(){
// //   const now = new Date();
// //   let nextMeetings =  this.meetingsList.filter(x => x.dateTime >= now);
  
// //   return nextMeetings.sort((a,b)=> a.dateTime - b.dateTime);
// // }
