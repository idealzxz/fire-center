import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    {
      path: '/',
      name: 'WorkSpace',
      icon: 'dashboard',
      component: '@/pages/index',
    },
    {
      path: '/application',
      name: 'Application',
      icon: 'HomeOutlined',
      component: '@/pages/application/index',
    },
  ],
  fastRefresh: {},
  layout: {
    // 支持任何不需要 dom 的
    // https://procomponents.ant.design/components/layout#prolayout
    name: 'FireCenter',
    locale: false,
    layout: 'side',
  },
  locale: {
    default: 'zh-CN',
    antd: false,
    title: false,
    baseNavigator: true,
    baseSeparator: '-',
  },
});
