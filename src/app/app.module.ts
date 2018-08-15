import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule, Routes,Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { ContentComponent } from './content/content.component';
import { CreteComponent } from './crete/crete.component';
import { UpdateComponent } from './update/update.component';
import { SearchComponent } from './search/search.component';

const appRoutes: Routes = [
  { path: 'create', component: CreteComponent },
  { path: 'update',      component: UpdateComponent },
  { path: 'update/:profileId',      component: UpdateComponent },
  { path: 'search',      component: SearchComponent },
  { path: '',
    redirectTo: '/',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavMenuComponent,
    ContentComponent,
    CreteComponent,
    UpdateComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
