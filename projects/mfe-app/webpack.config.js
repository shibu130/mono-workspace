const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  name: 'mfe-app',

  exposes: {
    './TodoList': './projects/mfe-app/src/app/todo-list/todo-list.module.ts',
    //C:\Users\SHIBU\Desktop\angular-practice\mono-repo-practice\mono-workspace\projects\host-app\src\app\todo-list\todo-list.component.ts
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

});
