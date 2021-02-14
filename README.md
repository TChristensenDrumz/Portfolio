# Portfolio
This is my professional portfolio site built using ReactJS and React Bootstrap to create a responsive design for both mobile and desktop. This site features a navbar with hash links to navigate to different parts of the landing page, nav links to switch between the landing and contact pages, responsive layouts and images, and most importantly, the utilization of the Bootstrap grid system.

## Navbar
* Navbar is featured and consistent on all pages.
* Working links navigate user to respective pages/parts of the page.

## All Pages
All pages feature a responsive Bootstrap grid system which adjust row and column size depending on the device's size. While rows and columns will usually take up 2/3rds of the page, extra small devices will have the rows and columns span the entire width of the screen. All pages also feature a sticky footer for aestetic purposes. The footer includes contact info for those who wish to reach me.

### Landing
![Landing Page](assets/landingpage.gif)
The landing page is split into three React components to seperate the different sections of the page, the Skills, Projects, and About components. The skills section features a responsive profile picture, my current skills list, and my downloadable resume. The projects section features all my current noteworthy projects. Each project is a clickable card that presents a modal window with information on the project, as well as links to the deployed project and GitHub repo. Additionaly, the projects can be filtered by technologies used. The about section holds the bio and was built using sub rows with sub columns to neatly seperate specific artciles within the bio. 

#### Key Points
* React components seperate the page into three sections.
* **Skills:** Resposive profile photo with list of technical skills.
* **Skills:** Downloadable pdf of most recent resume.
* **Projects:** Projects presented as clickable cards with title and image. Cards are responsive and spacing is dependent on screen size.
* **Projects:** Modals that give project description with links to deployed project and GitHub repo.
* **Projects:** Filter projects by technologies used.
* **About:** Sub-rows and sub-columns to seperate important articles within the main bio.

### Contact
![Contact Page](assets/contactpage.gif)
The contact page features a contact form that will allow users to get in touch with me by submitting their name, email, and a message. The submited message will be sent to me in the form of an email using the name and email provided.

#### Key Points
* A form submission to get in contact with me.
* Link to my LinkedIn profile.
* Link to my GitHub profile.

## Credits
https://react-bootstrap.github.io/
<br>
https://fonts.google.com/
<br>
https://www.emailjs.com/

## Link
https://terrapinchristensen.herokuapp.com/
