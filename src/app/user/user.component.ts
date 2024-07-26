import { Component, Input, output } from '@angular/core';
import { User } from './user.model';
@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input({required: true}) user!: User;
  @Input({required: true}) selected!: boolean;
  
  select = output<string>();
  
  get imagePath() {
    return '../assets/users/' + this.user.avatar;
  }

  onSelectUser() { 
    this.select.emit(this.user.id);
  }
}
