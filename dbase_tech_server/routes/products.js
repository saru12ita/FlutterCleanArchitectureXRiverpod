const router = express().Router();
const productControllers = require('../controllers/products')

router.get('/products/:id',productControllers.getProductsDetails);
router.get('/products/count',productControllers.getProductsCount);


router.delete('/products/:id',);
router.put('/products/:id',(req,res) =>{});

module.export = router;