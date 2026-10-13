import Mock from 'mockjs'
import { defineFakeRoute } from 'vite-plugin-fake-server/client'

export default defineFakeRoute([
    {
        url: '/mock/system/role/list',
        method: 'post',
        response: (opt: any) => {
            const { page, pageSize } = opt.body
            return {
                code: 200,
                data: Mock.mock({
                    [`list|${pageSize}`]: [
                        {
                            'id|+1': (page - 1) * pageSize + 1,
                            'name': '@cname',
                            'desc': '@ctitle(7, 20)',
                            'time': '@date(yyyy-MM-dd hh:mm:ss)',
                        },
                    ],
                    pager: {
                        page,
                        pageSize,
                        total: 198,
                    },
                }),
                message: 'success',
            }
        },
    },
    {
        url: '/mock/system/role/add',
        method: 'post',
        response: () => {
            return {
                code: 200,
                data: {},
                message: 'success',
            }
        },
    },
    {
        url: '/mock/system/role/update',
        method: 'post',
        response: () => {
            return {
                code: 200,
                data: {},
                message: 'success',
            }
        },
    },
    {
        url: '/mock/system/role/del',
        method: 'post',
        response: () => {
            return {
                code: 200,
                data: {},
                message: 'success',
            }
        },
    },
])
