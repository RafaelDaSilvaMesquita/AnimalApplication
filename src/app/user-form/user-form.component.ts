import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Animal } from '../model/animal.model';
import { User } from '../model/user';
import { UserService } from '../service/user.service';
import {InputTextModule} from 'primeng/inputtext';
import {MultiSelectModule} from 'primeng/multiselect';
import { AnimalService } from '../service/animal.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit{

  user: User;
  userForm!:FormGroup;
  id!:Animal;
  animals!:Animal[];

  ngOnInit() {
    this.userForm=this.buildForm();
    this.retrieveAnimal();
    

   
}

  constructor(
    private route: ActivatedRoute,
      private router: Router,
        private userService:UserService, private animalService:AnimalService) { 
    this.user = new User();
        }

    
    public buildForm(): FormGroup {

      return new FormGroup({
        name:new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(25)]),
        email:new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]),

        animal: new FormControl('')
      });
    }

  onSubmit() {
    this.user.name=this.userForm.value.name;
    this.user.email=this.userForm.value.email;
    this.user.animals=this.userForm.value.animal;
    this.userService.save(this.user).subscribe(result => this.gotoUserList());
    console.warn(this.userForm.value);
  }

  gotoUserList() {
    this.router.navigate(['/users']);
  }


  retrieveAnimal(): void {
    this.animalService.findAll().subscribe({
      next: (data) => {
        this.animals = data;
        console.log(data);
      },
      error: (e) => console.error(e)
    });
  }

  get name() { return this.userForm.get('name'); }

  get email() { return this.userForm.get('email'); }

  get Animal() { return this.userForm.get('Animal');}

}
