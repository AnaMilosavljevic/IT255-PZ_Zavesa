import { Component, OnInit } from '@angular/core';
import { RepertoarService } from '../services/repertoar.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.scss']
})
export class AdminPanelComponent implements OnInit {
  shows: any[] = [];
  newShow: any = { title: '', date: '', description: '' };
  editingShow: any = null;

  constructor(private repertoarService: RepertoarService, public userService: UserService) { }

  ngOnInit(): void {
    this.loadShows();
  }

  loadShows(): void {
    this.repertoarService.getShows().subscribe(shows => {
      this.shows = shows;
    });
  }

  addShow(): void {
    this.repertoarService.addShow(this.newShow).subscribe(() => {
      this.loadShows(); 
      this.newShow = { title: '', date: '', description: '' };
    });
  }

  deleteShow(showId: number): void {
    this.repertoarService.deleteShow(showId).subscribe(() => {
      this.loadShows(); 
    });
  }

  editShow(show: any): void {
    this.editingShow = { ...show };
  }

  updateShow(): void {
    this.repertoarService.updateShow(this.editingShow).subscribe(() => {
      this.loadShows();
      this.editingShow = null;
    });
  }

  cancelEdit(): void {
    this.editingShow = null;
  }
}
