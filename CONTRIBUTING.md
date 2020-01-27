# Contributing to ReactJS Dallas Site

Thanks for being awesome! We want contributing to the ReactJS Dallas website to be a great experience for anyone who wants to help. Contributions go far beyond pull requests and commits; we are thrilled to receive a variety of other contributions including the following:

- Submitting updates to documentation that helps others build and contribute
- Submitting spelling or grammar fixes
- Adding test coverage
- Reporting bugs or issues
- Teaching others how to contribute to our project!

## Code of Conduct

ReactJS Dallas is a safe place for anyone who wants to help build and develop any of our projects. We expect everyone participating in the ReactJS Dallas community to follow our [Code of Conduct](/CODE_OF_CONDUCT.md). Take a moment to read it. We have a long history of great experiences built on trust and learning all about React in a fun environment. Let's keep it going!

## Your first Pull Request
Working on your first Pull Request? You can learn how from this free video series:

How to Contribute to an Open Source Project on GitHub

If you decide to fix an issue, please be sure to check the comment thread in case somebody is already working on a fix. If nobody is working on it at the moment, please leave a comment stating that you have started to work on it so other people don’t accidentally duplicate your effort.

If somebody claims an issue but doesn’t follow up for more than a week, it’s fine to take it over but you should still leave a comment.

## Not sure how to start contributing?

You can reach out to [Mike Mathew (@drumsensei) on Twitter](https://twitter.com/drumsensei) or submit an issue so someone on the team can give guidance.

## The usual contributing steps are:

1. Fork the repository.
2. Clone the fork to your local machine and add upstream remote:

```
git clone --depth=1 https://github.com/<your-username>/reactjs-dallas-site.git
cd reactjs-dallas-site
git remote add upstream https://github.com/reactjs-dallas/reactjs-dallas-site.git
```

3. Synchronize your local master branch with the upstream one:

```
git checkout master
git pull upstream master
```

4. Create a new firebase project
  - In the overview screen click '</>' to find API key and other variables

5. Create a `.env` file in the root directory with variables that match the [`example.env`](https://github.com/reactjs-dallas/reactjs-dallas-site/blob/master/example.env)
  - Add your own values from the new firebase project from step 4


5. Install dependencies:

```
yarn install
```

6. Create a topic branch:

```
git checkout -b my-topic-branch
```

7. Run the project in dev mode:

```
gatsby develop
```

8. Make changes, commit, and push to your fork:

```
git push -u
```

The core team is monitoring for Pull Requests. We will review your Pull Request and either merge it, request changes to it, or close it with an explanation.
