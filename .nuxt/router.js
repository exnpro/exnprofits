import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _6e80190e = () => interopDefault(import('..\\pages\\about.vue' /* webpackChunkName: "pages/about" */))
const _f99cba9c = () => interopDefault(import('..\\pages\\admin\\index.vue' /* webpackChunkName: "pages/admin/index" */))
const _5d4a3c3e = () => interopDefault(import('..\\pages\\contact.vue' /* webpackChunkName: "pages/contact" */))
const _5aa82b10 = () => interopDefault(import('..\\pages\\copytrade.vue' /* webpackChunkName: "pages/copytrade" */))
const _40ac4a66 = () => interopDefault(import('..\\pages\\dashboard\\index.vue' /* webpackChunkName: "pages/dashboard/index" */))
const _4bba4b52 = () => interopDefault(import('..\\pages\\faq.vue' /* webpackChunkName: "pages/faq" */))
const _088cd6d0 = () => interopDefault(import('..\\pages\\help.vue' /* webpackChunkName: "pages/help" */))
const _3b50e23a = () => interopDefault(import('..\\pages\\legal.vue' /* webpackChunkName: "pages/legal" */))
const _749dfb50 = () => interopDefault(import('..\\pages\\login\\index.vue' /* webpackChunkName: "pages/login/index" */))
const _6dd9ca81 = () => interopDefault(import('..\\pages\\policy.vue' /* webpackChunkName: "pages/policy" */))
const _7f804690 = () => interopDefault(import('..\\pages\\register\\index.vue' /* webpackChunkName: "pages/register/index" */))
const _06630e35 = () => interopDefault(import('..\\pages\\resolve\\index.vue' /* webpackChunkName: "pages/resolve/index" */))
const _3835b208 = () => interopDefault(import('..\\pages\\terms.vue' /* webpackChunkName: "pages/terms" */))
const _a6ce2d32 = () => interopDefault(import('..\\pages\\whyus.vue' /* webpackChunkName: "pages/whyus" */))
const _78619f55 = () => interopDefault(import('..\\pages\\admin\\account\\index.vue' /* webpackChunkName: "pages/admin/account/index" */))
const _ba4b9f06 = () => interopDefault(import('..\\pages\\admin\\deposits\\index.vue' /* webpackChunkName: "pages/admin/deposits/index" */))
const _485e367f = () => interopDefault(import('..\\pages\\admin\\investment\\index.vue' /* webpackChunkName: "pages/admin/investment/index" */))
const _184292e3 = () => interopDefault(import('..\\pages\\admin\\loans.vue' /* webpackChunkName: "pages/admin/loans" */))
const _6c944fb2 = () => interopDefault(import('..\\pages\\admin\\loans.vue\\index.vue' /* webpackChunkName: "pages/admin/loans.vue/index" */))
const _5912908c = () => interopDefault(import('..\\pages\\admin\\notifications\\index.vue' /* webpackChunkName: "pages/admin/notifications/index" */))
const _2eec2b97 = () => interopDefault(import('..\\pages\\admin\\otp\\index.vue' /* webpackChunkName: "pages/admin/otp/index" */))
const _24722d2f = () => interopDefault(import('..\\pages\\admin\\settings\\index.vue' /* webpackChunkName: "pages/admin/settings/index" */))
const _8f92fa8c = () => interopDefault(import('..\\pages\\admin\\transfers\\index.vue' /* webpackChunkName: "pages/admin/transfers/index" */))
const _c9b7facc = () => interopDefault(import('..\\pages\\admin\\users\\index.vue' /* webpackChunkName: "pages/admin/users/index" */))
const _3ef14437 = () => interopDefault(import('..\\pages\\admin\\verification\\index.vue' /* webpackChunkName: "pages/admin/verification/index" */))
const _9df95852 = () => interopDefault(import('..\\pages\\admin\\victims\\index.vue' /* webpackChunkName: "pages/admin/victims/index" */))
const _286f57e8 = () => interopDefault(import('..\\pages\\admin\\withdraw\\index.vue' /* webpackChunkName: "pages/admin/withdraw/index" */))
const _06cc1f59 = () => interopDefault(import('..\\pages\\admin\\withdraws\\index.vue' /* webpackChunkName: "pages/admin/withdraws/index" */))
const _7767559a = () => interopDefault(import('..\\pages\\dashboard\\account\\index.vue' /* webpackChunkName: "pages/dashboard/account/index" */))
const _6e8e4889 = () => interopDefault(import('..\\pages\\dashboard\\deposit\\index.vue' /* webpackChunkName: "pages/dashboard/deposit/index" */))
const _63e97a64 = () => interopDefault(import('..\\pages\\dashboard\\home\\index.vue' /* webpackChunkName: "pages/dashboard/home/index" */))
const _4c936e1d = () => interopDefault(import('..\\pages\\dashboard\\loan\\index.vue' /* webpackChunkName: "pages/dashboard/loan/index" */))
const _3933109e = () => interopDefault(import('..\\pages\\dashboard\\profile\\index.vue' /* webpackChunkName: "pages/dashboard/profile/index" */))
const _32b7e6b8 = () => interopDefault(import('..\\pages\\dashboard\\support\\index.vue' /* webpackChunkName: "pages/dashboard/support/index" */))
const _28a01d44 = () => interopDefault(import('..\\pages\\dashboard\\trades\\index.vue' /* webpackChunkName: "pages/dashboard/trades/index" */))
const _f64cd4d0 = () => interopDefault(import('..\\pages\\dashboard\\transactions\\index.vue' /* webpackChunkName: "pages/dashboard/transactions/index" */))
const _181b96c2 = () => interopDefault(import('..\\pages\\dashboard\\transfer\\index.vue' /* webpackChunkName: "pages/dashboard/transfer/index" */))
const _0a206a43 = () => interopDefault(import('..\\pages\\dashboard\\withdraw\\index.vue' /* webpackChunkName: "pages/dashboard/withdraw/index" */))
const _f3938e48 = () => interopDefault(import('..\\pages\\password\\new\\index.vue' /* webpackChunkName: "pages/password/new/index" */))
const _121b5566 = () => interopDefault(import('..\\pages\\password\\reset\\index.vue' /* webpackChunkName: "pages/password/reset/index" */))
const _da954bb4 = () => interopDefault(import('..\\pages\\trade\\crypto.vue' /* webpackChunkName: "pages/trade/crypto" */))
const _367ca2e7 = () => interopDefault(import('..\\pages\\trade\\forex.vue' /* webpackChunkName: "pages/trade/forex" */))
const _1314a489 = () => interopDefault(import('..\\pages\\trade\\options.vue' /* webpackChunkName: "pages/trade/options" */))
const _228891c1 = () => interopDefault(import('..\\pages\\trade\\stock.vue' /* webpackChunkName: "pages/trade/stock" */))
const _5ab38953 = () => interopDefault(import('..\\pages\\dashboard\\wallet\\fund.vue' /* webpackChunkName: "pages/dashboard/wallet/fund" */))
const _606ab20e = () => interopDefault(import('..\\pages\\dashboard\\wallet\\upin.vue' /* webpackChunkName: "pages/dashboard/wallet/upin" */))
const _3fdec7d0 = () => interopDefault(import('..\\pages\\dashboard\\wallet\\withdraw.vue' /* webpackChunkName: "pages/dashboard/wallet/withdraw" */))
const _e390185a = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
const _7e6e5b1c = () => interopDefault(import('..\\pages\\admin\\users\\_user.vue' /* webpackChunkName: "pages/admin/users/_user" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _6e80190e,
    name: "about"
  }, {
    path: "/admin",
    component: _f99cba9c,
    name: "admin"
  }, {
    path: "/contact",
    component: _5d4a3c3e,
    name: "contact"
  }, {
    path: "/copytrade",
    component: _5aa82b10,
    name: "copytrade"
  }, {
    path: "/dashboard",
    component: _40ac4a66,
    name: "dashboard"
  }, {
    path: "/faq",
    component: _4bba4b52,
    name: "faq"
  }, {
    path: "/help",
    component: _088cd6d0,
    name: "help"
  }, {
    path: "/legal",
    component: _3b50e23a,
    name: "legal"
  }, {
    path: "/login",
    component: _749dfb50,
    name: "login"
  }, {
    path: "/policy",
    component: _6dd9ca81,
    name: "policy"
  }, {
    path: "/register",
    component: _7f804690,
    name: "register"
  }, {
    path: "/resolve",
    component: _06630e35,
    name: "resolve"
  }, {
    path: "/terms",
    component: _3835b208,
    name: "terms"
  }, {
    path: "/whyus",
    component: _a6ce2d32,
    name: "whyus"
  }, {
    path: "/admin/account",
    component: _78619f55,
    name: "admin-account"
  }, {
    path: "/admin/deposits",
    component: _ba4b9f06,
    name: "admin-deposits"
  }, {
    path: "/admin/investment",
    component: _485e367f,
    name: "admin-investment"
  }, {
    path: "/admin/loans",
    component: _184292e3,
    name: "admin-loans"
  }, {
    path: "/admin/loans.vue",
    component: _6c944fb2,
    name: "admin-loans.vue"
  }, {
    path: "/admin/notifications",
    component: _5912908c,
    name: "admin-notifications"
  }, {
    path: "/admin/otp",
    component: _2eec2b97,
    name: "admin-otp"
  }, {
    path: "/admin/settings",
    component: _24722d2f,
    name: "admin-settings"
  }, {
    path: "/admin/transfers",
    component: _8f92fa8c,
    name: "admin-transfers"
  }, {
    path: "/admin/users",
    component: _c9b7facc,
    name: "admin-users"
  }, {
    path: "/admin/verification",
    component: _3ef14437,
    name: "admin-verification"
  }, {
    path: "/admin/victims",
    component: _9df95852,
    name: "admin-victims"
  }, {
    path: "/admin/withdraw",
    component: _286f57e8,
    name: "admin-withdraw"
  }, {
    path: "/admin/withdraws",
    component: _06cc1f59,
    name: "admin-withdraws"
  }, {
    path: "/dashboard/account",
    component: _7767559a,
    name: "dashboard-account"
  }, {
    path: "/dashboard/deposit",
    component: _6e8e4889,
    name: "dashboard-deposit"
  }, {
    path: "/dashboard/home",
    component: _63e97a64,
    name: "dashboard-home"
  }, {
    path: "/dashboard/loan",
    component: _4c936e1d,
    name: "dashboard-loan"
  }, {
    path: "/dashboard/profile",
    component: _3933109e,
    name: "dashboard-profile"
  }, {
    path: "/dashboard/support",
    component: _32b7e6b8,
    name: "dashboard-support"
  }, {
    path: "/dashboard/trades",
    component: _28a01d44,
    name: "dashboard-trades"
  }, {
    path: "/dashboard/transactions",
    component: _f64cd4d0,
    name: "dashboard-transactions"
  }, {
    path: "/dashboard/transfer",
    component: _181b96c2,
    name: "dashboard-transfer"
  }, {
    path: "/dashboard/withdraw",
    component: _0a206a43,
    name: "dashboard-withdraw"
  }, {
    path: "/password/new",
    component: _f3938e48,
    name: "password-new"
  }, {
    path: "/password/reset",
    component: _121b5566,
    name: "password-reset"
  }, {
    path: "/trade/crypto",
    component: _da954bb4,
    name: "trade-crypto"
  }, {
    path: "/trade/forex",
    component: _367ca2e7,
    name: "trade-forex"
  }, {
    path: "/trade/options",
    component: _1314a489,
    name: "trade-options"
  }, {
    path: "/trade/stock",
    component: _228891c1,
    name: "trade-stock"
  }, {
    path: "/dashboard/wallet/fund",
    component: _5ab38953,
    name: "dashboard-wallet-fund"
  }, {
    path: "/dashboard/wallet/upin",
    component: _606ab20e,
    name: "dashboard-wallet-upin"
  }, {
    path: "/dashboard/wallet/withdraw",
    component: _3fdec7d0,
    name: "dashboard-wallet-withdraw"
  }, {
    path: "/",
    component: _e390185a,
    name: "index"
  }, {
    path: "/admin/users/:user",
    component: _7e6e5b1c,
    name: "admin-users-user"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
