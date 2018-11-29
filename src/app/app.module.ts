import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipiesComponent } from './recipies/recipies.component';
import { RecipeListComponent } from './recipies/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipies/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipies/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShopingEditComponent } from './shopping-list/shoping-edit/shoping-edit.component';
import { HeadertestComponent } from './headertest/headertest.component';
import { ServerComponent } from './server/server.component';
import { CockpitComponent } from './cockpit/cockpit.component';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [

  {path: 'recipe', component: RecipiesComponent },
  {path: 'shopping-list', component: ShoppingListComponent},
  {path: '**', redirectTo: 'recipe', pathMatch:   'full'  }

];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipiesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShopingEditComponent,
    HeadertestComponent,
    ServerComponent,
    CockpitComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
