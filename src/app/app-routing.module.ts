import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SecondComponent} from './second/second.component';
import {FirstComponent} from './first/first.component';

const routes: Routes = [
    {
        path: 'first',
        component: FirstComponent
    },
    {
        path: 'second',
        component: SecondComponent
    },
    {
        path: '**',
        redirectTo: '/first'
    }

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
