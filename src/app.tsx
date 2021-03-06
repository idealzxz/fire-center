import React from 'react';
import {
  BasicLayoutProps,
  Settings as LayoutSettings,
} from '@ant-design/pro-layout';



import { history } from 'umi';

export const layout = ({
  initialState,
}: {
  initialState: { settings?: LayoutSettings; currentUser?: API.CurrentUser };
}): BasicLayoutProps => {
  console.log(initialState);
  
  return {
    rightContentRender: () => <div>1</div>,
    // footerRender: () => {},
    onPageChange: () => {
      const { currentUser } = initialState;
      const { location } = history;
      // 如果没有登录，重定向到 login
      // if (!currentUser && location.pathname !== '/user/login') {
      //   history.push('/user/login');
      // }
    },
    menuHeaderRender: undefined,
    ...initialState?.settings,
  };
};

export async function getInitialState() {
  // const data = await fetchXXX();F
  // return data;
  return {
    name: 'Serati Ma',
    avatar:
      'https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png',
    userid: '00000001',
    email: 'antdesign@alipay.com',
    signature: '海纳百川，有容乃大',
    title: '交互专家',
    group: '蚂蚁金服－某某某事业群－某某平台部－某某技术部－UED',
    tags: [
      { key: '0', label: '很有想法的' },
      { key: '1', label: '专注设计' },
      { key: '2', label: '辣~' },
      { key: '3', label: '大长腿' },
      { key: '4', label: '川妹子' },
      { key: '5', label: '海纳百川' },
    ],
    notice: [
      {
        id: 'xxx1',
        title: 'Alipay',
        logo: 'https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png',
        description: '那是一种内在的东西，他们到达不了，也无法触及的',
        updatedAt: '2021-05-30T21:34:46.003Z',
        member: '科学搬砖组',
        href: '',
        memberLink: '',
      },
      {
        id: 'xxx2',
        title: 'Angular',
        logo: 'https://gw.alipayobjects.com/zos/rmsportal/zOsKZmFRdUtvpqCImOVY.png',
        description: '希望是一个好东西，也许是最好的，好东西是不会消亡的',
        updatedAt: '2017-07-24T00:00:00.000Z',
        member: '全组都是吴彦祖',
        href: '',
        memberLink: '',
      },
      {
        id: 'xxx3',
        title: 'Ant Design',
        logo: 'https://gw.alipayobjects.com/zos/rmsportal/dURIMkkrRFpPgTuzkwnB.png',
        description: '城镇中有那么多的酒馆，她却偏偏走进了我的酒馆',
        updatedAt: '2021-05-30T21:34:46.003Z',
        member: '中二少女团',
        href: '',
        memberLink: '',
      },
      {
        id: 'xxx4',
        title: 'Ant Design Pro',
        logo: 'https://gw.alipayobjects.com/zos/rmsportal/sfjbOqnsXXJgNCjCzDBL.png',
        description: '那时候我只会想自己想要什么，从不想自己拥有什么',
        updatedAt: '2017-07-23T00:00:00.000Z',
        member: '程序员日常',
        href: '',
        memberLink: '',
      },
      {
        id: 'xxx5',
        title: 'Bootstrap',
        logo: 'https://gw.alipayobjects.com/zos/rmsportal/siCrBXXhmvTQGWPNLBow.png',
        description: '凛冬将至',
        updatedAt: '2017-07-23T00:00:00.000Z',
        member: '高逼格设计天团',
        href: '',
        memberLink: '',
      },
      {
        id: 'xxx6',
        title: 'React',
        logo: 'https://gw.alipayobjects.com/zos/rmsportal/kZzEzemZyKLKFsojXItE.png',
        description: '生命就像一盒巧克力，结果往往出人意料',
        updatedAt: '2017-07-23T00:00:00.000Z',
        member: '骗你来学计算机',
        href: '',
        memberLink: '',
      },
    ],
    notifyCount: 12,
    unreadCount: 11,
    country: 'China',
    geographic: {
      province: { label: '浙江省', key: '330000' },
      city: { label: '杭州市', key: '330100' },
    },
    address: '西湖区工专路 77 号',
    phone: '0752-268888888',
  };
}
