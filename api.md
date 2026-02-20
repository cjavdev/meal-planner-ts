# Families

Types:

- <code><a href="./src/resources/families/families.ts">Family</a></code>
- <code><a href="./src/resources/families/families.ts">FamilyListResponse</a></code>

Methods:

- <code title="post /families">client.families.<a href="./src/resources/families/families.ts">create</a>({ ...params }) -> Family</code>
- <code title="get /families/{familyId}">client.families.<a href="./src/resources/families/families.ts">retrieve</a>(familyID) -> Family</code>
- <code title="put /families/{familyId}">client.families.<a href="./src/resources/families/families.ts">update</a>(familyID, { ...params }) -> Family</code>
- <code title="get /families">client.families.<a href="./src/resources/families/families.ts">list</a>({ ...params }) -> FamilyListResponse</code>
- <code title="delete /families/{familyId}">client.families.<a href="./src/resources/families/families.ts">delete</a>(familyID) -> void</code>

## Members

Types:

- <code><a href="./src/resources/families/members.ts">Member</a></code>
- <code><a href="./src/resources/families/members.ts">MemberListResponse</a></code>

Methods:

- <code title="post /families/{familyId}/members">client.families.members.<a href="./src/resources/families/members.ts">create</a>(familyID, { ...params }) -> Member</code>
- <code title="get /families/{familyId}/members/{memberId}">client.families.members.<a href="./src/resources/families/members.ts">retrieve</a>(memberID, { ...params }) -> Member</code>
- <code title="put /families/{familyId}/members/{memberId}">client.families.members.<a href="./src/resources/families/members.ts">update</a>(memberID, { ...params }) -> Member</code>
- <code title="get /families/{familyId}/members">client.families.members.<a href="./src/resources/families/members.ts">list</a>(familyID, { ...params }) -> MemberListResponse</code>
- <code title="delete /families/{familyId}/members/{memberId}">client.families.members.<a href="./src/resources/families/members.ts">delete</a>(memberID, { ...params }) -> void</code>

## MealPlans

Types:

- <code><a href="./src/resources/families/meal-plans.ts">MealPlan</a></code>
- <code><a href="./src/resources/families/meal-plans.ts">MealPlanListResponse</a></code>
- <code><a href="./src/resources/families/meal-plans.ts">MealPlanGenerateShoppingListResponse</a></code>

Methods:

- <code title="post /families/{familyId}/meal-plans">client.families.mealPlans.<a href="./src/resources/families/meal-plans.ts">create</a>(familyID, { ...params }) -> MealPlan</code>
- <code title="get /families/{familyId}/meal-plans/{planId}">client.families.mealPlans.<a href="./src/resources/families/meal-plans.ts">retrieve</a>(planID, { ...params }) -> MealPlan</code>
- <code title="put /families/{familyId}/meal-plans/{planId}">client.families.mealPlans.<a href="./src/resources/families/meal-plans.ts">update</a>(planID, { ...params }) -> MealPlan</code>
- <code title="get /families/{familyId}/meal-plans">client.families.mealPlans.<a href="./src/resources/families/meal-plans.ts">list</a>(familyID, { ...params }) -> MealPlanListResponse</code>
- <code title="delete /families/{familyId}/meal-plans/{planId}">client.families.mealPlans.<a href="./src/resources/families/meal-plans.ts">delete</a>(planID, { ...params }) -> void</code>
- <code title="post /families/{familyId}/meal-plans/{planId}/generate-shopping-list">client.families.mealPlans.<a href="./src/resources/families/meal-plans.ts">generateShoppingList</a>(planID, { ...params }) -> MealPlanGenerateShoppingListResponse</code>
- <code title="post /families/{familyId}/meal-plans/{planId}/lock">client.families.mealPlans.<a href="./src/resources/families/meal-plans.ts">lock</a>(planID, { ...params }) -> MealPlan</code>

## ShoppingLists

Types:

- <code><a href="./src/resources/families/shopping-lists.ts">ShoppingList</a></code>
- <code><a href="./src/resources/families/shopping-lists.ts">ShoppingListListResponse</a></code>

Methods:

