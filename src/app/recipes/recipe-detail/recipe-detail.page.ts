import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.page.html',
  styleUrls: ['./recipe-detail.page.scss'],
})
export class RecipeDetailPage implements OnInit {
  loadedRecipe: Recipe;

  constructor(
     private activatedRoute: ActivatedRoute,
     private recipesService: RecipesService,
     private router: Router,

     ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('recipeId')){
        // redirect
        return;
      }
      const recipeId = paramMap.get('recipeId');
      this.loadedRecipe = this.recipesService.getRecipe(recipeId);
    });
  }
  onDeleteRecipe() {
    const alert = document.createElement('ion-alert');
     alert.header ='Are you sure?';
     alert.message = 'Do you really want to delete the recipe?';
     alert.buttons = [{
      text: 'Cancel',
      role: 'cancel'
     },
     {
     text: 'Delete' ,
     handler: () => {
      this.recipesService.deleteRecipe(this.loadedRecipe.id);
      this.router.navigate(['/recipes']);
     }
    }
  ];
  document.body.appendChild(alert);
  alert.present();

  }
}
