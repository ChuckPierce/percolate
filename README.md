# Percolate Client Demo
> This is a single page application to demostrate my ability in Frontend Development.  The task was to create a small node app with a mobile-friendly AngularJS-built layout that would email a potential customer after they filled out a demo form. 

See a live version of the app [here](http://oldspicepercolate.herokuapp.com).

## Frontend

###Modular

I focused on making things modular, using directives for each section of the application which could easily be customized to fit any page that another fellow frontend engineer would be making with different assets.  There are six directives that I believe accomplished this goal:

1. Banner - this directive ```<banner>``` displays the banner with the customized message through the "message" attribute as well as a customized image through the "image" attribute.
	
2. Hightlight - this directive ```<highlight>``` just formats the highlight text for the summary of the case study. Mostly used for templating.
	
3. Quote - this directive ```<quote>``` has two separate "qtypes", the "quote-hightlighted" type and the "quote-normal" type.  Each type will display differently on the page but is used in the same directive.  This type logic could also be used to create other types of directives.
	
4. Casestudy  - this directive ```<casestudy>``` displays the small case study blocks near the bottom of the page.  For each directive you can put a paragraph tag and an image tag inside as well as a "title" attribute.  The person coding the layout can organize them in any way they see fit.

5. Action - this directive ```<action>``` is similar to the case study but uses links.  This can also be customized with a "title", "image", and "icon" attribute.

6. Form - this directive ```<demoform>``` is what is used to send an email to a customer who is requesting a demo of the product.  The styling of the form is all contained within the directive and will display the same on every page it is used on.

#Bootstrap

I used Twitter Bootstrap for some of the mobile styling but realized that I had to do a lot of customization to achieve what I wanted.  It took some time to cutomize but it worked out in the end.  In hindsight I would have probably just created the styles from scratch.

##Backend

###Server

I used Node/Express for my server-side code.  I used one simple express route to talk between the frontend and the backend of the application.

###Email

To achieve sending an email I used a combination of ```nodemailer``` and Mailgun.  I initially used Mandrill but their server seemed to lag sometimes when sending emails.  When I switched to nodemailer I stopped having that problem

##Future

If I had more time I would probably continue to tweak the layout a little more and also try to continue to make things more modular.  Otherwise I am happy with my work on this project.  Please [email me](chuckmpierce@gmail.com) if you have any questions!