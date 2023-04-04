![imagen](https://user-images.githubusercontent.com/91413466/229430927-5a1a4033-af27-4f66-8c15-c5ed8fc114c9.png)

# JugadoreFifa23

# Description 

This spa displays 4 pages. The first shows four players with information on hover. Then you click on them and enter the detailed view where you can see the details. On this page, there is a button that takes you to personalized videos, and here there is a button that takes you to the history of the teams they have been on.
The project is in multiple languages.

# Main features

I have created my own library for a project, a footer that I have uploaded to npm. The usage instructions are in the npm readme.

Here you can see the library on npm and git

` https://www.npmjs.com/package/mydani-footer?activeTab=readme`

 `https://github.com/danideveloperweb/MYDANIFOOTER`

The project structure has been designed to be scalable, although not all aspects are covered in this project. It consists of three main folders: core for global information, feature for project-specific content, and share for external folders such as images, languages, etc.

In the project, some SOLID principles are used, as demonstrated in the following example.

Single Responsibility Principle (SRP):

In Angular, components and services can be created separately, each with a single responsibility. In this project, a component is responsible for presentation and user interaction, while the services we see below handle business logic and communication with APIs or, in this case, helpers with information.

There are two services in the project, one located in the core, which is the navigation service for the back button.

The other service is located in the feature, which manages the data received from the helpers with arrays and interfaces. Two methods are created here to pass information to the components, one for the array and another to filter by id, from which the detail view is obtained.

Directives are also used in the HTML components to iterate through the array with *ngFor and conditionals such as *ngIf, to choose one action or another.

Interface Segregation Principle (ISP):

In Angular, it is common to create small, specific interfaces that represent required dependencies and behaviors. In this case, we have several interfaces in the models that comply with this principle.

Dependency Inversion Principle (DIP):

Angular uses dependency injection to ensure dependency inversion between modules and components. An example is the injection of services in app.modules -> providers.

The Factory Method pattern has also been used to introduce multilingual functionality. In this case, object creation is passed through a class, which in this case is HTTP. Behind the scenes, it has a static creation method that creates a translation loader and an HTTP client. Two JSON files were used for translating labels.

Multilingualism is visually represented with a button in the navbar to change the language. Also, if you go to Chrome -> settings -> languages and choose the default language, it will set it for you. Remember to go to inspect -> application -> storage -> local storage and clear it, so the new settings are saved.

Breadcrumb: used to go back and can be seen below the navbar.

Back button: also for going back, but designed to be user-friendly for older people who are not used to technology.

Design:

Mixins have been used, which is a technique that allows for code reuse where a class incorporates methods and properties from another class without inheriting from it.

An example of this is in the styles.scss file, where a button has been generated that is used in several places and also for passing styles.

Bootstrap has been used to make the application responsive for all types of devices and aesthetically pleasing. It has also been combined with a grid, which has been used in the main box to keep all elements in place with minimal code.

Animations: In the reusable card component, an animation has been created that moves the cards to the center when you hover over them, and they expand, displaying their data.

The Roboto font has been chosen because it facilitates reading on the web and is visually attractive.

The selected colors are based on the fact that the cards have a gold background, and to avoid too many changes that distract the user's focus, the background is an off-white, and the navbar and footer are a soft beige pastel, which is not tiring to the eye, maximizing the time the user spends looking at the website.

Best practices have been used with EsLint and formatPrettier.

## Access to the project

Clone this repository

`git clone https://github.com/danideveloperweb/Pokemon2.git`

Install dependencies

`npm install`

Run the app

`ng serve -o`

Navigate to

`http://localhost:4200/`

## Access to the web Url

`https://jugadores-fifa23-9dz62c7pn-danideveloperweb.vercel.app/home`

## Technologies used

This project was generated with Angular CLI version 15.2.4.

TypeScript 62.2%

HTML 20.4%

SCSS 17.4%, Mxins, Bootstrap.

## License

©Danideveloperweb
