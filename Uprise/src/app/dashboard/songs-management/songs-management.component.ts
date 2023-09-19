import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-songs-management',
  templateUrl: './songs-management.component.html',
  styleUrls: ['./songs-management.component.css']
})
export class SongsManagementComponent implements OnInit {
 songs:Array<any>=[];
 constructor(private authService:AuthService,private toast:ToastrService){}
  ngOnInit(): void {
    const bandId=Number(localStorage.getItem('bandId'))
    this.fetchSongs(bandId);

    this.totalRecords=this.songs.length;
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


liveToggle(songId:number,status:boolean){
  this.authService.liveSongs(songId,status).subscribe(
    (response)=>{
        console.log(status);
    },(error)=>{
        console.log(error);
    }
  )
}

 deleteSong(SongId:number){
  
    this.authService.deleteSong(SongId).subscribe(
      (response)=>{
        console.log(response);
        
        const index=this.songs.findIndex((song)=>song.id==SongId)
        if(index!==-1){
          this.songs.splice(index,1);
          this.toast.success("deleted successfully");
        }
        this.toast.success();
      }
      ,(error)=>{
         this.toast.error("failed to delete");
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
  
visible:boolean=false;
showDialog(live:boolean){
  if(live==true){

  }
  else{
  this.visible=true;
  }
}
confirmDelete(songId:number,live:boolean)
{
  this.deleteSong(songId);
  this.visible=false;
}

totalRecords:number=0;
rows:number=10;
first:number=0;

onPageChange(event:any){
  this.first=event.first;
  this.rows=event.rows;
}

}