- <code title="post /families/{familyId}/shopping-lists">client.families.shoppingLists.<a href="./src/resources/families/shopping-lists.ts">create</a>(familyID, { ...params }) -> ShoppingList</code>
- <code title="get /families/{familyId}/shopping-lists/{listId}">client.families.shoppingLists.<a href="./src/resources/families/shopping-lists.ts">retrieve</a>(listID, { ...params }) -> ShoppingList</code>
- <code title="put /families/{familyId}/shopping-lists/{listId}">client.families.shoppingLists.<a href="./src/resources/families/shopping-lists.ts">update</a>(listID, { ...params }) -> ShoppingList</code>
- <code title="get /families/{familyId}/shopping-lists">client.families.shoppingLists.<a href="./src/resources/families/shopping-lists.ts">list</a>(familyID, { ...params }) -> ShoppingListListResponse</code>
- <code title="delete /families/{familyId}/shopping-lists/{listId}">client.families.shoppingLists.<a href="./src/resources/families/shopping-lists.ts">delete</a>(listID, { ...params }) -> void</code>
- <code title="post /families/{familyId}/shopping-lists/{listId}/checkout">client.families.shoppingLists.<a href="./src/resources/families/shopping-lists.ts">complete</a>(listID, { ...params }) -> ShoppingList</code>
- <code title="post /families/{familyId}/shopping-lists/{listId}/merge">client.families.shoppingLists.<a href="./src/resources/families/shopping-lists.ts">merge</a>(listID, { ...params }) -> ShoppingList</code>

## Recipes

Types:

- <code><a href="./src/resources/families/recipes/recipes.ts">Recipe</a></code>
- <code><a href="./src/resources/families/recipes/recipes.ts">RecipeListResponse</a></code>
- <code><a href="./src/resources/families/recipes/recipes.ts">RecipeRetrieveVersionsResponse</a></code>

Methods:

- <code title="post /families/{familyId}/recipes">client.families.recipes.<a href="./src/resources/families/recipes/recipes.ts">create</a>(familyID, { ...params }) -> Recipe</code>
- <code title="get /families/{familyId}/recipes/{recipeId}">client.families.recipes.<a href="./src/resources/families/recipes/recipes.ts">retrieve</a>(recipeID, { ...params }) -> Recipe</code>
- <code title="put /families/{familyId}/recipes/{recipeId}">client.families.recipes.<a href="./src/resources/families/recipes/recipes.ts">update</a>(recipeID, { ...params }) -> Recipe</code>
- <code title="get /families/{familyId}/recipes">client.families.recipes.<a href="./src/resources/families/recipes/recipes.ts">list</a>(familyID, { ...params }) -> RecipeListResponse</code>
- <code title="delete /families/{familyId}/recipes/{recipeId}">client.families.recipes.<a href="./src/resources/families/recipes/recipes.ts">delete</a>(recipeID, { ...params }) -> void</code>
- <code title="get /families/{familyId}/recipes/{recipeId}/versions">client.families.recipes.<a href="./src/resources/families/recipes/recipes.ts">retrieveVersions</a>(recipeID, { ...params }) -> RecipeRetrieveVersionsResponse</code>

### Ingredients

Types:

- <code><a href="./src/resources/families/recipes/ingredients.ts">Ingredient</a></code>
- <code><a href="./src/resources/families/recipes/ingredients.ts">IngredientListResponse</a></code>

Methods:

- <code title="post /families/{familyId}/recipes/{recipeId}/ingredients">client.families.recipes.ingredients.<a href="./src/resources/families/recipes/ingredients.ts">create</a>(recipeID, { ...params }) -> Ingredient</code>
- <code title="get /families/{familyId}/recipes/{recipeId}/ingredients/{ingredientId}">client.families.recipes.ingredients.<a href="./src/resources/families/recipes/ingredients.ts">retrieve</a>(ingredientID, { ...params }) -> Ingredient</code>
- <code title="put /families/{familyId}/recipes/{recipeId}/ingredients/{ingredientId}">client.families.recipes.ingredients.<a href="./src/resources/families/recipes/ingredients.ts">update</a>(ingredientID, { ...params }) -> Ingredient</code>
- <code title="get /families/{familyId}/recipes/{recipeId}/ingredients">client.families.recipes.ingredients.<a href="./src/resources/families/recipes/ingredients.ts">list</a>(recipeID, { ...params }) -> IngredientListResponse</code>
- <code title="delete /families/{familyId}/recipes/{recipeId}/ingredients/{ingredientId}">client.families.recipes.ingredients.<a href="./src/resources/families/recipes/ingredients.ts">delete</a>(ingredientID, { ...params }) -> void</code>

