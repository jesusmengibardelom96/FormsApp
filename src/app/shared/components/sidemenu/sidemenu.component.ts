import { Component } from '@angular/core';

interface MenuItem {
  title: string
  route: string
}

@Component({
  selector: 'shared-sidemenu',
  templateUrl: './sidemenu.component.html',
  styles: ``
})
export class SidemenuComponent {
  public reactiveMenu: MenuItem[] = [
    {title: 'Basicos', route: './reactive/basic'},
    {title: 'Dinamicos', route: './reactive/dynamic'},
    {title: 'Switches', route: './reactive/switches'},
  ]

  public authMenu: MenuItem[] = [
    {title: 'Auth', route: './auth'}
  ]
}
