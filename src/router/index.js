import Vue from "vue";
import Router from "vue-router";
import FrontPage from "@/pages";

import Events from "@/pages/events";
import Media from "@/pages/media";
import Publications from "@/pages/publications";
import About from "@/pages/about-us";
import Member from "@/pages/member";
import Jobs from "@/pages/jobs";
import Job from "@/pages/jobs/job";
import Faq from "@/pages/faq";
import Articles from "@/pages/articles";
import Article from "@/pages/articles/article";
import Reform from "@/pages/reform";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "front-page",
      component: FrontPage
    },
    {
      path: "/arrangementer",
      name: "events",
      component: Events
    },
    {
      path: "/forskning",
      name: "publications",
      component: Publications
    },
    {
      path: "/om-oss",
      name: "about-us",
      component: About
    },
    {
      path: "/media",
      name: "media",
      component: Media
    },
    {
      path: "/medlem",
      name: "member",
      component: Member
    },
    {
      path: "/ledige-stillinger",
      name: "jobs",
      component: Jobs
    },
    {
      path: "/ledige-stillinger/:slug",
      name: "job",
      component: Job
    },
    {
      path: "/faq",
      name: "faq",
      component: Faq
    },
    {
      path: "/rusreform",
      name: "reform",
      component: Reform
    },
    {
      path: "/artikler",
      name: "articles",
      component: Articles
    },
    {
      path: "/artikler/:slug",
      name: "article",
      component: Article
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  }
});
