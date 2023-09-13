import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-songs-management',
  templateUrl: './songs-management.component.html',
  styleUrls: ['./songs-management.component.css']
})
export class SongsManagementComponent implements OnInit {
 songs:Array<any>=[];
 constructor(private authService:AuthService){}
  ngOnInit(): void {
    const bandId=Number(localStorage.getItem('bandId'))
    this.fetchSongs(bandId);
  }

 fetchSongs(bandId:number):void{
   const search='';
   const currentPage=1;
   const perPage=10;
  
   this.authService.getSongs(bandId,search,currentPage,perPage).subscribe(
    (response:any)=>{
      console.log(response.data.data);
        this.songs=response.data.data;
    },(error)=>{
        
    }
   )
 }

 formatTime(totalSeconds:number):string{
  const minutes=Math.floor(totalSeconds/60);
  const seconds=Math.floor(totalSeconds%60);

  const formattedMinutes=this.padZero(minutes);
  const formattedSeconds=this.padZero(seconds);

  return `${formattedMinutes}:${formattedSeconds}`;
 }

 padZero(value:number):string{
  return value<10 ? `0${value}`:`${value}`;
 }

}
