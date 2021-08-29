import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})

export class EventComponent implements OnInit {


	
events=[
[1, 'концерт', '01.09.2021','12:00', 59, 'Lorem ipsum dolor.',3,false,true],
[2,'мюзикл','10.12.2021','18:30',25,'Obcaecati facere quod assumenda ullam cupiditate sed veritatis veniam, sunt minima aperiam commodi aspernatur nemo voluptatibus at perferendis dignissimos voluptate sit, tempora.',10,false,true],
[3, 'театр','15.10.2022','15:00',150,'Obcaecati facere quod assumenda ullam cupiditate sed veritatis veniam.',1,false,true],
[4,'кино','18.09.2021','10:00',59,'Lorem ipsum dolor sit amet consectetur adipisicing elit.',50,false,true],
[5,'опера','30.12.2021','17:15',25,'Obcaecati facere quod assumenda ullam cupiditate sed veritatis veniam, sunt minima aperiam commodi aspernatur nemo voluptatibus at perferendis dignissimos voluptate sit, tempora.',5,false,true],
[6, 'мюзикл','05.11.2022','19:00',150,'Obcaecati facere quod assumenda ullam cupiditate sed veritatis veniam.',250,false,true],
[7, 'театр','05.11.2022','19:00',150,'Obcaecati facere quod assumenda ullam cupiditate sed veritatis veniam.',250,false,true],
[8, 'цирк','05.11.2022','19:00',150,'Obcaecati facere quod assumenda ullam cupiditate sed veritatis veniam.',250,false,true],
[9, 'опера','05.11.2022','19:00',150,'Obcaecati facere quod assumenda ullam cupiditate sed veritatis veniam.',250,false,true],
[10, 'концерт','05.11.2022','19:00',150,'Obcaecati facere quod assumenda ullam cupiditate sed veritatis veniam.',250,false,true]
];







  constructor() { }




  ngOnInit(): void {
  }

  

  SellTicket(i:number)  
  {
     let num = +this.events[i][6];
     if(num>0) {
       this.events[i][6]=num-1;
       if(num==1) this.events[i][8]=false;
     }
     else this.events[i][8]=false;
      
  }


  showEdit(i:number)  {
    this.events[i][7] =! this.events[i][7];
  }

  CheckTickets(i:number) {
    let num = +this.events[i][6];
    if(num>0) this.events[i][8]=true;
  }

  

}
