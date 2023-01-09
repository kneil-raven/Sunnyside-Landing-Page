# NOTES to be taken!

## OVERVIEW FOR THE DESIGNING OF THIS VERSION FOR THE SUNNYSIDE LANDING PAGE

This design was intended as mobile first to desktop view.

1. File structure for the files needed.
2. CSS variable and reset.
3. Header section.
    - HTML template:
        - <header>
        - <nav>
            - <a> then inside <a>, then <img> logo
            - <ul>
                - <li>
            - <button>

### CSS Styling in HEADER SECTION

1. In the HEADER Section, learn how to use calc() function in the navbar-nav {} tag. See documentation below:

    - https://developer.mozilla.org/en-US/docs/Web/CSS/calc
    - https://www.youtube.com/watch?v=x7EWFoRzAkk

 In calc() function, you can combine different units! 
 `width: calc(100% - 30px)` means that the width takes up the full width of something pero babawasan mo ng few units short, ie: the width is 30px short.


2. In the navbar-nav, learn how to use gap() to build spaces in the nav that's been created. See documentation below:

    - https://developer.mozilla.org/en-US/docs/Web/CSS/gap

3. Use transform() property to resize the design or scale the navbar-nav into smaller size. It makes it bigger in the x and y direction at the same time.

    - https://developer.mozilla.org/en-US/docs/Web/CSS/transform
    - https://www.youtube.com/watch?v=rzD-cPhq02E

The transform-origin sets jay 

    - https://developer.mozilla.org/en-US/docs/Web/CSS/transform-origin

4. The .active sets the animation for the navbar, see code below: 
    
    ```css
    .navbar-nav.active {
    transform: scale(1);
    opacity: 1;
    pointer-events: all;
    }
    ```

5. The nav-toggle-btn will be the hamburger icon.
6. After designing the .active class, remove it. Add it later on dijay functionality dijay Javascript.


### CSS Styling in HOME SECTION

1. Remove the background from the header, check in the Chrome Devtools the changes. Try to change the position attribute para makaexplore.

2. Remove the `min-height: 100vh` from the .container property inside the CSS. 

3. You can also use `transform: translateY(50%)` to set the position of the content inside the .home-absolute-content. See code below:

    ```css
    .home-absolute-content {
    position: absolute;
    top: 50%;
    left: 25px;
    right: 25px;
    color: var(--custom-neutral-white);
    transform: translateY(-50%);
    text-align: center;
    }
    ```

4. Learn CSS animation for the bouncing arrow. Brief youtube explanation below:

    - https://www.youtube.com/watch?v=YszONjKpgg4
    - https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations/Using_CSS_animations#examples

    - In writing animation, you place the property to where you want the animation to happen. Dijay box(<div>) nga ayan ti animation nga pakapasamakan. Syntax:

    ```css
    .arrow-down {
    display: inline-block;
    transform: translateY(30%);
    animation: jump-down 2s ease infinite;
    }
    ```

    - animation: name duration timing-function delay iteration-count direction fill-mode;

5. After writing the animation, remember to place the 
`@keyframes` to define the name of the animation you want to make.

```css
    .arrow-down {
    display: inline-block;
    transform: translateY(30%);
    animation: jump-down 2s ease infinite;
    }
    @keyframes jump-down {
        100% {
            transform: translateY(0);
        }

        12.5%,
        37.5% {
        transform: translateY(30px);
        }
    }
```
- The % varies on the percentage ti progress jay animation from 0% and 100% complete. 


### CSS Styling in ABOUT SECTION

1. Review CSS Grids. Link below:
    - https://www.youtube.com/watch?v=9zBsdzdE4sM

2. The .about-link should have a z-index of of 1 para ang itsura ay mas maharap siya in preparation for the custom yellow underline.

3. Learn pseudo elements. Link below
    - https://www.youtube.com/watch?v=OtBpgtqrjyo
    - https://developer.mozilla.org/en-US/docs/Web/CSS/::after

Important to pseudo elements! Pseudo elements require us to use the `content:` attribute para iset ang content ng ating pseudo element.


### CSS Styling in SERVICES SECTION

1. In the `.service-absolute-content` class, remember to change the bottom from % to px if the outcome is not the same as the original. 



### CSS Styling in CLIENT SECTION 

1. Remember the `.client-img-box` class will create the circle style of the image kasi this box serves as the frame for the image. 

2. After styling the `.client-img-box`, modify your `.client-img` according to its width and height that you want and always set its `object-fit: cover` to maintain the aspect ratio while filling the entire box.


### CSS Styling in FOOTER

1. The `.footer-brand` ket dapat copy and paste it hindi image ang ginawa ko dito. tapos the fill change the fill property to `fill="#2B7362".  


### Styling RESPONSIVENESS

1. Learn CSS Grid para mapagpalit ang positions ng `.grid-pos-lg` class inside the about section image and the text.

    - https://www.youtube.com/watch?v=9zBsdzdE4sM
    - The syntax for grid-column and grid-row is:
    ```css
        .grid-pos-lg {
        grid-column: 1/3;
        grid-row: 1/3
    }
    ```
    - TIP! Para mabilang kung ilan ang start at end, ang start ng column is yung first line sa pinakagilid or yung edge ng screen. Yung 2nd is yung gitna nila or line between the text and the image. Yung 3rd is the right-most edge ng screen. 

    - Same with row, magstart sa top-most corner edge lang ng screen kasos horizontal.

The 1 in grid-column nad grid-row indicates the start and the 3 indicates the grid-column-end.


### PROBLEMS

1. how to change the `.home-banner` to style na kuha yung itsura nung nasa image, hindi yung responsive na lumalaki habang linalakihan screen size.

2. services image, pano paliitin.
