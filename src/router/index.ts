import { createRouter, createWebHistory, type RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
	{
		path: "/",
		component: () => import("../layouts/default.vue"),
		children: [
			{
				path: "/",
				component: () => import("../views/index.vue"),
			},
			{
				path: "/table-1",
				component: () => import("../views/table-price/table-1.vue"),
			},
			{
				path: "/table-3",
				component: () => import("../views/table-price/table-3.vue"),
			},
			{
				path: "/table-2",
				component: () => import("../views/table-price/table-2.vue"),
			},
		],
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
