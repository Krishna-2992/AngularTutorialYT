import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AsyncPipe, JsonPipe, NgClass } from '@angular/common';
import { NgStyle } from '@angular/common';
import { NgIf, NgFor } from '@angular/common';
import { DatePipe, LowerCasePipe, UpperCasePipe, CurrencyPipe, PercentPipe } from '@angular/common';
import { AppendPipe } from './pipes/append.pipe';
import { DataService } from './services/data.service';
import { User } from './interfaces/user';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, NgClass, NgStyle, NgIf, NgFor, DatePipe, LowerCasePipe, UpperCasePipe, CurrencyPipe, PercentPipe, AppendPipe, AsyncPipe, JsonPipe],
  providers: [DataService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  // ----------------- Async and Json pipe ------------------------------

  // --------------------Dependency injection---------------------
  data: string[] = [];
  users: User[] = [];

  constructor(private dataService: DataService) {
    this.data = this.dataService.getData();
  }

  ngOnInit() {
    this.dataService.getUsers().subscribe({
      next: (response: User[]) => {
        this.users = response;
      },
      error: (error: Error) => {
        console.log("error: " + error);
      }
    })
  }

  userList = this.dataService.getUsers();

  title: string = '1. Angular';
  button: string = "My Button"
  isDisabled: boolean = false
  counter: number = 0;
  
  // style binding
  angularImage: string = '../assets/angularImg.png'
  bgColor: string = 'green'
  titleColor: string = 'white'
  descriptionStyle: string = 'font-size: 50px; color: white'

  // class binding
  redText: string = "abcd"
  condition: string = "2"
  
  message: string = "this is a dangerous message"
  classes: string = "danger text-font"

  incrementCounter() {
    this.counter++;
  }

  inputText: string = "initial value"

  selectedColor: string = "red"

  isLoggedIn:boolean = false;
  buttonText: string = "Login"

  toggleLogin() {
    this.isLoggedIn = !this.isLoggedIn;
    this.buttonText = this.isLoggedIn ? "Logout" : "Login"
  }

  names: string[] = ['umair', 'david', 'john']

  // -------------------------------------------------------------------------
  title2: string = "Pipes"
  today: number = Date.now();
  currency: number = 1.124839
  
  userData = {
    id: 1, 
    name: "Krishna", 
    roles: ["Admin", "User"]
  }

}
