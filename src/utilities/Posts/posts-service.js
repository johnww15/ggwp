import * as PostAPI from "./posts-api";

export async function createPost(body) {
  const response = await PostAPI.createPost(body);
  return response;
}

export async function getFeedListByUserId() {
  const response = await PostAPI.getFeedListByUserId();
  return response;
}

export async function updateFeedItem(body) {
  const response = await PostAPI.updateFeedItem(body);
  return response;
}

export async function deletePost(postId) {
  const response = await PostAPI.deletePost(postId);
  return response;
}

export async function getPremiumFeedList(arr) {
  const response = await PostAPI.getPremiumFeedList(arr);
  return response;
}
