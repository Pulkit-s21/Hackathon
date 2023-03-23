---

marp: true
paginate: true
class: invert

---
# Hypertext Assassins

![width:500px](/marp_images/Logo.png)

### Package tracking Website

---

# The Question

+ Low-cost high-level tracking system for packages

+ Nowadays is all about online shopping and people get really worried about the status of their package. So design a tracking system that provides real-time information about our package and possible time for delivery

---

# Technologies
+ For the Front-end we have used
    + Figma
    + HTML
    + Tailwind
    + JavaScript
    + ScrollMagic 
    + SwiperJS
    + LeafletJS
    + Python
    + OpenCage API

---

# Mode Toggle
+ Now every website needs to be in both Light and Dark Mode for users as everyone has different preference 

```js
    if(document.documentElement.classList.contains("dark")){
        document.documentElement.classList.remove("dark")
        localStorage.setItem("theme","light")
        iconToggle()
        return
    }
    document.documentElement.classList.add("dark")
    localStorage.setItem("theme","dark")
    iconToggle()
```
+ We used JS to let user switch between the modes

---

# Scroll Animations
+ We used ScrollMagic to add animations to different parts of site that take place when user scrolls to that section 

```js
var controller = new ScrollMagic.Controller() 
```

+ What scrollMagic does is it uses `scrollbar` as controller, we set different trigger points and when scrollbar reaches their it adds the animation class to the component

```js 
var scene5 = new ScrollMagic.Scene({
        triggerElement: '.section5',
        triggerHook: .6, // decides the time when animation should start taking place
    })
    .setClassToggle('.section5','fade-in')
    .addTo(controller)
```

Just an example of how we use `scrollMagic` to add animations

---

# Testimonials

New customer always look for reviews on the product they want to buy so `testimonials` go a long way in acquiring new customers

+ Showing all the reviews together can be jaring so we decided to make the reviews in a `carousel` form 

+ Making a carousel from scratch was possible but we instead with `swiperJS` 

+ Swiper Js made the carousel so easy as we just have to add the content we want and style it. It takes cares of the functionality, uses Jquery to make it happen.

```js 
      const swiper = new Swiper('.swiper', {
      // Optional parameters
      speed: 500,
      spaceBetween: 150,
      autoplay: {
        delay: 3000
    },});
```

---

# Tracking Page

+ When user enters the tracking num it is stored in `localStorage` so that we can transfer that data to the next page

+ We check if the number entered is in the orderList or not

+ There can be three cases

    + If number is not then the value of input field says `Order Not Found`, the map and the package status area doesn't show up

    + If user doesn't enters any data then an `alert pops up` and sends user back to landing page to enter the data

    + If the tracking num is correct then the whole page loads


---

# Python Part

+ It accepts a number and then uses `phonenumbers module` to convert the string passed into format and use `openCage api` to get the information like Country, lat, long, service provider of the number

+ We then used `json.dumps` to convert the lat & long to json and `sys module` to write that json into a file

---

# Leaflet JS

+ We added the map using this for the tracking
+ We used `routing machine` as well to get the route from A->B
+ Routing machine gives direction as well
+ It takes coordinates to place the marker and circle

---

+ So now `LeafletJs` needs coordinates to place the `marker and circle` which will be provided from the `ordreroid` array of objects

+ If the orderId matches from the list then those coordinates are put into the Leaflet Js

+ Now the coordinates will be fetched from either the `python script` or from the `live coordinates` of our system as for now

+ The route will be from the coordinates of the courier to the delivery coordinates we have in the orderoid object

---

# Future

+ Make the python script run from the webpage itself

+ Send the number to python program from Javascript according to the orderId

+ Store the login/signup information on database and show data like previous order information after user logs into their account


---

# By
## HyperText Assassins

+ Pulkit
+ Pranay
+ Tushar
+ Vikas