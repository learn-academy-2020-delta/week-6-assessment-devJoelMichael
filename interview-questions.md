# ASSESSMENT 6: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. In a model called Animal that has_many Sightings, what is the name of the foreign key? Would the foreign key be part of the Animal model or the Sightings model?

Your answer: animal_id would be the foreign key. It should be apart of the Sightings model.

Researched answer: I do not know what to research for this specific question.

2. Which RESTful routes must always be passed params? Why?

Your answer: I don't know if I fully understand this question. I believe That all the Restful routes must be passed params, but if its not all of them then for sure Edit, Show, Update, and Delete. Why: Because those four are always visible to the user and will require an ID which is what params is looking for if I am not mistaken.

Researched answer: I truly looked everywhere and no one was using the terms RESTful routes and passed params. I know that when we do the params its usually in something like:
@post = BlogPost.find(params[:id])

3. Name three rails generator commands. What is created by each?

Your answer: model, resource, controller.
Generate model creates the data base record. rails generate model Housing (table) lawn:(column) string(datatype)
Generate controller creates a new controller (which is like the go between your data or the "logical center" of the app.)
Generate resource creates both model and controller all in one.

Researched answer:
controller,
integration_test,
mailer,
migration,
model,
observer,
performance_test,
plugin,
resource,
scaffold,
session_migration

4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

method="GET" /users : users#index : This would grab the index of the user

method="GET" /users/1 : users#show : This would show the user and their information

method="GET" /users/new : users#new : This returns the html form ofr creating a new user

method="GET" /users/edit/1 : users#edit : This would edit an existing user (also like #new where it returns an html for but this time for editing a specific user)

method="POST" /users/ : users#create : This would create a new user

method="PUT" /users/1 : users#update : This updates a specific user

method="DELETE" /users/1 : users#destroy : This deletes/destroys a specific user

5. As a developer, you want to make an application that will help you manage your to do list. For the MVP, you want to create just the user's view. Create 10 user stories that will help you get your application started.

<!--

1. As a User, I want to see all the items on the list in order from importance. So that I can prioritize my time wisely.

2. As a User, I want to have a notification (wether sound or alert) when a task is completed. So that I have the feeling of reward when I complete a task.

3. As a User, I want to be able to set time limits on tasks or set multiple time limits on one task. So that I will not waste time on a single task or so that I can break apart my tasks into different time chunks through the day.

4. As a User, I want to customize my app to my personal liking. So that I feel comfortable starring at it every day.

5. As a User, I want to share my Task List to friends/family/Coworkers. So that I can stay accountable to the goals I am setting for myself.

6. As a User, I want to have a dark mode. So that I am not blinded by white light all the time.

7. As a User, I want to customize the size of the letters. So that I will not have trouble viewing the application.

8. As a User, I want to make sure it is accessible to my disability. So that I can practically use the application.

9. As a User, I want to see rewards or points for when I complete a task. So that I can have  a sense of accomplishment.

10. As a User, I want to know its not draining battery but also running in the background. So that I can not have my phone charged constantly.

STRETCH GOAL: As a User, I want to have an alert/warning when I jump onto a social media, game, or "time wasting" application to remind me of the tasks I still have to do. So that I will be reminded to not be distracted or lose my self in the time wasting vortex.

-->
