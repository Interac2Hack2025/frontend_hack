import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { StorageService } from './app/common/services/storage.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'frontend_hack';

  constructor(
    private readonly storageService: StorageService,
    private router: Router
  ) {}

  ngOnInit(): void {
    console.log('ari');
    const token = this.storageService.getItem<string>('token');
    if (!token) {
      this.router.navigate(['/login']);
    }
  }
}
