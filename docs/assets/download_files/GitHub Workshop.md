(Demo on scripts by Prerana Kottapalli 06/2025)

Most of you are familiar with GitHub, so let's refamiliarize ourselves with the GitHub workflow, and use it to see how valuable git is.
## Commits
First we start with how we normally work: writing and committing our code to our computer.

Make as many changes until you have a version you want to remember. This version is usually free of bugs, and makes progress towards the final draft.

When you commit, you're telling the git program on your computer to save this version of the code to *its* internal memory. When it saves, it records the version number using a hash that looks like this: (red circle)
Because this is the local version of your repository, this is the version you make before anyone else sees it. The advantages of committing often:
1. If you make a mistake, you can **revert** back to some older commit
2. You can track your progress, and see older versions of your code in case you want to use smth
3. If you make a mistake, it is easy to revert to an earlier version of your code! (we will do that in an exercise)
### commit message etiquette
- Be brief, be detailed, don't lump changes together.

## Push
- Once you have a version of your code that you are happy with, have ensured there are no mistakes or bugs on, and want to possibly make available to others, it's time to push your code.
- Once you push, it is a little harder to revert to earlier versions of your code (but not impossible)
- The push contains all the commits you made locally, so you can treat it like a mini version update to your "official" code.

## Fetch + Pull
- Every time except for when the code is first being created, your first step should not be to write your code, but rather to fetch and pull. This ensures that you are working on the latest version of the code.
- Fetch gets the latest version of the code hosted on GitHub, but **doesn't** update your local repository. You can examine the new changes on your local computer
- Pull actually updates your local code. This is applied to every branch you have on your computer.
## Collaborative:
### Branches
A branch starts as a copy of code that can be edited independently of the original.
- Branches are used to make extensive changes on a collaborative repository to introduce a new feature after testing.
- Once you make a branch you can work ono it like you normally would.
- When you're done you can make a pull request to introduce your changes into the main branch.
	- Bear in mind the commit message etiquette when writing the description for a pull request. Include the overview of changes and details about the pushes to the branch.

### Merge conflicts

The <<< indicates the parts of the original file that are in conflict

The >>> indicates the changes you made that are in conflict with the original file

The == separates the two

To fix this, you will have to manually edit the file so that your changes are included and work. Remove the <<<, == , and >>> lines after you are done. Then commit your changes.

# Command line git
The same workflow, just using commands in terminal.
## ssh profile
Secure shell protocol is used to log into github from the command line. They no longer use email logins. So, if you haven't set this up yet we will do this now.
**Note:** separate into mac vs windows users
[Generating a new SSH key and adding it to the ssh-agent - GitHub Docs](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)
```
ssh-keygen -t ed25519 -C "your_email@example.com"

> Enter a file in which to save the key (/home/YOU/.ssh/id_ALGORITHM):[Press enter]

YES PASSWORD
> Enter passphrase (empty for no passphrase): [Type a passphrase]
> Enter same passphrase again: [Type passphrase again]

eval "$(ssh-agent -s)"

ssh-add ~/.ssh/id_ed25519

```

## Exercises (collaborative)
1. Create a folder on your local machine and use GitHub desktop to make it a GitHub repository
2. committing multiple times, what to commit
	1. commit messages
2. Reverting a commit
3. Pushing to a repository

## Basic Basics
* `git clone https://github.com/ucsbdeepspace/tripp` make a local copy of the pipeline
* `git pull` (from inside pipeline dir): sync local copy with remote copy
* `git add </path/to/file>` add changes in file to current commit-tracked changes
* `git commit` commit all tracked changes as one "unit" of work
* `git push` sync local commits with remote host
## Branching
* `git branch` list all branches
* `git checkout -b <new name>` make and switch local to a new branch
* `git merge <branch>` merge <`branch`> into current branch
* `git checkout <branch>` switch local directory to <`branch`>
* `git push --set-upstream origin <branch>` Creates your local branch in the remote repository
* `git checkout --track <branch_name>` Switches to remote branch not on local machine
## Other useful stuff
* `git log` print list of commits with hashes
* `git checkout <hash>` go back in time and switch to a particular hash
* `git status` Check which files have been changed on this branch since the last commit
* `git diff <filename>` look at the changes you've made since the last commit
* `git stash`/`git stash save` put your uncommitted/unstaged changes away in a git provided stash so that you can switch to working on something else
* `git stash apply` to apply the changes you stashed. Works in any local branch, no matter where you saved the changes.
## Undoing changes
* `git checkout -- <filename>` to delete ALL of the changes on your branch since the last commit.
* `git checkout <hash>` to look back to a previous commit version
* `git revert` *inverts* commits instead of going to a previous commit hash
* `git reset <hash>` actually changes your files to look like the version from the commit
* `git rebase` move your changes to a different (later) point on the commit timeline
You can make pull requests for branches on the github app.
## Manually resolving conflict
Sometimes, when merging, pulling, pushing, or doing any version control, GitHub will not like you committing after applying changes. Here we have an example:
```
<<<<<<< HEAD
    <link type="text/css" rel="stylesheet" media="all" href="style.css" />
=======
    <!-- no style -->
>>>>>>> master
```
The **<<<** indicates the parts of the **original** file that are in conflict <br>
The **>>>** indicates the **changes you made** that are in conflict with the original file <br>
The ** == ** separates the two <br>
To fix this, you will have to manually edit the file so that your changes are included and work. Remove the <<<,  == , and >>> lines after you are done. Then the commit will work.