// import { Component, OnInit } from '@angular/core';
// import { Router, ActivatedRoute } from '@angular/router';
// import { EventManagementSystemService } from '../../../service/eventmanagementsystem.service';
// import { Admin } from '../../../class/admin';

// @Component({
//   selector: 'app-participant-view',
//   templateUrl: './participant-view.component.html',
//   styleUrls: ['./participant-view.component.css']
// })
// export class ParticipantViewComponent implements OnInit{
//   participant : any;
//   hasSearchName!: boolean;
//   searchName!: string;
//   admin!: Admin;
//   p: number = 1;
// count: number = 5;
// constructor(private eventmanagementsystemservice:EventManagementSystemService,public router:Router, private activeRoute:ActivatedRoute) { }
// ngOnInit(): void 
//     {
//       this.activeRoute.paramMap.subscribe(()=>this.getAllParticipant());
//       this.activeRoute.paramMap.subscribe(()=>this.admin=JSON.parse(sessionStorage.getItem("admin")))
//       this.checkSessionAndNavigate();
//     }
  
//     getAllParticipant()
//   {
//     this.hasSearchName = this.activeRoute.snapshot.paramMap.has("username");
//        if(this.hasSearchName)
//        {this.searchName  = this.activeRoute.snapshot.paramMap.get("username");
//         console.log(this.searchName)
//         this.eventmanagementsystemservice.getParticipantByUsername(this.searchName).subscribe(data=>{
//         console.log(data);
//         this.participant= data;
//         })
//       }
//       else{
//       this.eventmanagementsystemservice.getAllParticipant().subscribe(data=>{
//         console.log(data);
//         this.participant=data;
//       });
//     }
//     }

//     deleteParticipabt(id:number):void{
//       console.log(id);
//       if(confirm("Do you want to delete ?")){
//         this.eventmanagementsystemservice.deleteParticipate(id).subscribe(data=>{
//           console.log(data);
//           this.getAllParticipant();
//         })
//       };
//     }
//     updateParticipant(id:number)
//   {
//     this.router.navigateByUrl("/updateParticipant/"+id);
  
//   }
//   logout() {
//     if (sessionStorage.getItem("admin")) {
//       sessionStorage.clear()
//       localStorage.clear()
//       alert("Logout Successfully")
//       this.router.navigateByUrl("/admin/login")
//     }
//     else {
//       alert("No user loged in")
//     }
//   }
//   checkSessionAndNavigate() {
//     if (!this.admin) {
//       this.router.navigateByUrl("/admin/login");
//     }
//   }
// }





import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { EventManagementSystemService } from '../../../service/eventmanagementsystem.service';
import { Admin } from '../../../class/admin';

@Component({
  selector: 'app-participant-view',
  templateUrl: './participant-view.component.html',
  styleUrls: ['./participant-view.component.css']
})
export class participantViewComponent implements OnInit{
  hasSearchId!: boolean;
  searchId!: number;
deleteparticipant(arg0: any) {
throw new Error('Method not implemented.');
}
participant : any;
  hasSearchName!: boolean;
  searchName!: string;
  admin!: Admin;
  p: number = 1;
count: number = 5;
constructor(private eventmanagementsystemService:EventManagementSystemService,public router:Router, private activeRoute:ActivatedRoute) { }


ngOnInit(): void {
  this.activeRoute.paramMap.subscribe(() => {
    const adminString = sessionStorage.getItem("admin");

    if (adminString) {
      try {
        this.admin = JSON.parse(adminString);
      } catch (error) {
        console.error('Error parsing admin data:', error);
        // Handle the error, e.g., show an error message or redirect to login
      }
    } else {
      // Handle the case when adminString is null
      // You might want to add some error handling or redirect the user
      console.error('Admin data not found in sessionStorage');
    }

    this.getAllParticipant();
    this.checkSessionAndNavigate();
  });
}

getAllParticipant()
{
  this.hasSearchId = this.activeRoute.snapshot.paramMap.has("ParticipantId");
     if(this.hasSearchId)
     {this.searchId  = Number(this.activeRoute.snapshot.paramMap.get("ParticipantId"));
      console.log(this.searchId)
      this.eventmanagementsystemService['getparticipantbyid'](this.searchId).subscribe((data: any)=>{
      console.log(data);
      this.participant= data;
      })
    }
    else{
    this.eventmanagementsystemService.getAllParticipant().subscribe((data: any)=>{
      console.log(data);
      this.participant=data;
    });
  }
}
   
    deleteParticipant(id:number):void{
      console.log(id);
      if(confirm("Do you want to delete ?")){
        this.eventmanagementsystemService['deleteParticipant'](id).subscribe((data: any)=>{
          console.log(data);
          this.getAllParticipant();
        })
      };
    }

    // getAllParticipant() {
    //   this.hasSearchId = this.activeRoute.snapshot.paramMap.has("participantId");
    
    //   if (this.hasSearchId) {
    //     this.searchId = Number(this.activeRoute.snapshot.paramMap.get("participantId"));
    //     console.log(this.searchId);
        
    //     this.eventmanagementsystemService.getpaymentbyid(this.searchId).subscribe(data => {
    //       console.log(data);
    //       this.participant = data;
    //     });
    //   } else {
    //     this.eventmanagementsystemService.getAllParticipant().subscribe((data: any) => {
    //       console.log(data);
    //       // Perform subsequent logic here, if needed
    //     });
    //   }
    // }
    
  // getAllParticipant() {
  //   throw new Error('Method not implemented.');
  // }
  // getAllParticipant() {
    
      
  //       // this.eventmanagementsystemservice.getAllPayments().subscribe(this.admin=>{
  //       //   console.log(data);
  //       //   this.payment=data;
  //       });
  //     }
  // }
    
  
  
  updateParticipate(id:number)
  {
    this.router.navigateByUrl("/updateParticipant/"+id);
  
  }


  logout() {
    if (sessionStorage.getItem("admin")) {
      sessionStorage.clear()
      localStorage.clear()
      alert("Logout Successfully")
      this.router.navigateByUrl("/admin/login")
    }
    else {
      alert("No user loged in")
    }
  }
  checkSessionAndNavigate() {
    if (!this.admin) {
      this.router.navigateByUrl("/admin/login");
    }
  }
}
