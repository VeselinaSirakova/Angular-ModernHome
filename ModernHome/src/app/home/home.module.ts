import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { MainContentComponent } from './main-content/main-content.component';
import { SharedModule } from 'app/shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [MainMenuComponent, MainContentComponent],
  exports: [MainMenuComponent, MainContentComponent]
})
export class HomeModule { }
