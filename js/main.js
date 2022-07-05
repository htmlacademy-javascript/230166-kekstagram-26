import { generatePosts } from './generate-posts.js';
import { createPostPreviews } from './create-post-previews.js';
import { showPost } from './show-post.js';
import { uploadFile } from './upload-file.js';
import './upload-file.js';

const posts = generatePosts();

createPostPreviews(posts);
showPost(posts);
uploadFile();

