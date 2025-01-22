# We're building yet another recipe
The Internet doesn't have enough recipe websites so we've built yet another one. Let's use the following codebase as our starter for your coding interview.

You can use any resources available online, yes, even ChatGPT but the only rule is you share your screen the whole time so we can pair together.

## How to get this started?
Install dependencies
```
npm install
```

## Getting Started

First, run the development server:

```
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result. You should see a recipe gallery.

Let's make sure the tests are running as well and you get 3 successful tests.
```
npm test
```

We're now going to work together on implementing various improvements to this codebase. You can use any references online but here are short cuts to things this recipe site is using:
- [TailwindCSS](https://tailwindcss.com/)
- [NextJS](https://nextjs.org/docs)


# Task 1 - Search Recipes
The original developer used [DummyJSON API](https://dummyjson.com/docs/recipes) which our backend api `/api/recipes` proxies. They forgot to implement searching. Please go ahead and make the necessary changes on the UI and on the API to support search.

# Task 2 - Pagination
We currently only return 4 recipes, we'd like to be able to pagination 4 recipes at a time. Please implement all necessary changes to the UI and to the API to support paginating back and forth 4 recipes at a time.

# Task 3 - UI Refactoring
The landing page `page.tsx` as you can see is just one component and it's likely getting messy. How can we improve this? We'd like to start building our own component library of re-usable pieces. Discuss what you would do and then let's go ahead and make these changes. 

# Task 4 - In Memory Server Side Caching
We're incurring costs for each api call to this recipe api and we'd like to cache proxied calls we've already made before. Please go ahead and implement the required in memory caching. If we have time we can briefly discuss how you would improve this server-side cache and what else you would introduce to the stack.