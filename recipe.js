
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
        if( this.recipesteps.length == 0)
        {
            console.log('recipe steps are empty');
        }
        else
        {
            for(var i=0; i < this.recipesteps.length; i++)
            {
                console.log(this.recipesteps[i].stepname + ' | ' + this.recipesteps[i].completed);
            }
        }
    },

    toggleCompleted: function(stepnumber)
    {
        this.recipesteps[stepnumber-1].completed = !this.recipesteps[stepnumber-1].completed;
    }

};



// var btndisplayrecipes = document.getElementById('btndisplayrecipe');
// btndisplayrecipes.addEventListener("click", function() { recipe.displayRecipe();});
// recipe.displayRecipe();
// console.log('*** Adding recipe steps ***');
// recipe.addRecipeStep('get flour');
// recipe.addRecipeStep('add yeast');
// recipe.addRecipeStep('add sugar');
// recipe.displayRecipe();
// console.log('*** Completed adding recipe steps ***' + '\n');


// console.log('*** Changing recipe step 2 ***');
// recipe.changeRecipestep(2, 'add soda');
// recipe.displayRecipe();
// console.log('*** Completed changing recipe step 2 ***' + '\n');

// console.log('*** mark step 1 as completed ***');
// recipe.toggleCompleted(1)
// recipe.displayRecipe();
// console.log('*** completed mark step 1 as completed ***' + '\n');


// console.log('*** Remove recipe step2 ***');
// recipe.removeRecipeStep(2)
// recipe.displayRecipe();
// console.log('***Completed  removing recipe step2 ***' + '\n');