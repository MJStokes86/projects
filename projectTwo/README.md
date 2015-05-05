# Project Two

**Build a client based CRUD application that will use a given API.**

## Objectives

1. Build confidence as a developer by building something of your own.
-  Manage yourself (your time and your emotions) when given a large amount of unstructured work.
-  Gain experience building a complex client-side application that consumes an API.
-  Document your work and share it with the public in an effective and articulate manner.
-  Learn new technologies by reading documentation and experimenting.

## Dates

* *Start* - Evening of Thursday, April 30.
* *End* - 9:00AM on Tuesday, May 5.

On the morning of the 5th, we will each present a 5 minute lightning talk to our classmates the progress we have made.

## Process

Just like we've been practicing in class, we do not want to jump immediately into coding. We want to carefully plan our apporach.

1. Create a Trello board with `Backlog`, `Doing`, and `Done` lists.
- Collect user stories from the spec of your choice and enter them into the `Backlog` list.
- ERD - Create an ERD for the existing database
- Wireframes - Detail the flow of app through simple wireframes
  * Attach these to Trello cards
  * You can choose whether you want to whiteboard the wireframes or use some program.
- Routes - write or draw a table of the HTTP route architecture of the API/server
- Iterative Development
  * Move one story at a time into the `Doing` list. Once it's done, move it to `Done` and start your next story.
  * **DO NOT** try to work on more than one or two stories at once.

  ## Spec 

As always, please create a simple feature spec for this app.

Format is as follows:

> 1. A user can....

> A WIREFRAME - ie, what will this feature 'look' like as a rendered HTML page.

## Deliverables

* Public repo on Github with your project code
* `README.md` (in the root folder of your project) that includes:
  * The project's name and description,
  * Your feature spec with links to pictures of your wireframes and the database ERD
  * APIs or libraries used and descriptions of each
  * Instructions for downloading the code and running it on localhost
  * Link to the live url of your hosted project
* A deployed application on a Digital Ocean droplet
* A 5-minute lightning talk to discuss the below 3 topics
  * What did you do?
  * What was the biggest thing you learned?
  * What was the hardest part of the project?

## Instructors

As this project is mostly self-driven we expect you to spend a lot of time debugging errors and problem solving on your own. That said, we want to be there to support you. Because this project is condensed, we don't quite have the time to schedule 1:1's with everyone.

In lieu of 1:1 time, we will be having consulting time from 10-12:30 and 1:30 to 3:30 on Monday. The key here is that we are mindful of each other's time by only seeking instructor help after trying to solve the issue yourself.

## Keep in Mind

**You are going to encounter a ton of unexpected errors and problems.**

Expect to come up against a lot of what can *seem* like roadblocks. Resist the urge to get frustrated. These are amazing learning opportunities. A lot of students treat errors during projects as just getting in the way of "finishing". The point of this project is **not** to finish all of the user stories; the point is to integrate your knowledge and deepen your understanding of how to put apps together.

Errors often provide the most valuable source of information about what we don't yet understand. Seeing an error as "it's not working" and randomly changing stuff until "it works" won't teach you anything. Spending time thoughtfully debugging issues is a fantastic investment that will lead to greater mastery and understanding.

**Pro-Tip** - 'Failure is a temporary state.'


## Feature Set

### [Contact List][contact]

A contact list is an application that allows users to store and organize their contacts.

### [Restaurant Manager][digital_menu]

A restaurant manager application used by restaurants to keep track of their current menu and also to collect information about what is ordered.

<!-- Links -->

[contact]: ./contact_list
[digital_menu]: ./restaurant_group

### Note about RESTful routes

**Route Architecture**

It's crucial to remember that `json-server` uses fully RESTful routes. Even though you cannot physically see the server code, you know exactly what all of the routes are.

*NOTE* - The `json-server` module does not use nested resoruces.

**Put VS Patch**

In true rest convention there are actually 2 different HTTP verbs to do an edit - Put and Patch.

`PUT` is used when every field (except for the ID) of your database is being updated.

`PATCH` is used when updating less then every field.
