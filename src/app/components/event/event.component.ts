import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})

export class EventComponent implements OnInit {



	
events=[
[1, 'концерт', '01.09.2021','12:00', 59, 'Lorem ipsum dolor.',3,3,false,true],
[2,'мюзикл','10.12.2021','18:30',25,'Obcaecati facere quod assumenda ullam cupiditate sed veritatis veniam, sunt minima aperiam commodi aspernatur nemo voluptatibus at perferendis dignissimos voluptate sit, tempora.',10,10,false,true],
[3, 'театр','15.10.2022','15:00',150,'Obcaecati facere quod assumenda ullam cupiditate sed veritatis veniam.',1,1,false,true],
[4,'кино','18.09.2021','10:00',59,'Lorem ipsum dolor sit amet consectetur adipisicing elit.',50,50,false,true],
[5,'опера','30.12.2021','17:15',25,'Obcaecati facere quod assumenda ullam cupiditate sed veritatis veniam, sunt minima aperiam commodi aspernatur nemo voluptatibus at perferendis dignissimos voluptate sit, tempora.',5,5,false,true],
[6, 'мюзикл','05.11.2022','19:00',150,'Obcaecati facere quod assumenda ullam cupiditate sed veritatis veniam.',250,250,false,true],
[7, 'театр','05.11.2022','19:00',150,'Obcaecati facere quod assumenda ullam cupiditate sed veritatis veniam.',10,10,false,true],
[8, 'цирк','05.11.2022','19:00',150,'Obcaecati facere quod assumenda ullam cupiditate sed veritatis veniam.',25,25,false,true],
[9, 'опера','05.11.2022','19:00',150,'Obcaecati facere quod assumenda ullam cupiditate sed veritatis veniam.',15,15,false,true],
[10, 'концерт','05.11.2022','19:00',150,'Obcaecati facere quod assumenda ullam cupiditate sed veritatis veniam.',5,5,false,true]
];


tickets=new Array();

ticket_id:number=0;

sold_tickets_count:number=1;

event_ticket_avaible:number=0;






  constructor() { }




  ngOnInit(): void {
  }


getAvaibleTickets(event_id:number)
{

  let event_ticket_total = +this.events[event_id-1][6]; 

  let sold_tickets_count=0; 
  let event_ticket_avaible=0;

  this.tickets.forEach(function(value)
  {
    if(value[1]==event_id)
    {
      
       if(value[3]==true) 
       {
        sold_tickets_count++;
       }
      //console.log(value[3]);
     
    }
  });
  


   event_ticket_avaible=event_ticket_total-sold_tickets_count;


  return event_ticket_avaible;


}
  

  SellTicket(ticket_id:number)  
  {

    let event_id = +this.events[ticket_id][0];

    let event_ticket_avaible=this.getAvaibleTickets(event_id);

    if(event_ticket_avaible==1) this.events[event_id-1][9]=false;
    
    if(event_ticket_avaible>=1) 
    {
      this.ticket_id++;
      let tickets_detail=new Array();
      tickets_detail[0]=this.ticket_id;
      tickets_detail[1]=event_id;
      tickets_detail[2]=this.events[event_id-1][1];
      tickets_detail[3]=true; //Status
      this.tickets.push(tickets_detail);
      //console.log(tickets_detail);
    }
    else this.events[event_id-1][9]=false;         
   
    event_ticket_avaible=this.getAvaibleTickets(event_id);
    this.events[event_id-1][7]=event_ticket_avaible;
  }


  showEdit(i:number)  
  {
    this.events[i][8] =! this.events[i][8];
  }

  
  CheckTickets(i:number) 
  {
     
    let event_id=+this.events[i][0];
    let event_ticket_avaible=this.getAvaibleTickets(event_id);
    this.events[i][7]=event_ticket_avaible;

    //alert(this.events[i][7]);
     if(this.events[i][7]>0) this.events[i][9]=true;
     if(this.events[i][7]<0) this.events[i][9]=false;


  }



  ReturnTicket(ticket_id:number)
  {

     
   // let event_id=0;
   ticket_id--;
    let event_id = this.tickets[ticket_id][1];
     

    this.tickets[ticket_id][3]=false;
    //this.tickets[ticket_id][1]='';
    let  event_ticket_avaible=this.getAvaibleTickets(event_id);
    //console.log(event_ticket_avaible);
    this.events[event_id-1][7]=event_ticket_avaible;
    if(event_ticket_avaible>0) this.events[event_id-1][9]=true;



    //let ticket_id=this.tickets[ticket_arr_id][0];


    //let event_id = +this.tickets[ticket_id][1];
    //let event_id = 1;
    //let event_title=this.tickets[ticket_id][2];

    //alert('return Ticket id: '+ticket_id+' (event id: '+event_id+')');
     //alert('event id:'+event_id);
     
     
  

    //let aNumber  = parseInt(event_ticket_avaible);
     //event_ticket_avaible+=1;

     //delete this.tickets[ticket_id];
//alert(this.tickets[ticket_id][3]);

// let ticket_status=this.tickets[ticket_id][3];
// alert(ticket_status);
//     if(this.tickets[ticket_id][3]=='true')
//     {
      

//       this.tickets[ticket_id][3]='false';
//          //let event_ticket_avaible=this.getAvaibleTickets(event_id);
//          let event_ticket_avaible=+this.events[event_id][7];
//          event_ticket_avaible++;

//          this.events[event_id][7]=event_ticket_avaible;
//          if(event_ticket_avaible>0) this.events[event_id][9]='true';

//     }

     
//      //alert('return Ticket id: '+ticket_id+'. Status: '+event_id+')');

     
//      if(this.events[event_id-1][9]==false)  this.events[event_id-1][9]=true;

  }

  // GetTicketInfo(ticket_id:number, info_type:string)
  // {
  //   let response="";
  //   switch (info_type) {
  //     case "title":
  //       response=this.tickets[ticket_id][2];
  //       break;
      
  //     default:
  //        response=this.tickets[ticket_id][0];
  //       break;
  //   }
    
  //   return(response);
  // }



  

}
