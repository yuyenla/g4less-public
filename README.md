# g4less

**If this is the first time you're running the project,
please follow these steps:**

**Make sure you've installed meteor and git!**

1. Create a directory
  e.x. $ mkdir project

2. Remember to go into the directory!
  e.x. $ cd project

3. Clone the project
  e.x. git clone https://github.com/yuyenla/g4less.git

4. Change directory into the project file
  e.x. $ cd g4less
  
5. Run the project
  e.x. meteor 
  
Now, you should see a bunch of stuff happening on your terminal. You'll know it's ready when it says something like "project is running at
http://localhost:3000"

**If you've already done all of the above steps and you want to start messing with the project, please follow these steps:**
1. If the project is already running, and you're using linux, use the command "ctrl + shift+ t" to open new tab in the terminal.

2. go to that new tab

3. run the command: git checkout -b <branchname>
   note: if your branch name has more than one word, use dashes. e.x. git checkout -b yuyens-branch
4. now that you're in the new branch, have fun playing around

5. if you made any changes that you think are beneficial to the project, remember to submit a pull request!

**How to submit a pull request:**
1. run the command: git status

2. make sure you're on the branch you specified. DO NOT make any changes to the branch "master"

4. run the command: git add . 

5. run the command: git status (just to be sure you added them. if this fails, run: git add --all)

6. run the command: git commit -m "my message here"

7. run the command: git push origin <branchname> (please, DO NOT push to master!)

8. go onto github and click on this repository, and then click on "branches" you should be able to see the latest branch you commited.

9. click on the branch you submitted and then click "submit pull request" 

10. make sure your pull request is compatible with the base: "master"

11. if it's not compatible, please make sure it is so that it'll be easy to merge.

