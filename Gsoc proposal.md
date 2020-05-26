---
layout: minimal
---

# Revisiting Physical Sun and Sky Model


## Contact Information

- Name: João Marcos Mororo Costa
- Email:   [joao_marcos_8@hotmail.com](mailto:joao_marcos_8@hotmail.com)
- GitHub:  [mororo250](https://github.com/mororo250)
- Discord: João28Marcos#7080


## About the project

The current implementation of physical sun and sky models need to be improved so that the blue tint present on the Appleseed implementation is fixed. Also, the current implementation is missing some features, such as a visible solar disk,the ability to configure the sun and the sky model with a geographic location, a date and a time and allow users to change atmosphere parameters.


## Discussion of Current sky dome implementation

Currently, Appleseed implements two different sky models, Preethan [1] and Hosek [2]. Both of them are analytic models and hold the advantage of being fast, memory-efficient and easy to implement. Despite that, they also have some disadvantages, such as the limitation to ground level viewports, they consider an idealized average atmosphere and have very few parameters limiting the amount of atmospheric condition they can reproduce. 

Numeric models as Nishita and Haber are more expensive and require precomputation. However, they support viewpoints from the ground to space and have more parameters providing more flexibility. There is also a paper adapting numeric models for a night sky model [8] and a physically based spatio-temporal sky [6].


## New Features

- Solar disk
- Ability to configure the Sun with a geographic location, a date and a time.
- Ability to tint the overall color of the sky and sun. 
- Adapting the model to ExoPlanets Scenes. 
- Allow users to change atmosphere parameters.


## Detailing new features

#### Solar disk

A solar disk implementation for the Hosek sky model is discussed in [3] I am also planning to implement some extra optical phenomena such as mirages present in [4]. 


#### Ability to configure the Sun and sky with a geographic location, a date and a time.

The position of the observer and the date he is currently in have considerable influence on the position of the sun in the sky and the atmosphere composition. A physically based spatio-temporal sky model is described in this paper [6]. Since the current implementation only allows a limited range of atmospheric conditions, I will limit this project to implement the differences in the position of the sun when varying the time and position of the observer.


#### Adapting the model to ExoPlanets Scenes

This feature is inspired by the paper [5]. This will allow users to rescale waveband for different solar radiance and the usage of multiple stars in the same scene..


#### Ability to tint the overall color of the sky and sun.

This is currently present in Arnold renderer and RenderMan, I believe it would be a nice addition to Appleseed. It will allow users to easily create different types of alien skies.


#### Allow user change atmosphere parameters

The goal of this feature is to make it possible for users to radically change the atmosphere parameters. This would make it possible to render the atmosphere of other planets. To make it feasible, it will be necessary to add an optional precomputation process, where we would calculate all the necessary data for the sky with the new parameters


## Deliverables

I believe that all the new features proposed are deliverable. Most of them are not very hard to develop. The most time-consuming features are the solar disk, which should not take more than three weeks to be done, and the ability to change the atmosphere parameters. The last one is certainly the most time-consuming feature in this project since it needs to be implemented from scratch and it is a far more complicated algorithm than any of the other features. Because of that, I have reserved more time to work on this feature.

I believe that in the worst-case scenario the last feature may be incomplete, maybe working in just one of the sky models, or it may not work properly in the Appleseed plugins.


## Benefits

After this project, rendered images with physically based sky models will provide a more accurate representation of the appearance and illumination from the day sky. It will result in more realistic outdoor scenes. Also, the new features will provide more flexibility for artists to adjust the sky as they please. Lastly, Appleseed will have one of the most complete and versatile physical sky models among all the available 3D renderers.


## Project Schedule

Due to the corona virus crises. My university has stopped for an undetermined time. Because of that, I am not sure how my schedule will be in the next few months, but I am willing to either reduce the number of subjects or request a leaving for absence, if gsoc allows me, depending on when my classes return. I believe that it probably won't be necessary though.
I am reserving only a week to work on the blue tint problem. Since I have already got a good grasp of the problem and already created a pull request related to it:
https://github.com/appleseedhq/appleseed/pull/2811( https://github.com/appleseedhq/appleseed/pull/2811).
 
#### Until May 4:
   - Actively contribute.
   
#### Week of May 04: 
  - Reserved week to fix problems related to the current blue tint
#### Week of May 11: 
  - Implement a simple solar disk.
#### Week of May 18:
  - Improve the implementation of the visible solar disk adding features as mirages, red flash, and limb darkening.
  - Fix possible bugs of the solar disk implementation.
#### Week of May 25:
  - Finish solar disk implementation
  - Add ability to add a tint to the sun and sky.
  - Start to Implement the ability to configure the Sun and the sky with a geographic location date and time.
#### Week of June 1:
  - Continue previous week tasks.
#### Week of June 8: 
  - Continue previous week tasks.
  - Start to extend the model to render ExoPlanets Scenes.
#### Week of June 15:
  - Implement the ability to rescaling wavelengths to match a different star radiance.
  - Extend the model to scenarios that involve more than one star.
  - Bug fixing.
#### Week of June 22: 
  - Create Test scenes.
  - Do more investigation on the algorithm that Preethan and Hosek models use to generate their data and the necessary modification in their algorithms.
#### Week of June 29
  - Phase 1 evaluation.
  - Work on the report.
  - Investigate and discuss with Appleseed develop about the best way to add the algorithms to Appleseed.
#### Week of July 6
  - Start to implement the algorithms to generate the Hosek data.
#### Week of July 13
  - Continuing last week's work.
  - Bug Fixing.
  - Test results.
#### Week of July 20
  - Create a test scene using the Mars atmosphere data.
  - Start to implement an algorithm to generate Preethan data. (probability very similar to how Hosek does)
#### Week of July 27
  - Phase 2 evaluation.
  - Work on the report.
  - Continuing last week's work.
#### Week of August 3
  - Continuing last week's work.
  - Bug fixing.
#### Week of August 10:
  - Create more test scenes for different planets.
  - Code review.
  - Cleaning up the whole code.
#### Week of August 17:
  - Final Evaluation
  - Final report modifications


## Bio

I am 20, studying electrical engineering at the Federal University of Minas Gerais, Brazil. I was first introduced to computer graphics by the YouTube channel: The Cherno. After that, I entered the world of offline render through a university subject. Now, I recently started working on my own real time engine https://github.com/mororo250/Pixie_Engine. It is still missing a lot of features though. I have an advanced level in C++, C, OpenGL, and CUDA. I have also programmed in other languages like Python and Haskell. 


## My Contribution to Appleseed:

  - https://github.com/appleseedhq/appleseed/pull/2586(https://github.com/appleseedhq/appleseed/pull/2586)
  - https://github.com/appleseedhq/appleseed/pull/2586(https://github.com/appleseedhq/appleseed/pull/2586)
  - https://github.com/appleseedhq/appleseed/pull/2549(https://github.com/appleseedhq/appleseed/pull/2549)
  - https://github.com/appleseedhq/appleseed/pull/2524(https://github.com/appleseedhq/appleseed/pull/2524)
  - https://github.com/appleseedhq/appleseed/pull/2811(https://github.com/appleseedhq/appleseed/pull/2811)


## References:

[1] PREETHAM A.  J., SHIRLEY P.,  SMITS B.:  A  practical  ana-ytic  model  for  daylight. In Proceedings  of  the  26th  annual  conference  on  Computer  graphics  and  interactive  techniques(1999),  ACM Press/Addison-Wesley Publishing

[2] HOSEK L., WILKIE A.: An analytic model for full spectral sky-dome radiance. ACM Transactions on Graphics (TOG) 31, 4 (2012), 95

[3] Hosek, Lukas, and Alexander Wilkie. "Adding a Solar-Radiance Function to the Hošek-Wilkie Skylight Model." IEEE Computer Graphics and Applications 33 (2013): 44-52.

[4] Lintu, Andrei et al. “Realistic Solar Disc Rendering.” WSCG (2005).

[5] Wilkie, Alexander & Hošek, Lukas. (2013). Predicting Sky Dome Appearance on Earth-like Extrasolar Worlds. Proceedings - SCCG 2013: 29th Spring Conference on Computer Graphics. 

[6] Guimera, David et al. “A Physically-Based Spatio-Temporal Sky Model.” (2018)

[7] Collienne, Peter et al. “Physically Based Rendering of the Martian Atmosphere.” (2013).

[8] Jensen, Henrik Wann et al. “A physically-based night sky model.” SIGGRAPH '01 (2001).
