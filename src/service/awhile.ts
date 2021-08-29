import request from '@/utils/request';

export type awhileParamsType = {
  tag?: string | number;
  user_id: string;
  content?: string;
  picture_url?: string[];
  links?: string;
};

// 获取时刻列表
export async function getAwhileList(params: { tag?: string }) {
  return request('/api/awhile/list', {
    method: 'POST',
    data: params,
  });
}

// 添加一级时刻
export async function addOneAwhile(params: awhileParamsType) {
  return request('/api/awhile/addOne', {
    method: 'POST',
    data: params,
  });
}
