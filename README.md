

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

**NookDepot**<br>
Barebones, its an Etsy clone, but getting past that...

With the COVID-19 Pandemic and Quarantine, a lot of people have turned to video games to pass their time in Quarantine. When the pandemic began, 
Animal Crossing New Horizons was released much to the excitement of the fandom. Being stuck at home all day to play video games where you can make friends on your island, invite your IRL friends, and making money doing things like fishing, bug catching, so you can have the unattaianble milennial dream of owning a house was a lot of fun and makes the game have such a high replay value.<br> 
With this release of Animal Crossing, there was an addition of Hemispheres which meant depending on which Hemisphere you are on the animals and materials varied. Take for example right now its Fall here, but if your island is in the Southern Hemisphere, it's Spring there which means variety of critters, fish, and materials. Thanks to this, various websites have popped up to help avid-fans get their wish-list furniture and other materials. Unlike other sites, NookDepot focuses more on the DIY Materials, Plants, and Tools. Users will be able to setup a "shop" of materials they want and trade with other Users of the platform. 


**Credits where credit is Due**
I used the following sites for the dataset/json file and cleaned up the data I used for this project:<br>
https://github.com/Norviah/animal-crossing<br>
https://docs.google.com/spreadsheets/d/1i1nFE0GUCHQS0eWjPuUmYbdtEbeF0Pb-/edit#gid=163065426

Also thank you to my friends who provided me with some assets I can use as well! :) 




<br>

## MVP



-The **NookDepot** MVP<br>
-have User Authentication<br>
-have a User page that's a "shop" showing items owned and selling/looking for 
-have a page showing materials, tools, gardening, and services<br>
-have a details page where you can press a button to add to a section in the shop<br>
-have a details page about services, garden, tools, materials<br> 
-have a directory showing each User's Shop<br>
-Have an editable profile page and delete info as well. 
-have a search bar up and running<br> 

<br>

### Goals
CRUD will be achieved in the following places: 
-Creating a Listing in the Directory, being able to Edit/Delete as well<br>
-Creating Town Info and editing it in Profile page<br>
-Deleting Items from listing<br>

<br>

### Libraries and Dependencies



|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|      React       | Used for Front End |
|   React Router   | Used for Linking pages |
| Axios            | Used for API data  |


<br>

### Client (Front End)

#### Wireframes

https://www.figma.com/file/yndvqMNVycFNhx3JLVGJik/NookDepot?node-id=0%3A1
(Click through Pages to see the various wireframes for each section of the site come up)
*Actual screenshots for each of the screens can be found in the FigmaAssets Folder*




#### Component Tree

https://whimsical.com/BfKDAfL62NMd3n59sWsmkB
(Structure for React?)

#### Component Hierarchy

``` structure

src
|__ assets/
      |__ images
|__ components/
      |__ Header.jsx
      |__ Navigation.jsx
      |__ Footer.jsx
      |__ Search.jsx
      |__ EmailForm.jsx
      |__ DirectoryTable.jsx
      |__ Services.jsx (PMVP)
      |__ Tools.jsx (PMVP)
      |__ Materials.jsx 
      |__ Plants.jsx (PMVP)
      |__ ServiceDetail.jsx (PMVP)
      |__ ToolsDetail.jsx (PMVP)
      |__ MaterialsDetail.jsx
      |__ PlantsDetail.jsx (PMVP)
      |__ UserTownInfo.jsx
      |__ UserServicesInfo.jsx
      |__ ForSaleandWanted.jsx
|__ containers/
      |__ MainContainer/
|__ containers/
      |__ Layout.jsx/
|__ screens/
      |__ Home.jsx
      |__ Directory.jsx
      |__ ServicesResults.jsx (PMVP)
      |__ GardenResults.jsx (PMVP)
      |__ ToolsReults.jsx (PMVP)
      |__ MaterialsResults.jsx
      |__ UnderConstruction.jsx
      |__ WarningDelete.jsx
      |__ User.jsx



```

