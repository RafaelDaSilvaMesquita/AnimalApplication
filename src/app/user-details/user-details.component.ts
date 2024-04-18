import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { User } from '../model/user';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  @Input() viewMode = false;

  @Input() currentUser?: User;

  message = '';

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    if (!this.viewMode) {
      this.message = '';
      this.getUser(this.route.snapshot.params["id"]);
    }
  }

  getUser(id: string): void {
    this.userService.get(id)
    .subscribe({
      next: (data) => {
        this.currentUser = data;
        console.log(data);
      },
      error: (e) => console.error(e)
    });
  }

  updateUser(): void {
    this.message = '';

    this.userService.update(this.currentUser?.id, this.currentUser)
    .subscribe({
      next: (res:any) => {
        console.log(res);
        this.message = res.message ? res.message : 'Cet utilisateur a été modifier correctement'
      },
      error: (e) => console.error(e)
      
    });
  }

  deleteUser(): void {
    this.userService.delete(this.currentUser?.id).subscribe({
      next: (res) => {
        console.log(res);
        this.router.navigate(['/users']);
      },
      error: (e) => console.error(e)
    });
  }
}
