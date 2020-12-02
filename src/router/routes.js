


// 公用子路由侧边栏
const EmptyLayout = () => import(/* webpackChunkName: "EmptyLayout" */ '@/components/EmptyLayout.vue') // webpack的魔法注释，将拆分出的js命名为EmptyLayout

const Home = () => import(/* webpackChunkName: "home" */ '@/views/home/Home.vue') // webpack的魔法注释，将拆分出的js命名为home

const Odc = () => import(/* webpackChunkName: "odc" */ '@/views/odc/Odc.vue') // webpack的魔法注释，将拆分出的js命名为odc

const SmbUserInfo = () => import(/* webpackChunkName: "smbUserInfo" */ '@/views/smbUserInfo/SmbUserInfo.vue') // webpack的魔法注释，将拆分出的js命名为smbUserInfo




const routes = [

    {
        path: "/",
        redirect: '/home',
    },

    {
        path: '/home',
        name: 'Home',
        component: Home,
        meta: {
            title: '首页',
        },
    },
    {
        path: '/odc',
        name: 'Odc',
        redirect: '/odc/activity1',
        component: EmptyLayout,
        // hidden: false, // 当前页面是否展示到nav中
        meta: {
            title: 'nav1',
        },
        children: [
            {
                path: 'activity1',
                name: 'activity1',
                redirect: '/odc/activity1/activity1-1',
                component: EmptyLayout,
                meta: {
                    title: "活动管理1",
                },
                children: [
                    {
                        path: 'activity1-1',
                        name: 'activity1-1',
                        component: Odc,
                        meta: {
                            title: "活动管理1-1",
                        }
                    },
                    {
                        path: 'activity2-2',
                        name: 'activity2-2',
                        component: Home,
                        meta: {
                            title: "活动管理2-2",
                        }
                    },
                    {
                        path: 'activity2-3',
                        name: 'activity2-3',
                        hidden: true,
                        component: Home,
                        meta: {
                            title: "活动管理2-3",
                            showBack: true,
                            selectedRouteName: 'activity1-1'
                        }
                    },
                ]
            },
            {
                path: 'activity2',
                name: 'activity2',
                component: Home,
                meta: {
                    title: "活动管理2",
                }
            },
        ]
    },
    {
        path: '/smbUserInfo',
        name: 'SmbUserInfo',
        // component: SmbUserInfo,
        component: EmptyLayout,
        hidden: false, // 当前页面是否展示到nav中
        meta: {
            title: 'nav2',
        },
        children: [
            {
                path: 'smb',
                name: 'smb',
                redirect: '/smbUserInfo/smb/smb-1',
                component: EmptyLayout,
                meta: {
                    title: "smb",
                },
                children: [
                    {
                        path: 'smb-1',
                        name: 'smb-1',
                        component: Home,
                        meta: {
                            title: "smb-1",
                        }
                    },
                    {
                        path: 'smb-2',
                        name: 'smb-2',
                        component: Home,
                        meta: {
                            title: "smb-2",
                        }
                    },
                ]
            },
            {
                path: 'smb1',
                name: 'smb1',
                redirect: '/smbUserInfo/smb1/smb1-1',
                component: EmptyLayout,
                meta: {
                    title: "smb1",
                },
                children: [
                    {
                        path: 'smb1-1',
                        name: 'smb1-1',
                        component: Home,
                        meta: {
                            title: "smb1-1",
                        }
                    },
                    {
                        path: 'smb1-2',
                        name: 'smb1-2',
                        component: Home,
                        meta: {
                            title: "smb1-2",
                        }
                    },
                ]
            },
            {
                path: 'smb2',
                name: 'smb2',
                component: Home,
                meta: {
                    title: "smb2",
                }
            },
        ]
    },
]

export default routes