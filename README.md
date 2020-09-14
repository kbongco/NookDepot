

- [Overview](#overview)
- [MVP](#mvp)
  - [Goals](#goals)
  - [Libraries and Dependencies](#libraries-and-dependencies)
  - [Client (Front End)](#client-front-end)
    - [Wireframes](#wireframes)
    - [Component Tree](#component-tree)
    - [Component Hierarchy](#component-hierarchy)
    - [Component Breakdown](#component-breakdown)
    - [Time Estimates](#time-estimates)
  - [Server (Back End)](#server-back-end)
    - [ERD Model](#erd-model)
- [Post-MVP](#post-mvp)
- [Code Showcase](#code-showcase)
- [Code Issues & Resolutions](#code-issues--resolutions)

<br>

## Overview

_**NookDepot**<br>
Barebones, its an Etsy clone, but getting past that...

With the COVID-19 Pandemic and Quarantine, a lot of people have turned to video games to pass their time in Quarantine. When the pandemic began, 
Animal Crossing New Horizons was released much to the excitement of the fandom. Being stuck at home all day and being able to own a house on a deserted
island and able to just fish, catch bugs to pay off their home sounds like the dream. 
With this release of Animal Crossing, there was an addition of Hemispheres which meant depending on which Hemisphere you are on the animals and materials varied. Take for example right now its Fall here, but if your island is in the Southern Hemisphere, it's Spring there which means variety. Thanks to this, various websites have popped up to help avid-fans get their wish-list furniture and other materials. Unlike other sites, NookDepot focuses more on the DIY Materials, Plants, and Tools. Users will be able to setup a "shop" of materials they want and trade with other Users of the platform. 

**Credits where credit is Due**
I used the following sites for the dataset/json file and cleaned up the data I used for this project:
https://github.com/Norviah/animal-crossing
https://docs.google.com/spreadsheets/d/1i1nFE0GUCHQS0eWjPuUmYbdtEbeF0Pb-/edit#gid=163065426




<br>

## MVP

> The Minimum Viable Product should be a well-planned, easily-communicated product, ensuring that the client's deliverable will be achievable and meet specifications within the time frame estimated.

_The **NookDepot** MVP
-have User Authentication 
-have a page showing materials, tools, gardening, and services
-have a details page where you can press a button to add to a section in the shop 
-have a details page about services 
-have a directory showing each User's Shop
-Have an editable profile page and delete info as well. 
-have a search bar up and running 

<br>

### Goals
-To create a functional ecommerce clone using React and Rails! 

<br>

### Libraries and Dependencies

> Use this section to list all supporting libraries and dependencies, and their role in the project. Below is an example - this needs to be replaced!

|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|      React       | _Lorem ipsum dolor sit amet, consectetur._ |
|   React Router   | _Lorem ipsum dolor sit amet, consectetur._ |
| Axios            | _Lorem ipsum dolor sit amet, consectetur._ |
|  Express Router  | _Lorem ipsum dolor sit amet, consectetur._ |
|  Express Router  | _Lorem ipsum dolor sit amet, consectetur._ |


<br>

### Client (Front End)

#### Wireframes

https://www.figma.com/file/yndvqMNVycFNhx3JLVGJik/NookDepot?node-id=0%3A1
(Click through Pages to see the various wireframes for each section of the site come up)




#### Component Tree

> Use this section to display the structure of how your React components are being rendered. This should show the parent to child relation between you components. In other words, show which components are rendering the other components. 
https://whimsical.com/BfKDAfL62NMd3n59sWsmkB
(Structure for React?)

#### Component Hierarchy

> Use this section to define your React components and the data architecture of your app. This should be a reflection of how you expect your directory/file tree to look like. 

``` structure

src
|__ assets/
      |__ fonts
      |__ graphics
      |__ images
      |__ mockups
|__ components/
      |__ Header.jsx
|__ services/

```

#### Component Breakdown

> Use this section to go into further depth regarding your components, including breaking down the components as stateless or stateful, and considering the passing of data between those components.

|  Component   |    Type    | state | props | Description                                                      |
| :----------: | :--------: | :---: | :---: | :--------------------------------------------------------------- |
|    Header    | functional |   n   |   n   | _Header Contains Links and Logo of App            |
|  Navigation  | functional |   n   |   n   | _Navigation has links to each page       |
|   Footer     | functional |   n  |   n   | _The footer will contain credits to each github/data site as well as disclaimer     |
|   Search    | functional |   y  |   y   | A Search bar to find items     |
|  Listings    | functional |   n   |   y  | This will show Listings information via props in the form of a table               |
|   Services   | functional |   n   |   y   | This will show list of services offered via props, and styled via flexbox|
|   Tools  | functional |   n   |   y   | This will show list of tools offered via props|
|    Materials  | functional |   n   |   y   | This will show list of materials offered via props|
|    Plants   | functional |   n   |   y   | This will show list of plants offered via props|
|   ServiceDetail  | functional |   n   |   y   | This will show details of services offered via props|
|   ToolsDetail  | functional |   n   |   y   | This will show details of tools offered via props|
|   MaterialsDetail  | functional |   n   |   y   | This will show details of materials offered via props|
|   PlantsDetail  | functional |   n   |   y   | This will show details of plants offered via props|
|   User   | functional |   n   |   y   | This Component will show User Information via props|


#### Time Estimates

> Use this section to estimate the time necessary to build out each of the components you've described above.

| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Add Contact Form    |    L     |     3 hrs      |     2 hrs     |    3 hrs    |
| Create CRUD Actions |    H     |     3 hrs      |     1 hrs     |     TBD     |
| TOTAL               |          |     6 hrs      |     3 hrs     |     TBD     |

> _Why is this necessary? Time frames are key to the development cycle. You have limited time to code your app, and your estimates can then be used to evaluate possibilities of your MVP and post-MVP based on time needed. It's best you assume an additional hour for each component, as well as a few hours added to the total time, to play it safe._

<br>

### Server (Back End)

#### ERD Model

> Use this section to display an image of a computer generated ERD model. You can use draw.io, Lucidchart or another ERD tool.

<br>

***

## Post-MVP

> Use this section to document ideas you've had that would be fun (or necessary) for your Post-MVP. This will be helpful when you return to your project after graduation!

***

## Code Showcase

> Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

## Code Issues & Resolutions

> Use this section to list of all major issues encountered and their resolution.