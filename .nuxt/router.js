import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _70234198 = () => interopDefault(import('..\\pages\\about.vue' /* webpackChunkName: "pages/about" */))
const _4fb545cc = () => interopDefault(import('..\\pages\\admin\\index.vue' /* webpackChunkName: "pages/admin/index" */))
const _ef5f92f2 = () => interopDefault(import('..\\pages\\contact.vue' /* webpackChunkName: "pages/contact" */))
const _299aee36 = () => interopDefault(import('..\\pages\\copytrade.vue' /* webpackChunkName: "pages/copytrade" */))
const _a5db3e32 = () => interopDefault(import('..\\pages\\dashboard\\index.vue' /* webpackChunkName: "pages/dashboard/index" */))
const _7a9871fd = () => interopDefault(import('..\\pages\\faq.vue' /* webpackChunkName: "pages/faq" */))
const _76ca33ea = () => interopDefault(import('..\\pages\\help.vue' /* webpackChunkName: "pages/help" */))
const _d681af40 = () => interopDefault(import('..\\pages\\legal.vue' /* webpackChunkName: "pages/legal" */))
const _db96b51c = () => interopDefault(import('..\\pages\\login\\index.vue' /* webpackChunkName: "pages/login/index" */))
const _4234491b = () => interopDefault(import('..\\pages\\policy.vue' /* webpackChunkName: "pages/policy" */))
const _0a419536 = () => interopDefault(import('..\\pages\\register\\index.vue' /* webpackChunkName: "pages/register/index" */))
const _7eeb5a62 = () => interopDefault(import('..\\pages\\resolve\\index.vue' /* webpackChunkName: "pages/resolve/index" */))
const _dcb80fa4 = () => interopDefault(import('..\\pages\\terms.vue' /* webpackChunkName: "pages/terms" */))
const _06072f8d = () => interopDefault(import('..\\pages\\whyus.vue' /* webpackChunkName: "pages/whyus" */))
const _bc8a4d0a = () => interopDefault(import('..\\pages\\admin\\account\\index.vue' /* webpackChunkName: "pages/admin/account/index" */))
const _b6af89d2 = () => interopDefault(import('..\\pages\\admin\\deposits\\index.vue' /* webpackChunkName: "pages/admin/deposits/index" */))
const _0ed40299 = () => interopDefault(import('..\\pages\\admin\\investment\\index.vue' /* webpackChunkName: "pages/admin/investment/index" */))
const _36739406 = () => interopDefault(import('..\\pages\\admin\\loans.vue' /* webpackChunkName: "pages/admin/loans" */))
const _01a920cd = () => interopDefault(import('..\\pages\\admin\\loans.vue\\index.vue' /* webpackChunkName: "pages/admin/loans.vue/index" */))
const _4cad8540 = () => interopDefault(import('..\\pages\\admin\\notifications\\index.vue' /* webpackChunkName: "pages/admin/notifications/index" */))
const _0e9468bd = () => interopDefault(import('..\\pages\\admin\\otp\\index.vue' /* webpackChunkName: "pages/admin/otp/index" */))
const _264037c9 = () => interopDefault(import('..\\pages\\admin\\settings\\index.vue' /* webpackChunkName: "pages/admin/settings/index" */))
const _1fac6940 = () => interopDefault(import('..\\pages\\admin\\transfers\\index.vue' /* webpackChunkName: "pages/admin/transfers/index" */))
const _31b18e40 = () => interopDefault(import('..\\pages\\admin\\users\\index.vue' /* webpackChunkName: "pages/admin/users/index" */))
const _3f2471d1 = () => interopDefault(import('..\\pages\\admin\\verification\\index.vue' /* webpackChunkName: "pages/admin/verification/index" */))
const _4b46e406 = () => interopDefault(import('..\\pages\\admin\\victims\\index.vue' /* webpackChunkName: "pages/admin/victims/index" */))
const _2a3d6282 = () => interopDefault(import('..\\pages\\admin\\withdraw\\index.vue' /* webpackChunkName: "pages/admin/withdraw/index" */))
const _3ebf67ff = () => interopDefault(import('..\\pages\\admin\\withdraws\\index.vue' /* webpackChunkName: "pages/admin/withdraws/index" */))
const _7fab0cc0 = () => interopDefault(import('..\\pages\\dashboard\\account\\index.vue' /* webpackChunkName: "pages/dashboard/account/index" */))
const _76d1ffaf = () => interopDefault(import('..\\pages\\dashboard\\deposit\\index.vue' /* webpackChunkName: "pages/dashboard/deposit/index" */))
const _604d6530 = () => interopDefault(import('..\\pages\\dashboard\\home\\index.vue' /* webpackChunkName: "pages/dashboard/home/index" */))
const _4e6178b7 = () => interopDefault(import('..\\pages\\dashboard\\loan\\index.vue' /* webpackChunkName: "pages/dashboard/loan/index" */))
const _4176c7c4 = () => interopDefault(import('..\\pages\\dashboard\\profile\\index.vue' /* webpackChunkName: "pages/dashboard/profile/index" */))
const _3afb9dde = () => interopDefault(import('..\\pages\\dashboard\\support\\index.vue' /* webpackChunkName: "pages/dashboard/support/index" */))
const _9bb48510 = () => interopDefault(import('..\\pages\\dashboard\\trades\\index.vue' /* webpackChunkName: "pages/dashboard/trades/index" */))
const _93af339c = () => interopDefault(import('..\\pages\\dashboard\\transactions\\index.vue' /* webpackChunkName: "pages/dashboard/transactions/index" */))
const _184ec45c = () => interopDefault(import('..\\pages\\dashboard\\transfer\\index.vue' /* webpackChunkName: "pages/dashboard/transfer/index" */))
const _0a5397dd = () => interopDefault(import('..\\pages\\dashboard\\withdraw\\index.vue' /* webpackChunkName: "pages/dashboard/withdraw/index" */))
const _7d4bbc14 = () => interopDefault(import('..\\pages\\password\\new\\index.vue' /* webpackChunkName: "pages/password/new/index" */))
const _0e7f4032 = () => interopDefault(import('..\\pages\\password\\reset\\index.vue' /* webpackChunkName: "pages/password/reset/index" */))
const _56a61a4c = () => interopDefault(import('..\\pages\\trade\\crypto.vue' /* webpackChunkName: "pages/trade/crypto" */))
const _03004601 = () => interopDefault(import('..\\pages\\trade\\forex.vue' /* webpackChunkName: "pages/trade/forex" */))
const _65882dba = () => interopDefault(import('..\\pages\\trade\\options.vue' /* webpackChunkName: "pages/trade/options" */))
const _21e7964a = () => interopDefault(import('..\\pages\\trade\\stock.vue' /* webpackChunkName: "pages/trade/stock" */))
const _dab25c0e = () => interopDefault(import('..\\pages\\dashboard\\wallet\\fund.vue' /* webpackChunkName: "pages/dashboard/wallet/fund" */))
const _cf440a98 = () => interopDefault(import('..\\pages\\dashboard\\wallet\\upin.vue' /* webpackChunkName: "pages/dashboard/wallet/upin" */))
const _3379bc84 = () => interopDefault(import('..\\pages\\dashboard\\wallet\\withdraw.vue' /* webpackChunkName: "pages/dashboard/wallet/withdraw" */))
const _30b38c0e = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
const _57565e18 = () => interopDefault(import('..\\pages\\admin\\users\\_user.vue' /* webpackChunkName: "pages/admin/users/_user" */))

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
    component: _70234198,
    name: "about"
  }, {
    path: "/admin",
    component: _4fb545cc,
    name: "admin"
  }, {
    path: "/contact",
    component: _ef5f92f2,
    name: "contact"
  }, {
    path: "/copytrade",
    component: _299aee36,
    name: "copytrade"
  }, {
    path: "/dashboard",
    component: _a5db3e32,
    name: "dashboard"
  }, {
    path: "/faq",
    component: _7a9871fd,
    name: "faq"
  }, {
    path: "/help",
    component: _76ca33ea,
    name: "help"
  }, {
    path: "/legal",
    component: _d681af40,
    name: "legal"
  }, {
    path: "/login",
    component: _db96b51c,
    name: "login"
  }, {
    path: "/policy",
    component: _4234491b,
    name: "policy"
  }, {
    path: "/register",
    component: _0a419536,
    name: "register"
  }, {
    path: "/resolve",
    component: _7eeb5a62,
    name: "resolve"
  }, {
    path: "/terms",
    component: _dcb80fa4,
    name: "terms"
  }, {
    path: "/whyus",
    component: _06072f8d,
    name: "whyus"
  }, {
    path: "/admin/account",
    component: _bc8a4d0a,
    name: "admin-account"
  }, {
    path: "/admin/deposits",
    component: _b6af89d2,
    name: "admin-deposits"
  }, {
    path: "/admin/investment",
    component: _0ed40299,
    name: "admin-investment"
  }, {
    path: "/admin/loans",
    component: _36739406,
    name: "admin-loans"
  }, {
    path: "/admin/loans.vue",
    component: _01a920cd,
    name: "admin-loans.vue"
  }, {
    path: "/admin/notifications",
    component: _4cad8540,
    name: "admin-notifications"
  }, {
    path: "/admin/otp",
    component: _0e9468bd,
    name: "admin-otp"
  }, {
    path: "/admin/settings",
    component: _264037c9,
    name: "admin-settings"
  }, {
    path: "/admin/transfers",
    component: _1fac6940,
    name: "admin-transfers"
  }, {
    path: "/admin/users",
    component: _31b18e40,
    name: "admin-users"
  }, {
    path: "/admin/verification",
    component: _3f2471d1,
    name: "admin-verification"
  }, {
    path: "/admin/victims",
    component: _4b46e406,
    name: "admin-victims"
  }, {
    path: "/admin/withdraw",
    component: _2a3d6282,
    name: "admin-withdraw"
  }, {
    path: "/admin/withdraws",
    component: _3ebf67ff,
    name: "admin-withdraws"
  }, {
    path: "/dashboard/account",
    component: _7fab0cc0,
    name: "dashboard-account"
  }, {
    path: "/dashboard/deposit",
    component: _76d1ffaf,
    name: "dashboard-deposit"
  }, {
    path: "/dashboard/home",
    component: _604d6530,
    name: "dashboard-home"
  }, {
    path: "/dashboard/loan",
    component: _4e6178b7,
    name: "dashboard-loan"
  }, {
    path: "/dashboard/profile",
    component: _4176c7c4,
    name: "dashboard-profile"
  }, {
    path: "/dashboard/support",
    component: _3afb9dde,
    name: "dashboard-support"
  }, {
    path: "/dashboard/trades",
    component: _9bb48510,
    name: "dashboard-trades"
  }, {
    path: "/dashboard/transactions",
    component: _93af339c,
    name: "dashboard-transactions"
  }, {
    path: "/dashboard/transfer",
    component: _184ec45c,
    name: "dashboard-transfer"
  }, {
    path: "/dashboard/withdraw",
    component: _0a5397dd,
    name: "dashboard-withdraw"
  }, {
    path: "/password/new",
    component: _7d4bbc14,
    name: "password-new"
  }, {
    path: "/password/reset",
    component: _0e7f4032,
    name: "password-reset"
  }, {
    path: "/trade/crypto",
    component: _56a61a4c,
    name: "trade-crypto"
  }, {
    path: "/trade/forex",
    component: _03004601,
    name: "trade-forex"
  }, {
    path: "/trade/options",
    component: _65882dba,
    name: "trade-options"
  }, {
    path: "/trade/stock",
    component: _21e7964a,
    name: "trade-stock"
  }, {
    path: "/dashboard/wallet/fund",
    component: _dab25c0e,
    name: "dashboard-wallet-fund"
  }, {
    path: "/dashboard/wallet/upin",
    component: _cf440a98,
    name: "dashboard-wallet-upin"
  }, {
    path: "/dashboard/wallet/withdraw",
    component: _3379bc84,
    name: "dashboard-wallet-withdraw"
  }, {
    path: "/",
    component: _30b38c0e,
    name: "index"
  }, {
    path: "/admin/users/:user",
    component: _57565e18,
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
