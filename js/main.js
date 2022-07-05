import { generatePosts } from './generate-posts.js';
import { createPostPreviews } from './create-post-previews.js';
import { showPost } from './show-post.js';
import './form.js';

const posts = generatePosts();

createPostPreviews(posts);
showPost(posts);

