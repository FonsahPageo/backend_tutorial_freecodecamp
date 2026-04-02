import { Post } from "../models/post.model.js";

// create a post
const createPost = async (req, res) => {
  try {
    const { name, description, age } = req.body;

    if (!name || !description || !age) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    const post = await Post.create({
      name,
      description,
      age,
    });

    return res.status(201).json({
      message: "Post created successfully",
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
};

// get all posts
const getPosts = async (req, res) => {
  try {
    const posts = await Post.find();
    return res.status(200).json({
      message: "Posts retrieved successfully",
      posts,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};

const updatePosts = async (req, res) => {
  try {
    // basic validation to check if body is empty
    if (Object.keys(req.body).length === 0) {
      return res.status(400).json({
        message: "No data provided to update",
      });
    }

    const post = await Post.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    if (!post) {
      return res.status(404).json({
        message: "Post not found",
      });
    }

    return res.status(200).json({
      message: "Post updated successfully",
      post
    })
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error"
    })
  }
};

export { createPost, getPosts, updatePosts };
