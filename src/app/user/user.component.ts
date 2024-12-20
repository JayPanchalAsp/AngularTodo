import { Component,Input,Output,output,EventEmitter } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

let a: number = 1;

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})

export class UserComponent {
    @Input({required:true}) id!: string;
    @Input({required:true}) avatar!: string;
    @Input({required:true}) name!: string; 
    @Output() select = new EventEmitter<string>();
    //select = output<string>();

    get ImagePath(){
      return 'assets/users/'+ this.avatar
    }

    onSelectedUser() {
        this.select.emit(this.id);
    }
    // selectedUser = signal(DUMMY_USERS[a]) 
    // ImagePath = computed(() => '../assets/users/'+ this.selectedUser().avatar)
    // // get ImagePath(){
    // //   return '../assets/users/'+ this.selectedUser.avatar
    // // }

    // onSelectedUser() {
    //   a =  a + 1;
    //   if (a >= DUMMY_USERS.length)
    //   {
    //     a = 0;
    //   }
    //   this.selectedUser.set(DUMMY_USERS[a])
    // }
}
