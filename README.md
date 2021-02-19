# React Photo Editor

## Overview

An application of a calendar. 
## Functionalities

- You can modify the color, size and position of the text
- You can modify the color and opacity of the filter for the image
- You can enter the values directly in the application or through the URL

## Built With

- ReactJS
- React Material-UI
- React Color

## Development

1. Clone the repository and change directory.

```
git clone git@gitlab.com:codelittinc/react-interview-project-alicia-suarez.git
cd calendar
```

2. Install yarn dependencies

```
yarn install
```

3. Run the app locally.

```
yarn start
```

## How to use

1. Without passing any parameter by url

```
URL: http://localhost:3000/
```
<img src="/src/assets/Default-parameters.png" alt="default" height="500">

The editor will load with the default options


2. Passing some parameters

```
URL: http://localhost:3000/?txt=Check%20out%20my%20sweet%20wings&txtclr=fff&txtalign=center%2Cmiddle&txtsize=48&bm=normal&balph=50
```
<img src="/src/assets/" alt="some" height="500">

The editor will load with the selected parameters and will load the rest by default

3. Passing all parameters

```
URL: http://localhost:3000/?txt=Check%20out%20my%20sweet%20wings&txtclr=fff&txtalign=center%2Cmiddle&txtsize=48&bm=normal&balph=50
```
<img src="/src/assets/All-parameters.png" alt="all" height="500">

The editor takes all the parameters from the url

4. Using editor

<img src="/src/assets/Editor-parameters.png" alt="editor" height="500">

After loading the editor, you can change all the options using the options that the editor offers