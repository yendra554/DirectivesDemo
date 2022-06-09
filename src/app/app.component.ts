import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngifD';
  courses = [1,2]
  viewModal = 'map'
  course =[

    {id:1 , name:'course1' },
    {id:2 , name:'course2' },
    {id:3, name:'course3' }
  ]

  onAdd(){
    this.course.push({ id: 4, name : 'course4' });
  }

  remove(){

    // let index= this.course.indexOf(cours);
    // this.course.splice(index,1);

  }
}

