# React-Webpack-CLI

This is a simple generator that creates a working project directory with Node.js, React, & Webpack.
This generator allows the use of ECMA2015 Script, and utilizes the webpack dev server.
The following dependencies are included:

* babel-core
* babel-loader
* babel-preset-es2015
* babel-preset-react
* react
* react-dom
* webpack
* webpack-dev-server

##Directions
To install the generator, run: `npm install -g react-webpack-cli`.

To generate a project directory using the installed generator, run: `react <project name>`.
If you do not include a project name, it will not generate a project.

Once in the new project directory, install the dependencies using either npm or yarn: `npm install`, or `yarn install`.
If you do not have yarn installed, please run `npm install -g yarn`. Using yarn is recommended.

After dependencies are installed, start your webpack-dev-server, using the `npm start` script, included in the package.json.


###Improvements
Feel free to add to this list if you see other features that would be helpful. Some improvements I'd like to make:

* adding additional flags for --help, and for additional components, including component name parameters.

Thanks for installing! Find this project on github: [React-Webpack-CLI Github](https://github.com/fiveinfinity/react-webpack-cli)
