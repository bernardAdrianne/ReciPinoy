import express from 'express';
import { addRecipeWithImage, searchRecipesAI, getRecipesByCategory, getAllRecipes, getRecipe } from '../controllers/recipeController.js';
import { verifyToken } from '../middleware/verifyToken.js';

const router = express.Router();

router.post('/add', verifyToken, addRecipeWithImage);
router.get('/search', verifyToken, searchRecipesAI);
router.get('/category', getRecipesByCategory);
router.get('/all', getAllRecipes);
router.get('/:id', getRecipe);

export default router;
