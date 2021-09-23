# Pulling all branches:

Step 1.)

- clone this repo to a folder on your computer you know you can find later:

`git clone git@github.com:TS22082/react_demo_class.git`

Step 2.)

- cd into the folder `react_demo_class`

`cd react_demo_class`

Step 3.)

- view all remote branches:

`git branch -r`

Expected output:

```
👽 > git branch -r
  origin/HEAD -> origin/main
  origin/components
  origin/components-2
  origin/main
  origin/state
  origin/state-2
```

Step 4.)

- Individually pull each remote branch and copy it to your computer

```
git checkout --track origin/components
git checkout --track origin/components-2
git checkout --track origin/state
git checkout --track origin/state-2
```

Step 5.)

- Confirm you have all the remote branches copied to your computer:

`git branch -l`

Expected output:

```
  components
  components-2
  main
  state
* state-2
```

# Running application:

- confirm you are in the project root directory:

Type:  
`ls`

Expected Output:

`package.json package-lock.json public/ README.md src/`

Run install script:

Type:  
`npm install`

- Run application:  
  `npm start`
