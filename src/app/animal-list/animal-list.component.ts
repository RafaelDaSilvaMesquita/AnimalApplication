import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Animal } from '../model/animal.model';
import { AnimalService } from '../service/animal.service';

@Component({
  selector: 'app-animal-list',
  templateUrl: './animal-list.component.html',
  styleUrls: ['./animal-list.component.css']
})
export class AnimalListComponent implements OnInit {

  animals?: Animal[];
  currentAnimal: Animal = {};
  currentIndex = -1;

  constructor(private animalService: AnimalService, private router: Router) { }

  ngOnInit() {
    this.retrieveAnimal();
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

  refreshList(): void {
    this.retrieveAnimal();
    this.currentAnimal = {};
    this.currentIndex = -1;
  }

  setActiveAnimal(animal: Animal, index: number): void {
    this.currentAnimal = animal;
    this.currentIndex = index;
  }

  deleteAllAnimals(): void {
    this.animalService.deleteAll().subscribe({
      next: (data) => {
        this.animals = data;
        console.log(data);
      },
      error: (e) => console.error(e)
    });
  }

}
