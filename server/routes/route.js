import express from 'express';
import { userSignup,userLogin, verifyEmail, updatePassword, verifyUser } from '../controllers/user-controller.js';
import { workerRegister, getAllWorkers, getWorker } from '../controllers/worker-controller.js';
import { contractorRegister, getAllContractors } from '../controllers/contractor-controller.js';

import { addProduct, getAllProducts , getProduct} from '../controllers/product-controller.js';
import { addRentalProvider, getAllProductProvider , getProvider} from '../controllers/rental-provider-controller.js';
const router=express.Router();




router.get("/verifyUser/:key",verifyUser);
router.post("/signup",userSignup);
router.post("/login",userLogin);
router.post("/email",verifyEmail);
router.put("/updatePassword",updatePassword);

//worker section
router.post("/worker" ,workerRegister);
router.get("/getAllWorkers",getAllWorkers);
// router.post('/upload',upload.single("file"),uploadImage)
// router.get("/file/:fileId", downloadImage)
router.get("/getWorker/:Id",getWorker);



//contractor section
router.post("/contractor",contractorRegister);
router.get("/getAllContractors",getAllContractors);


//Product section
router.post("/addProduct",addProduct);
router.get("/getProducts", getAllProducts)
router.get("/getProduct/:key",getProduct);


//Rental Provider section
router.post("/registerRentalProvider",addRentalProvider)
router.get("/getAllProductProvider",getAllProductProvider)
router.get("/productProvider/:id",getProvider);


export default router;