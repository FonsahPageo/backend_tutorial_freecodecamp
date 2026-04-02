import { Router} from "express";
import {createPost, getPosts, updatePost, deletePost} from "../controllers/post.controller.js";

const router = Router();

router.route("/create-post").post(createPost);
router.route("/get-posts").get(getPosts);
router.route("/update-post/:id").patch(updatePost);
router.route("/delete-post/:id").delete(deletePost);

export default router;