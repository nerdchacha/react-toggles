## React Toggles

A simple collection of decently customizable toggle buttons available in **3** basic styles namely **ios, skewed** and **flip**. Since this module is more of a plug and play, it uses inline css to style the toggle button so that no ecternal css styles have to be imported.

## Installation
```npm install reacttoggles```

## Use

The reaact toggele comes in 3 variants.
The same can be imported and used in the project using
##### ES6

```import { IosToggle, SkewToggle, FlipToggle } from 'reacttoggles'```

##### RequireJS

```var Toggle = require('reacttoggles')```

```let { IosToggle, SkewToggle, FlipToggle } = Toggle```

## Motivation
Writing a small component like a toggle button is a pain since this doesn't come out of the box with frameworks like ```bootstrap```. Sometimes, all you need is a simple import with a plug and play feature withiut any setup. This is what this modules helps to achieve 

## Repo
https://github.com/nerdchacha/react-toggles

## Props

|  Prop     | Type   	| Description   	| Valid |
|---	|---	|---	| --- |
|   ```checked```	| ```bool```  	|  If ```true```, the toggle is checked. If ```false```, the toggle is unchecked 	| ```All``` |
|   ```fontSize```	| ```number```  	|  Since all dimensions are set using ```em```, this will the ```fontSize``` os the ```em``` value of the wrapper div. If you want to give the size using css, don't use this property and instead give ```fontSize``` using css instead 	| ```All``` |
| ```disabled```   	| ```bool```  	|  If ```true```, the toggle is disabled. If ```false```, the toggle is enabled  	| ```All``` |
|   ```attributes```	| ```object```  	|  A ```key``` ```value``` pair of attributes that needs to be set for the input element. This may include attributes like ```name```, ```id``` etc 	| ```All``` |
|   ```handleChange```	| ```function```  	|   A callback function that is executed everytime the toggle value changes. The current toggle value is passed as a parameter to this function	| ```All``` |
|   ```handleClick```	|   ```function```	| A callback function that is executed everytime the toggle is clicked. The current synthetic event is passed as a parameter to this function 	| ```All``` |
|   ```toggleIcon```	| ```string``` OR ```react element``` 	| This string or react element (usually some icon) will be rendered on top of the toggle button.    	| ```IosToggle``` |
|  ```onProps``` 	|  ```object```	| Configuration for on state  	|```All``` |
|  ```offProps``` 	|  ```object```	| Configuration for off state  	|```All``` |

```javascript
onProps : {
    component: String OR ReactElement
    style: {
        backgroundColor: String,
        color: String,
        toggleBorder: String,
        buttonBorder: String
    }
}
```

```component``` : ```string``` OR ```React Element``` (usually icon) to be displayed when toggle is in **on** state

```backgroundColor```: background color of the toggle when the toggle is in **on** state

```color```: font color of the toggle when the toggle is in **on** state

```toggleBorder```: toggle button/bar border color when the toggle is in **on** state

```buttonBorder```: toggle button color when the toggle is in **on** state (only for ```IosToggle```)



```javascript
offProps : {
    component: String OR ReactElement
    style: {
        backgroundColor: String,
        color: String,
        toggleBorder: String,
        buttonBorder: String
    }
}
```
```component``` : ```string``` OR ```React Element``` (usually icon) to be displayed when toggle is in **off** state

```backgroundColor```: background color of the toggle when the toggle is in **off** state

```color```: font color of the toggle when the toggle is in **off** state

```toggleBorder```: toggle button/bar border color when the toggle is in **off** state

```buttonBorder```: toggle button color when the toggle is in **off** state (only for ```IosToggle```)

## Tests

The modules currently comes with a test setup but with very minimilistic test cases.
test can be run using from the module directry using the script

```npm run test:local```

## Authors
**Yatin Gera** initial work and setup

## Issue tracker
https://github.com/nerdchacha/react-toggles/issues

## License

This project is licensed under the MIT License
