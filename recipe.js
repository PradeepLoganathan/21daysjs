
var recipe = 
{
    recipesteps : [],
    Ingredients :[],


    addRecipeStep: function(stepname)
    {
        this.recipesteps.push({stepname:stepname, completed:false });
    },

    
    changeRecipestep: function(stepnumber, stepname )
    {
        this.recipesteps[stepnumber-1].stepname = stepname;
    },


    removeRecipeStep: function(stepnumber)
    {
        this.recipesteps.splice(stepnumber - 1, 1);
    },

    displayRecipe: function()
    {
        console.log(this.recipesteps);
    }

};

recipe.addRecipeStep('get flour');
recipe.addRecipeStep('add yeast');
recipe.addRecipeStep('add sugar');
recipe.displayRecipe();
recipe.changeRecipestep(2, 'add soda');
recipe.displayRecipe();
recipe.removeRecipeStep(2)
recipe.displayRecipe();