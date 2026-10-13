import Mock from 'mockjs'
import { defineFakeRoute } from 'vite-plugin-fake-server/client'
import { getRandomNumber } from './utils'

export default defineFakeRoute([
    {
        url: '/mock/system/dept/list',
        method: 'post',
        response: () => {
            return {
                code: 200,
                data: Mock.mock({
                    list: Array.from({ length: 10 }, (_, index) => ({
                        id: index + 1,
                        name: '@ctitle(4, 7)',
                        desc: '@ctitle(7, 20)',
                        time: '@date(yyyy-MM-dd hh:mm:ss)',
                        children: Array.from({ length: getRandomNumber(0, 3) }, () => ({
                            id: getRandomNumber(100, 300),
                            name: '@ctitle(4, 7)',
                            desc: '@ctitle(7, 20)',
                            time: '@date(yyyy-MM-dd hh:mm:ss)',
                        })),
                    })),
                }),
                message: 'success',
            }
        },
    },
    {
        url: '/mock/system/dept/add',
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
        url: '/mock/system/dept/update',
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
        url: '/mock/system/dept/del',
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
