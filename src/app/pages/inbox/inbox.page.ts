import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.page.html',
  styleUrls: ['./inbox.page.scss'],
})
export class InboxPage implements OnInit {
  listEmails = [];

  constructor() { }

 ngOnInit() {
  this.listEmails = [{
      "from": "mariabeluz.suarez@gmail.com",
      "tag": "inbox",
      "content": "This is the first fake email for the test.\r\n It is an interesting test. This emails comes from a list in json format", 
      "date": "29 August 2021", 
      "id": "60a7945d22b987eafc7f626e"
    }, {
      "from": "zuleb01@gmail.com", 
      "tag": "spam",
      "content": "This is the second fake email for the test.\r\n It will display dinamically those emails.", 
      "date": "30 August 2021",  
      "id": "60a7945d22b987eafc7f626g"
    }, {
      "from": "paddybrady@gmail.com", 
      "tag": "inbox",
      "content": "This is a third fake email for the test.\r\n It will display only the emails tagged as inbox.", 
      "date": "30 August 2021",  
      "id": "60a7945d22b987eafc7f626t"
    }, {
      "from": "rita.amador@gmail.com", 
      "tag": "spam",
      "content": "An extra email of this list.\r\n All of these emails are fake.", 
      "date": "30 August 2021",  
      "id": "60a7945d22b987eafc7f626w"
    },{
      "from": "runtheworld@gmail.com", 
      "tag": "delete",
      "content": "This email initially it will be tagged as deleted for the test.\r\n It will display dinamically those emails.", 
      "date": "30 August 2021",  
      "id": "60a7945d22b987eafc7f626s"
    }];
    
    //filtering the list of emails
    this.listEmails = this.listEmails.filter (i => i.tag === 'inbox');
   }

   

  delete(item,index) {
    item.tag = "delete";
    this.listEmails[index] = item;
    return this.listEmails.splice(index, 1);
    console.log(this.listEmails);
  };

  doRefresh(ev) {
    setTimeout(() => {
      ev.target.complete();
    }, 2000);
  }
}
