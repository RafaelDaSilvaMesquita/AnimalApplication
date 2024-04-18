import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { User } from '../model/user';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
  providers: [MessageService]
})
export class UserListComponent implements OnInit {

  users?: User[];
  currentUser?: User;
  currentIndex = -1;

  constructor(private userService: UserService, private router: Router, private messageService: MessageService) { }

  ngOnInit() {
    this.retrieveUser();
  }

  retrieveUser(): void {
    this.userService.findAll().subscribe({
      next: (data) => {
        this.users = data;
        console.log(data);
      },
      error: (e) => console.error(e)
    });
  }

  refreshList(): void {
    this.retrieveUser();
    this.currentUser = {};
    this.currentIndex = -1;
  }

  setActiveUser(user: User, index: number): void {
    if(this.currentUser == user){
      this.currentUser = undefined;
    } else {
      this.currentUser = user;
      this.currentIndex = index;
    }
  }

  deleteAllUsers(): void {
    this.messageService.add({severity:'error', summary: 'Utilisateurs supprimés', detail: '', life: 2000});
    this.userService.deleteAll().subscribe({
      next: (data) => {
        this.users = data;
        console.log(data);
      },
      error: (e) => console.error(e)
    });
  }

  deleteUser(id: string | undefined): void {
    console.log(id);
    this.userService.delete(id).subscribe({
      next: (res) => {;
        console.log(res);
        this.users?.splice(this.users.findIndex(u => u?.id === id), 1);
        this.router.navigate(['/users']);
      },
      error: (e) => console.error(e)
    });
  } 
  
  showConfirm(user: User) {
    this.messageService.clear();
    this.messageService.add({key: 'c', sticky: true, severity:'warn', summary:'Êtes-vous sûr ?', detail:'Confirmer la suppression', data:user});
}

onConfirm(user: User) {
  this.deleteUser(user.id);
  this.messageService.clear('c');
  this.messageService.add({severity:'error', summary: 'Utilisateur supprimé', detail: '', life: 2000});
}

onReject() {
  this.messageService.clear('c');
}

clear() {
  this.messageService.clear();
}

}
