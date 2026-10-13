import Mock from 'mockjs'
import { defineFakeRoute } from 'vite-plugin-fake-server/client'

export default defineFakeRoute([
    {
        url: '/mock/card/list',
        method: 'post',
        response: (opt) => {
            const { page, pageSize } = opt.body
            return {
                code: 200,
                data: Mock.mock({
                    [`list|${pageSize}`]: [
                        {
                            'id|+1': (page - 1) * pageSize + 1,
                            'title': '@ctitle',
                            'image': 'https://blog.51weblove.com/wp-content/uploads/2019/03/2019032323331541.jpg',
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
])
