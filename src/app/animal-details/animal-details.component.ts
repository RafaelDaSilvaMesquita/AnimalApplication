import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Animal } from '../model/animal.model';
import { AnimalService } from '../service/animal.service';

@Component({
  selector: 'app-animal-details',
  templateUrl: './animal-details.component.html',
  styleUrls: ['./animal-details.component.css']
})
export class AnimalDetailsComponent implements OnInit {

  @Input() viewMode = false;

  @Input() currentAnimal: Animal = {
    name: '',
    breed: '',
  };

  message = '';

  constructor(
    private animalService: AnimalService,
    private route: ActivatedRoute,
    private router: Router, 
  ) { }

  ngOnInit(): void {
    if (!this.viewMode) {
      this.message = '';
      this.getAnimal(this.route.snapshot.params["id"]);
    }
  }
  
  getAnimal(id: string): void {
    this.animalService.get(id)
    .subscribe({
      next: (data) => {
        this.currentAnimal = data;
        console.log(data);
      },
      error: (e) => console.error(e)
    });
  }

  updateAnimal(): void {
    this.message = '';

    this.animalService.update(this.currentAnimal.id, this.currentAnimal)
    .subscribe({
      next: (res:any) => {
        console.log(res);
        this.message = res.message ? res.message : 'Cet animal a été modifier correctement'
      },
      error: (e) => console.error(e)

    });
  }

  deleteAnimal(): void {
    this.animalService.delete(this.currentAnimal.id).subscribe({
      next: (res) => {
        console.log(res);
        this.router.navigate(['/animals']);
      },
      error: (e) => console.error(e)
    });
  }
}
