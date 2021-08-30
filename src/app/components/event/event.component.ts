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


ticket_total:number=0;

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
      sold_tickets_count++;
    }
  });
  


   event_ticket_avaible=event_ticket_total-sold_tickets_count;


  return event_ticket_avaible;


}
  

  SellTicket(i:number)  
  {

    let event_id= + this.events[i][0];

    let event_ticket_avaible=this.getAvaibleTickets(event_id);
     this.events[event_id-1][7]=event_ticket_avaible-1;
     
     if(event_ticket_avaible>0) 
     {

       if(event_ticket_avaible==1) {this.events[i][9]=false;}

        this.ticket_id++;

        let tickets_detail=new Array();
        tickets_detail[0]=this.ticket_id;
        tickets_detail[1]=event_id;
        tickets_detail[2]=this.events[event_id-1][1];
        tickets_detail[3]='true'; //Status
        this.tickets.unshift(tickets_detail);

     }
     else this.events[i][9]=false;
   
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


  }



  ReturnTicket(ticket_arr_id:number)
  {
    let ticket_id=this.tickets[ticket_arr_id][0];
    let event_id = this.tickets[ticket_arr_id][1];
    let event_title=this.events[event_id-1][1];

    // alert('return Ticket id: '+ticket_id+' for event '+event_title+' (event id: '+event_id+')');

     
     
     let event_ticket_avaible=this.getAvaibleTickets(event_id);
     this.events[event_id-1][7]=event_ticket_avaible+1;

     //delete this.tickets[ticket_arr_id];

     this.tickets[ticket_arr_id][3]='false';
     

     if(this.events[event_id-1][9]==false)
     {
       this.events[event_id-1][9]=true;
        //alert('no pilets');
     }

     // alert(this.events[event_id-1][7]);
     //if(this.events[event_id][7]>=0) this.events[event_id][9]=true;

     //this.CheckTickets(event_id); 


    

    



  }



  

}
