import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Course } from '../model/course';
import { CourseService } from '../services/course.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss'
})
export class CoursesComponent {
  courseList: Course[] = []; //Lagrar hämtade kurser
  filteredCourseList: Course[] = []; //LAgrar dem kurser som matchar sökning
  searchString: string = ''; //Sökningen lagras här
  sortField: string = ''; //LAgrar vilket fält som ska användas för sortering
  sortDirection: 'asc' | 'desc' = 'asc'; //Lagrar riktning på sorteringen, stigande eller fallande

  constructor(private courseservice: CourseService) { }

  ngOnInit() {
    this.courseservice.getCourses().subscribe(data => {
      this.courseList = data;
      this.applyFilters(); // Filter när kursdata hämtas
    });
  }

  applyFilters() { //För att kunna söka på kurskod och kursnan
    this.filteredCourseList = this.courseList.filter(course =>
      course.code.toLowerCase().includes(this.searchString.toLowerCase()) || //Gör allt till små bokstäver
      course.coursename.toLowerCase().includes(this.searchString.toLowerCase()) //Gör allt till små bokstäver
    );

    if (this.sortField) {
      this.filteredCourseList.sort((a, b) => { //Sorteringsfunktion 
        const fieldA = a[this.sortField].toLowerCase(); //Gör det som ska jämföras till små bokstäver
        const fieldB = b[this.sortField].toLowerCase(); //Gör det som ska jämföras till små bokstäver
        let comparison = 0; //Jämförelsevärde om de är lika stora
        if (fieldA > fieldB) { //Om field a är större än b får comparison värde 1
          comparison = 1;
        } else if (fieldA < fieldB) { //Om field a är mindre än b får comparison värde -1
          comparison = -1;
        }
        return this.sortDirection === 'asc' ? comparison : -comparison; // Ifall sortdirection = asc så kommer comparison att retuneras, ifall den inte är det så kommer det motsatta värdet av comparison att retuneras istället
      });
    }
  }

  toggleSortDirection() {
    this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    this.applyFilters(); // Applicera filter när sorteringsriktning ändras
  }

  //Ändrar riktning på sorteringen
  sort(field: string) {
    if (this.sortField === field) {
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortField = field;
      this.sortDirection = 'asc';
    }
    this.applyFilters(); // Filtrera när riktningen ändras
  }
}

