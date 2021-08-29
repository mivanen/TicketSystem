


import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})

export class EventComponent implements OnInit {

	
all_events=[
[1, 'концерт', '01.09.2021','12:00', 59, 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'],
[2,'мюзикл','10.12.2021','18:30',25,'Obcaecati facere quod assumenda ullam cupiditate sed veritatis veniam, sunt minima aperiam commodi aspernatur nemo voluptatibus at perferendis dignissimos voluptate sit, tempora.'],
[3, 'театр','15.10.2022','15:00',150,'Obcaecati facere quod assumenda ullam cupiditate sed veritatis veniam.'],
[4,'кино','18.09.2021','10:00',59,'Lorem ipsum dolor sit amet consectetur adipisicing elit.'],
[5,'опера','30.12.2021','17:15',25,'Obcaecati facere quod assumenda ullam cupiditate sed veritatis veniam, sunt minima aperiam commodi aspernatur nemo voluptatibus at perferendis dignissimos voluptate sit, tempora.'],
[6, 'цирк','05.11.2022','19:00',150,'Obcaecati facere quod assumenda ullam cupiditate sed veritatis veniam.']
];



test_var:string="Hallo";

 //  event_id:number = 1;
	// event_title:string = 'Concert';
	// price:number = 50;
	// date:string = '01.09.2021';
	// time:string = '12:00';
	// short_descript:string = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati facere quod assumenda ullam cupiditate sed veritatis veniam, sunt minima aperiam commodi aspernatur nemo voluptatibus at perferendis dignissimos voluptate sit, tempora.';
	// defaultValue:string="";
	// //tempInput:string="";
	// options=[''];



  event_id=this.all_events[0][0];
  event_title = this.all_events[0][1];  
  date = this.all_events[0][2];
  time = this.all_events[0][3];
  price = this.all_events[0][4];
  short_descript = this.all_events[0][5];
  defaultValue:string="";
  //tempInput:string="";
  
options=[''];


	isEdit:boolean = false;


  constructor() { }

  ngOnInit(): void {
    //console.log(this.all_events[0][1]);

  	//this.event_title = 'text';
	// this.date = '01.09.2021';
	// this.time = '12:00';
	// this.short_descript = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati facere quod assumenda ullam cupiditate sed veritatis veniam, sunt minima aperiam commodi aspernatur nemo voluptatibus at perferendis dignissimos voluptate sit, tempora.';
	

  }

  TestMethod(myvar:string, myvar2:number)
  {
  	if(myvar)
  	{
  		this.event_title=myvar;
  		this.price=myvar2;
  		//this.options.push(myvar);
  	}
  	else
  	{
  		alert('error');
  	}
  	//alert('test3');
  }

  addOption(myvar:string)
  {
  	this.options.unshift(myvar);

  	return false;

  }

  deleteOpt(my_option:string)
  {
  		//console.log(my_option);
  		for(let i=0; i<this.options.length; i++)
  		{
  			if(this.options[i]==my_option)
  			{
  				this.options.splice(i, 1);
  				break;
  			}
  		}
  }

  showEdit()
  {
  		this.isEdit = !this.isEdit;
  }

  

}