### Tags

Types:

- <code><a href="./src/resources/families/recipes/tags.ts">RecipeTag</a></code>
- <code><a href="./src/resources/families/recipes/tags.ts">TagListResponse</a></code>

Methods:

- <code title="post /families/{familyId}/recipes/{recipeId}/tags">client.families.recipes.tags.<a href="./src/resources/families/recipes/tags.ts">create</a>(recipeID, { ...params }) -> RecipeTag</code>
- <code title="get /families/{familyId}/recipes/{recipeId}/tags/{tagId}">client.families.recipes.tags.<a href="./src/resources/families/recipes/tags.ts">retrieve</a>(tagID, { ...params }) -> RecipeTag</code>
- <code title="get /families/{familyId}/recipes/{recipeId}/tags">client.families.recipes.tags.<a href="./src/resources/families/recipes/tags.ts">list</a>(recipeID, { ...params }) -> TagListResponse</code>
- <code title="delete /families/{familyId}/recipes/{recipeId}/tags/{tagId}">client.families.recipes.tags.<a href="./src/resources/families/recipes/tags.ts">delete</a>(tagID, { ...params }) -> void</code>

### Notes

Types:

- <code><a href="./src/resources/families/recipes/notes.ts">RecipeNote</a></code>
- <code><a href="./src/resources/families/recipes/notes.ts">NoteListResponse</a></code>

Methods:

- <code title="post /families/{familyId}/recipes/{recipeId}/notes">client.families.recipes.notes.<a href="./src/resources/families/recipes/notes.ts">create</a>(recipeID, { ...params }) -> RecipeNote</code>
- <code title="get /families/{familyId}/recipes/{recipeId}/notes/{noteId}">client.families.recipes.notes.<a href="./src/resources/families/recipes/notes.ts">retrieve</a>(noteID, { ...params }) -> RecipeNote</code>
- <code title="get /families/{familyId}/recipes/{recipeId}/notes">client.families.recipes.notes.<a href="./src/resources/families/recipes/notes.ts">list</a>(recipeID, { ...params }) -> NoteListResponse</code>
- <code title="delete /families/{familyId}/recipes/{recipeId}/notes/{noteId}">client.families.recipes.notes.<a href="./src/resources/families/recipes/notes.ts">delete</a>(noteID, { ...params }) -> void</code>

### Attachments

Types:

- <code><a href="./src/resources/families/recipes/attachments.ts">RecipeAttachment</a></code>
- <code><a href="./src/resources/families/recipes/attachments.ts">AttachmentListResponse</a></code>

Methods:

- <code title="post /families/{familyId}/recipes/{recipeId}/attachments">client.families.recipes.attachments.<a href="./src/resources/families/recipes/attachments.ts">create</a>(recipeID, { ...params }) -> RecipeAttachment</code>
- <code title="get /families/{familyId}/recipes/{recipeId}/attachments/{attachmentId}">client.families.recipes.attachments.<a href="./src/resources/families/recipes/attachments.ts">retrieve</a>(attachmentID, { ...params }) -> RecipeAttachment</code>
- <code title="get /families/{familyId}/recipes/{recipeId}/attachments">client.families.recipes.attachments.<a href="./src/resources/families/recipes/attachments.ts">list</a>(recipeID, { ...params }) -> AttachmentListResponse</code>
- <code title="delete /families/{familyId}/recipes/{recipeId}/attachments/{attachmentId}">client.families.recipes.attachments.<a href="./src/resources/families/recipes/attachments.ts">delete</a>(attachmentID, { ...params }) -> void</code>
- <code title="get /families/{familyId}/recipes/{recipeId}/attachments/{attachmentId}/download">client.families.recipes.attachments.<a href="./src/resources/families/recipes/attachments.ts">retrieveDownload</a>(attachmentID, { ...params }) -> void</code>

## Pantry

Types:

- <code><a href="./src/resources/families/pantry.ts">PantryItem</a></code>
- <code><a href="./src/resources/families/pantry.ts">PantryListResponse</a></code>
- <code><a href="./src/resources/families/pantry.ts">PantryBulkAddResponse</a></code>
- <code><a href="./src/resources/families/pantry.ts">PantryBulkRemoveResponse</a></code>

Methods:

