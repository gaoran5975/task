export default {
    path : '/houtai',
    component : () => import('@/views/Houtai'),
    children : [
        {
            path : 'sy',
            component : () => import('@/components/Htshouye')
        },
        {
            path : 'gggl',
            component : () => import('@/views/Gggl/index.vue'),
            children : [{
                   path : 'child1',
                   component : () => import('@/views/Gggl/child1.vue') 
            },
                {
                   path : 'child2',
                   component : () => import('@/views/Gggl/child2.vue') 
            } ,
               {
                   path : 'child3',
                   component : () => import('@/views/Gggl/child3.vue') 
                },
                {
                    path : '/houtai/gggl',
                    redirect : '/houtai/gggl/child1'
                }
            ]
        },
        {
            path : 'sjzx',
            component : () => import('@/views/Sjzx/index.vue'),
            children : [{
                   path : 'child1',
                   component : () => import('@/views/Sjzx/child1.vue') 
            },
                {
                   path : 'child2',
                   component : () => import('@/views/Sjzx/child2.vue') 
            } ,
                {
                    path : '/houtai/sjzx',
                    redirect : '/houtai/sjzx/child1'
                }
            ]
        },
        {
            path : 'jbxxtx',
            component : () => import('@/components/Register2')
        }
    ]
}