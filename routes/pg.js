import Express  from "express";
import { getPost ,getPostid, postData,postData2,postData3} from "../controller/pgData.js";



const router=Express.Router();

router.get("/",getPost);
router.get("/:id",getPostid);
router.post("/scheduleform",postData);
router.post("/reserveform",postData2);
router.post("/reserveform2",postData3);



export default router;