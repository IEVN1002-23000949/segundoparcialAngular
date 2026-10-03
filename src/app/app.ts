import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Zodiaco } from './Formularios/zodiaco/zodiaco'
import { FormsModule } from '@angular/forms';
import { OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';
import { Navbar } from './navbar/navbar'
import { Usuario } from './Formularios/usuario/usuario'


@Component({
  imports: [RouterOutlet, Zodiaco, FormsModule, Navbar, Usuario],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
/* export class App {
  protected readonly title = signal('segundoparcialAngular');
} */
export class App implements OnInit {
  title = 'web-app';

  ngOnInit(): void {
    initFlowbite();
  }
}
