
var recipe = 
{
    recipesteps : [],


    addRecipeSteps: function(step)
    {
        this.recipesteps.push(step);
    },

    displayRecipe: function()
    {
        console.log(this.recipesteps);
    },

    changeRecipe: function(stepnumber, step )
    {
        this.recipesteps[stepnumber-1] = step;
    },


    removeRecipeStep: function(stepnumber)
    {
        this.recipesteps.splice(stepnumber - 1, 1);
    }

};

recipe.addRecipeSteps('get flour');
recipe.addRecipeSteps('add yeast');
recipe.addRecipeSteps('add sugar');
recipe.displayRecipe();
recipe.changeRecipe(2, 'add soda');
recipe.displayRecipe();
recipe.removeRecipeStep(2)
recipe.displayRecipe();