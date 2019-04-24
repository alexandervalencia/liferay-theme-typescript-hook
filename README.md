# Liferay Theme TypeScript Hook

> A hook for liferay-theme-tasks that allows for TypeScript compilation.

## Install

Hook modules must be added as a dependency of a Liferay theme.

```
npm i --save liferay-theme-typescript-hook
```

After npm is done installing the dependency you must add the hook to the `liferayTheme.hookModules` property in your theme's `package.json` file.

```json
{
  "name": "my-liferay-theme",
  "version": "1.0.0",
  "main": "package.json",
  "keywords": [
    "liferay-theme"
  ],
  "liferayTheme": {
    "baseTheme": "styled",
    "hookModules": ["liferay-theme-typescript-hook"],
    "rubySass": false,
    "templateLanguage": "ftl",
    "version": "7.0"
  },
  "devDependencies": {
    "gulp": "3.9.1",
    "liferay-theme-tasks": "*",
    "liferay-theme-deps-7.0": "*"
  },
  "dependencies": {
    "liferay-theme-es2015-hook": "^8.0.0-alpha.4"
  }
}
```

Next we'll need to create a `tsconfig.json` in the root directory of our theme. The `tsconfig.json` file specifies the root files and the compiler options required to compile the project. At a bare minimum, you'll need to point to where the `.ts` files are located in your theme `src` folder.

```json
{
  "files": [
    "src/js/**/*.ts"
  ],
  "compilerOptions": {
    "noImplicitAny": true,
    "outFile": "main.js",
    "target": "es5"
  }
}
```

## Build

Now that our project is configured and the hook is installed, it will run with every `gulp build` and `gulp deploy`.

### Example

```typescript
// my-liferay-theme/src/js/main.ts

class Student {
  fullName: string;

  constructor(public firstName: string, public middleInitial: string, public lastName: string) {
    this.fullName = `${firstName} ${middleInitial} ${lastName}`;
  }
}

interface Person {
  firstName: string;
  lastName: string;
}

function greeter(person : Person) {
  return `Hello, ${person.firstName} ${person.lastName}`;
}

let user = new Student("Jane", "M.", "User");

console.log(greeter(user)); // Hello, Jane User
```

After building, `main.ts` will be compiled to regular JavaScript as `main.js`. Your code is now ready for use as JavaScript!

```javascript
// my-liferay-theme/src/js/main.js

var Student = /** @class */ (function () {
  function Student(firstName, middleInitial, lastName) {
    this.firstName = firstName;
    this.middleInitial = middleInitial;
    this.lastName = lastName;
    this.fullName = firstName + " " + middleInitial + " " + lastName;
  }

  return Student;
}());

function greeter(person) {
  return "Hello, " + person.firstName + " " + person.lastName;
}

var user = new Student("Jane", "M.", "User");

console.log(greeter(user)); // Hello, Jane User
```
