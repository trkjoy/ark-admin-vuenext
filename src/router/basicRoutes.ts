import type { RouteRecordRaw } from 'vue-router'
import { PageEnum, PageTitleEnum } from '/@/enums/pageEnum'
import { toHump } from '/@/utils'

/**
 * @description default layout
 */
export const ParentLayout = import('/@/layouts/index.vue')

/**
 * @description empty layout
 */
export const EmptyLayout = import('/@/layouts/components/EmptyLayout.vue')

/**
 * @description login page route
 */
export const LoginRoute: RouteRecordRaw = {
  path: PageEnum.Login,
  name: toHump(PageEnum.Login),
  component: () => import('/@/views/login/Login.vue'),
  meta: {
    title: PageTitleEnum.Login,
    hidden: true,
  },
}

/**
 * @description 404 page route
 */
export const Error404Route: RouteRecordRaw = {
  path: PageEnum.NotFound,
  name: toHump(PageEnum.NotFound),
  component: () => import('/@/views/error/Error404.vue'),
  meta: {
    title: PageTitleEnum.NotFound,
    hidden: true,
  },
}

/**
 * @description 404 page route
 */
export const Error403Route: RouteRecordRaw = {
  path: PageEnum.Forbidden,
  name: toHump(PageEnum.Forbidden),
  component: () => import('/@/views/error/Error403.vue'),
  meta: {
    title: PageTitleEnum.Forbidden,
    hidden: true,
  },
}

/**
 * @description root route
 */
export const RootRoute: RouteRecordRaw = {
  path: PageEnum.Root,
  name: 'RootPage',
  redirect: PageEnum.Dashboard,
  children: [
    {
      path: PageEnum.Dashboard,
      name: toHump(PageEnum.Dashboard),
      component: () => import('/@/views/dashboard/index.vue'),
      meta: {
        title: PageTitleEnum.Dashboard,
      },
    },
  ],
}

/**
 * @description notfound route
 */
export const NotFoundRoute: RouteRecordRaw = {
  path: '/:path(.*)*',
  name: 'NotFound',
  redirect: PageEnum.NotFound,
  meta: {
    hidden: true,
  },
}

/**
 * @description basic routing without permission
 */
export const basicRoutes = [NotFoundRoute, LoginRoute, Error404Route, Error403Route, RootRoute]