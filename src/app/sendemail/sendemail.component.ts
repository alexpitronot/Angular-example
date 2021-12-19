import { Component, OnInit, Input } from '@angular/core';
import { Employee } from '../employee';
import { SendmailMessageService } from '../sendmail-message.service';

@Component({
  selector: 'app-sendemail',
  templateUrl: './sendemail.component.html',
  styleUrls: ['./sendemail.component.css']
})
export class SendemailComponent implements OnInit {

  @Input() employee?: Employee;
  constructor(private messageService: SendmailMessageService) { }

  onSelect(employee: Employee): void {    
    this.messageService.add(`Your message to ${employee.fname} was sent!`); 
  }

  ngOnInit(): void {
  }

}
