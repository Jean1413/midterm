import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

private recipes: Recipe[] = [
    {
      id: 'r1',
      title: 'Schnitzel',
      imageUrl: 'https://www.jocooks.com/wp-content/uploads/2019/04/pork-schnitzel-1-768x960.jpg',
      ingredients: ['French Fries', 'Pork Meat', 'Salad']

    },
    {
      id: 'r2',
      title: 'Spaghetti',
      imageUrl: 'https://assets.bonappetit.com/photos/59bbfb9f6375992e505c1bd3/1:1/w_1600,c_limit/classic-spaghetti-and-meatballs.jpg',
      ingredients: ['Spaghetti', 'Meat', 'Tomatoes']

    }

  ];

  constructor() { }

  getAllRecipes() {
    return [...this.recipes];
  }

  getRecipe(recipeId: string) {
    return {
      ...this.recipes.find(recipe => recipe.id === recipeId)};
  }

  deleteRecipe(recipeId: string) {
    this.recipes = this.recipes.filter(recipe => recipe.id !== recipeId);
  }
}
