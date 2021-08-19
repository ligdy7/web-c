import request from '@/utils/request';

export type commentParamsType = {
  article_id: string;
  user_id: string;
  content: string;
  name?: string;
};

// 获取评论列表
export async function getCommentList(params: { id: string }) {
  return request('/api/comment/list', {
    method: 'POST',
    data: params,
  });
}

// 发表一级评论
export async function addOneComment(params: commentParamsType) {
  return request('/api/comment/addOne', {
    method: 'POST',
    data: params,
  });
}
