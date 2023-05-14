import FoodRecomendation from '@/data/FoodRecomendation.json';

export default function handler(req, res){
    res.status(200).json(FoodRecomendation);
}