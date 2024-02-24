import { Routes } from '@angular/router';
import { CurrWeekComponent } from './curr-week/curr-week.component';
import { LastWeekComponent } from './last-week/last-week.component';
import { DataComponent } from './data/data.component';
import { UserbyidComponent } from './userbyid/userbyid.component';

export const routes: Routes = [
    { path: '', component: CurrWeekComponent },
    { path: 'first-component', component: CurrWeekComponent },
  { path: 'second-component', component: LastWeekComponent },
  {path:'third-component', component : DataComponent},
  {path:'fourth-component',component:UserbyidComponent}

];
