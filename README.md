# Fractionless Boilerplate

> A front-end boilerplate and CSS starting point you build up instead of tear down.

Most HTML boilerplates and CSS frameworks give you way too much to start off with. You end up spending a lot of time tearing them apart before you can become productive and start building your project up and out. Fractionless aims to solve that problem by giving you a good, blank, starting point you can build up and out from.

## Quick Start

Getting started is easy. Just download or clone the repository, unzip, and start building:

1. [Download the project](https://github.com/billpatrianakos/Fractionless-Boilerplate/archive/master.zip) or clone into a new folder with `git clone https://github.com/billpatrianakos/Fractionless-Boilerplate.git my_site && cd $_`
2. You'll need Grunt and Bower to use the included build tasks and resources. Install with `npm install -g bower grunt-cli`
3. To use the build tasks install the required packages from npm with `npm install && bower install`
4. Start up a local server by running `grunt develop` (or just `grunt` for those who like brevity)


## Using the Fractionless Grid

The Fractionless grid is a 12 column, 1140px responsive grid. The system is composed of containers, rows, and columns. It comes in both float based and flexbox flavors both of which use the same classes.

__Containers__ (`.container`) are full-width block elements. They are containers for multiple rows. Containers are great for full width background colors or images

__Rows__ (`.row`) are, well... rows. They hold one or more columns and keep them centered within a container

__Columns__ (`.col-*`) are numbered 1 through 12. There are classes for pushing and pulling columns if you have a need to make the order of columns display differently than the order they're coded in.

### Example Grid

The following markup will create a simple blog-style layout with a main content column and a sidebar. As long as the number of column elements in your rows adds up to 12 or less, you'll get a nicely laid out page every time.

```html
<div class="container">
  <div class="row">
    <div class="col-8">
      <h1>This is my main content</h1>
      <p>This is some text on my page, whatever.</p>
    </div>

    <div class="col-4">
      <h2>This is a sidebar</h2>
      <p>And some content here...</p>
    </div>
  </div>
</div>
```

## Starting a new project

### For static sites

Fractionless works great out of the box for static websites. Simply clone the project, install the dependencies, and you're good to go!

1. Clone the repository with `git clone https://github.com/billpatrianakos/Fractionless-Boilerplate.git my_project` (be sure to replace `my_project` with the name of the project you're building)
2. Enter the directory and install the dependencies: `cd my_project && npm install -g bower grunt-cli && npm install && bower install`
3. Run `grunt develop` to start a local server at `http://localhost:9000`

From here you can begin developing using the files found in the `src` folder of the project. The default Grunt task will start a local server and watch your LESS and JS files for changes, transpile LESS to CSS, and run JSHint on your JavaScripts.

### Integrating into an existing project

You don't have to use the included project structure or Grunt tasks if you don't want to. If you already have a project using a different setup or want to integrate Fractionless into a web application, just rip the appropriate files or folder out from where they are and move them wherever you'd like.

## Development

All of the source files will be in the `src` folder. Once you have a local server up and running all you need to do is start editing your HTML, CSS/LESS, and JavaScript files. The default Grunt task will watch these files and rebuild your project as you develop. It's up to you to decide on build tasks and other customizations. Fractionless comes with enough set up out of the box to let you start developing quickly but not so much that you're forced into just one way of doing things.

## LESS

The structure of the `less` folder is important. If you need to change the location of your LESS files just be sure that all of the files relative to `style.less` stay relative to it.

`style.less` imports styles from different modules. This makes it easy to include or exclude whatever you want from the project. Want to use the classic grid instead of Flex Box? It's as simple as commenting out a line of code and uncommenting another. Styles are broken down into modules for:

- colors - Site-wide color scheme variables
- flex-grid - Grid system using Flexbox
- grid - The classic, float-based grid
- mixins - A collection of useful LESS mixins
- mobile - Mobile styles and media queries
- type - Typographic styles 

### Customizing your project

Fractionless comes with some settings and defaults that aren't for everyone. There are a few places you can go to change the settings for your project.

__`.editorconfig`__ - Fractionless ships with an [Editorconfig](http://editorconfig.org) file. If your text editor supports it you can adjust the settings for indentation and other file-level settings in the `.editorconfig` file.

__`package.json`__ - You should update the name of your project and any other details specific to your site here. You don't have to and leaving this file as-is won't cause any trouble. It's just that people viewing the `package.json` file will end up seeing the Fractionless project's information instead of your own.

__`Gruntfile.js`__ - If you're not familiar with Grunt, [check here to get started](http://gruntjs.com/getting-started). The `project` object has a few default settings like the source and destination folders. You can change these to update the Grunt configuration project-wide and add more custom settings of your own any time.
