import { Router} from "express";
import {createPost, getPosts, updatePosts} from "../controllers/post.controller.js";

const router = Router();

router.route("/create-post").post(createPost);
router.route("/get-posts").get(getPosts);
router.route("/update-posts/:id").patch(updatePosts);

export default router;