- <code title="post /families/{familyId}/pantry">client.families.pantry.<a href="./src/resources/families/pantry.ts">create</a>(familyID, { ...params }) -> PantryItem</code>
- <code title="get /families/{familyId}/pantry/{itemId}">client.families.pantry.<a href="./src/resources/families/pantry.ts">retrieve</a>(itemID, { ...params }) -> PantryItem</code>
- <code title="put /families/{familyId}/pantry/{itemId}">client.families.pantry.<a href="./src/resources/families/pantry.ts">update</a>(itemID, { ...params }) -> PantryItem</code>
- <code title="get /families/{familyId}/pantry">client.families.pantry.<a href="./src/resources/families/pantry.ts">list</a>(familyID, { ...params }) -> PantryListResponse</code>
- <code title="delete /families/{familyId}/pantry/{itemId}">client.families.pantry.<a href="./src/resources/families/pantry.ts">delete</a>(itemID, { ...params }) -> void</code>
- <code title="post /families/{familyId}/pantry/bulk-add">client.families.pantry.<a href="./src/resources/families/pantry.ts">bulkAdd</a>(familyID, { ...params }) -> PantryBulkAddResponse</code>
- <code title="post /families/{familyId}/pantry/bulk-remove">client.families.pantry.<a href="./src/resources/families/pantry.ts">bulkRemove</a>(familyID, { ...params }) -> PantryBulkRemoveResponse</code>

## Snacks

Types:

- <code><a href="./src/resources/families/snacks.ts">Snack</a></code>
- <code><a href="./src/resources/families/snacks.ts">SnackListResponse</a></code>

Methods:

- <code title="post /families/{familyId}/snacks">client.families.snacks.<a href="./src/resources/families/snacks.ts">create</a>(familyID, { ...params }) -> Snack</code>
- <code title="get /families/{familyId}/snacks/{snackId}">client.families.snacks.<a href="./src/resources/families/snacks.ts">retrieve</a>(snackID, { ...params }) -> Snack</code>
- <code title="put /families/{familyId}/snacks/{snackId}">client.families.snacks.<a href="./src/resources/families/snacks.ts">update</a>(snackID, { ...params }) -> Snack</code>
- <code title="get /families/{familyId}/snacks">client.families.snacks.<a href="./src/resources/families/snacks.ts">list</a>(familyID, { ...params }) -> SnackListResponse</code>
- <code title="delete /families/{familyId}/snacks/{snackId}">client.families.snacks.<a href="./src/resources/families/snacks.ts">delete</a>(snackID, { ...params }) -> void</code>
- <code title="post /families/{familyId}/snacks/{snackId}/approve">client.families.snacks.<a href="./src/resources/families/snacks.ts">approve</a>(snackID, { ...params }) -> Snack</code>
- <code title="post /families/{familyId}/snacks/{snackId}/reject">client.families.snacks.<a href="./src/resources/families/snacks.ts">reject</a>(snackID, { ...params }) -> Snack</code>

## SchoolLunches

Types:

- <code><a href="./src/resources/families/school-lunches.ts">SchoolLunch</a></code>
- <code><a href="./src/resources/families/school-lunches.ts">SchoolLunchRetrieveSchoolLunchesResponse</a></code>

Methods:

- <code title="get /families/{familyId}/school-lunches/{lunchId}">client.families.schoolLunches.<a href="./src/resources/families/school-lunches.ts">retrieve</a>(lunchID, { ...params }) -> SchoolLunch</code>
- <code title="put /families/{familyId}/school-lunches/{lunchId}">client.families.schoolLunches.<a href="./src/resources/families/school-lunches.ts">update</a>(lunchID, { ...params }) -> SchoolLunch</code>
- <code title="delete /families/{familyId}/school-lunches/{lunchId}">client.families.schoolLunches.<a href="./src/resources/families/school-lunches.ts">delete</a>(lunchID, { ...params }) -> void</code>
- <code title="get /families/{familyId}/school-lunches">client.families.schoolLunches.<a href="./src/resources/families/school-lunches.ts">retrieveSchoolLunches</a>(familyID, { ...params }) -> SchoolLunchRetrieveSchoolLunchesResponse</code>
- <code title="post /families/{familyId}/school-lunches">client.families.schoolLunches.<a href="./src/resources/families/school-lunches.ts">schoolLunches</a>(familyID, { ...params }) -> SchoolLunch</code>
