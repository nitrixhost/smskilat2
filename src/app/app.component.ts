import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit{
  
 loggedin: boolean;

 ngOnInt(): void {
 	const token = localStorage.getItem('kk');
 	console.log(token);
 	if(token == true){
 		this.loggedin = true;
 	}else{
 		this.loggedin = false;
 	}
 }

}