#### Component Breakdown


|  Component   |    Type    | state | props | Description                                                      |
| :----------: | :--------: | :---: | :---: | :--------------------------------------------------------------- |
|    Header    | functional |   n   |   n   | _Header Contains Links and Logo of App            |
|  Navigation  | functional |   n   |   n   | _Navigation has links to each page       |
|   Footer     | functional |   n  |   n   | _The footer will contain credits to each github/data site as well as disclaimer     |
|   Search    | functional |   y  |   y   | A Search bar to find items     |
|   EmailForm   | functional |   y  |   n  | A little form to stay up to date on the site located on the home page    |
|  Directory   | functional |   n   |   y  | This will show Directory information via props in the form of a table               |
|   Services   | functional |   n   |   y   | This will show list of services offered via props, and styled via flexbox|
|   Tools  | functional |   n   |   y   | This will show list of tools offered via props|
|    Materials  | functional |   n   |   y   | This will show list of materials offered via props|
|    Plants   | functional |   n   |   y   | This will show list of plants offered via props|
|   ServiceDetail  | functional |   n   |   y   | This will show details of services offered via props|
|   ToolsDetail  | functional |   n   |   y   | This will show details of tools offered via props|
|   MaterialsDetail  | functional |   n   |   y   | This will show details of materials offered via props|
|   PlantsDetail  | functional |   n   |   y   | This will show details of plants offered via props|
|   UserTownInfo   | functional |   n   |   y   | This Component will show User's InGame Town Information via props|
|   UserServices Info  | functional |   n   |   y   | This Component will show User's Services information via props|
|  ForSaleandWanted  | functional |   n   |   y   | This Component will show User's items added  for sale and wantedInformation via props|


#### Time Estimates

> Use this section to estimate the time necessary to build out each of the components you've described above.

| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Implement Backend    |    H     |    2     |    TBD    |    TBD   |
| Backend CRUD  |    H     |     2  |     TBD    |     TBD     |
| Setup Authentication |    H     |     3  |     TBD    |     TBD     |
| BackEnd Routes |    H     |     TBD   |     1.5   |     TBD     |
| FrontEnd Routes|    M     |     TBD   |     2   |     TBD     |
| FrontEnd: Work on Layout Screen|    H     |    3  |     TBD    |     TBD     |
| FrontEnd: Work on Layout Components|    H     |     2  |     TBD    |     TBD     |
| FrontEnd: Work on Email Form in Home Component|    L    |    1   |     TBD    |     TBD     |
| FrontEnd: Work on Directory Screen + Components |    H     |     2   |     TBD    |     TBD     |
| FrontEnd: Work Directory CRUD |    H     |     2.5  |    TBD  |     TBD     |
| FrontEnd: Work on Results Component |    L    |     2   |     TBD    |     TBD     |
| FrontEnd: Work on Results Details Component |    L    |     2.5   |     TBD    |     TBD     |
| FrontEnd: Work on UserPage Components|    L    |     4  |     TBD    |     TBD     |
| FrontEnd: Work on UserPage CRUD |    H     |     4  |     TBD    |     TBD     |
| Styling |    M    |     4  |     TBD    |     TBD     |
| Testing|    H     |     4   |     TBD    |     TBD     |
| Deployment |    H     |     2  |     TBD    |     TBD     |
| TOTAL               |          |     43.5 hrs      |     TBD    |     TBD     |



<br>

### Server (Back End)

#### ERD Model

ERD can be found in the ERDFile Folder. 

<br>

***

## Post-MVP


-add Garden, Tools and Services
-implement Discord OAuth (after course)
-on the details page, add in a link to a UserPage offering those items
-implement a chat feature 


***

## Code Showcase

> Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

## Code Issues & Resolutions

> Use this section to list of all major issues encountered and their resolution.