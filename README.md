# React Router Dom v6 Nested Routes with Wildcard Path Issue

This repository demonstrates a bug in React Router Dom v6 when using nested routes with a wildcard path (`/*`).  The nested routes within the wildcard path do not render correctly.

## Bug Description

The issue occurs when a route with a wildcard path (`/*`) is used as a parent route and has nested routes defined.  The nested routes fail to render.

## Reproduction Steps

1. Clone this repository.
2. Install dependencies: `npm install`
3. Run the application: `npm start`
4. Navigate to `/users`. Note that the `Users` component renders correctly.
5. Try to navigate to `/users/123` or another nested route under `/users`. You will observe that the nested route does not render.  Instead, only the `Users` component is displayed.

## Solution

The solution involves refactoring the route structure to avoid using the wildcard path (`/*`) as a parent route.