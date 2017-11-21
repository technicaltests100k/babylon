This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app), but I have ejected it as I wanted to use Enzyme therefore I had to do it in order to have full control in the configuration.

## Table of Contents

- [Run project](#run-project)
- [Launch Tests](#launch-tests)
- [Launch Tests with coverage](#launch-tests-with-coverage)
- [Label](#label)
- [Checkbox](#checkbox)

## Run Project

```
yarn start
```

or

```
npm start
```

## Launch Tests

```
yarn test
```

or

```
npm test
```

## Launch Tests with coverage

```
yarn test --coverage
```

or

```
npm test --coverage
```

## Label

The Label component is a simple presentational component which accepts a series of props. The only required prop is the content, which is the label's text.
The component accepts children as a prop, but you cannot pass text to it. The reason is simple, with a separate prop, you are able to check whether is has been provided or not and force it otherwise.
As a children you can pass any React element.

Normal use:

```
<Label content={'some beautiful text'} />
```

with children prop:

```
<Label content={'some beautiful text'}>
  <Checkbox >
</Label>
```

## Checkbox

The checkbox component doesn't use the native one, but it is a simple div styled to look like a checkbox.
Its behaviour is straight forward, the syntetic onClick event fires a function that updates the component's state. 
The components accepts some props, the most relevant one is the one that can set the state of the components in advance. This can be useful in some occasions. When provided, the component's state is set to true, otherwise it defaults to false.

Normal use:

```
<Checkbox />
```

With checked prop.

```
<Checkbox checked/>
```
