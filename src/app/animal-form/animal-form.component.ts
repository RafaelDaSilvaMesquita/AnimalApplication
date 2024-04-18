import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Animal } from '../model/animal.model';
import { AnimalService } from '../service/animal.service';

@Component({
  selector: 'app-animal-form',
  templateUrl: './animal-form.component.html',
  styleUrls: ['./animal-form.component.css']
})
export class AnimalFormComponent implements OnInit {

  animal: Animal;
  animalForm!:FormGroup;

  ngOnInit() {
    this.animalForm=this.buildForm();

  }

  constructor(
    private route: ActivatedRoute,
      private router: Router,
        private animalService:AnimalService) {
    this.animal = new Animal();
         }

    
    public buildForm(): FormGroup {

      return new FormGroup({
        name:new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(25)]),
        breed:new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(25)])
      })
    }

  onSubmit() {
    if (this.animalForm.valid) {
      this.animal.name=this.animalForm.value.name;
      this.animal.breed=this.animalForm.value.breed;
      
      this.animalService.save(this.animal).subscribe(result => this.router.navigate(['/animals']));
      console.warn(this.animalForm.value);
    }
  }

  get name() { return this.animalForm.get('name'); }

  get breed() { return this.animalForm.get('breed'); }

}
