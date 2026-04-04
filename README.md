# MonoWorkspace

Micro frontend using monorepo approach

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.20.

## creation

1.  ng new mono-workspace --create-application=false

2.  cd .\mono-workspace\ 

3.  ng g application host-app --routing  --style=css

4.  ng g application mfe-app --routing --style=css

5. ng s host-app -o

6. npm i  webpack webpack-cli --save-dev (ignore)

7. ng add @angular-architects/module-federation@19 --project host-app  --port 4200 , npm install ngx-build-plus@19 --save-dev

8. ng add @angular-architects/module-federation@19 --project mfe-app  --port 4200

npm uninstall webpack webpack-cli (no need if 6 was ignored)

Remove-Item node_modules -Recurse -Force (no need if 6 was ignored)
Remove-Item package-lock.json -Force (no need if 6 was ignored)

in ts config choose module and target as es2020

getting import.meta error and god knows why ?

## Development server

To start a local development server, run:

```bash
ng s host-app -o

ng s mfe-app -o
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
