import { Component } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from './dummy-users';
import { TaskComponent } from "./task/task.component";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent, TaskComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Essentials';
  users = DUMMY_USERS;
  selectedUserid = 'u1'

  get selecteduser(){
    return this.users.find((user) => {user.id === this.selectedUserid})!;
  }

  onSelectUser(id:string){
    this.selectedUserid = id
  }
}
