# Village Simulator

## Description

Village Simulator is a React application that allows users to build and manage a village by placing various improvements and consuming resources. The goal is to balance resource production and consumption while expanding the village.

## Table of Contents

- [Features](#features)
- [Rules](#rules)
- [Contributors](#contributors)
- [Technologies Used](#technologies-used)
- [Screenshots](#screenshots)

## Features

**Map:** A grid of cells where users can add improvements.

**Resources Management:** Tracks the amount of each resource in stock.

**Improvements:** Various improvements (Pyramid, Aqueduct, Sphinks, Market, Masonry) each with specific resource production and consumption.

**Upgrading and Downgrading:** Improvements can be upgraded or downgraded to adjust resource management.

**Interactive Dialogs:** Add or edit improvements through interactive forms.

**Alien Invasion:** Random number of resources get stolen.

## Rules

1. Costs are deducted and resources are added when an improvement is placed.
2. Note that certain improvements can only be placed in certain locations. Different colors on the grid represent those locations.
3. An improvement cannot be placed if the costs exceed the available resources.
4. Upgrades multiply costs and benefits, downgrades reduce them.
5. Actions are disabled if they would result in negative resources.
6. You could, at any point, encounter an alien invasion. The Aliens will take 0-5 of your resources on each invasion.
7. If there is no possible moves left, you lose the game.
8. If you obtain 20 people, you win the game.

## Contributors

<a href="https://github.com/Yulia182">Yulia Hernandez</a>
<a href="https://github.com/nbrendel27"> Nickolas Brendel</a>

## Technologies Used

This project was generated with React version 18.2.0, HTML, CSS, JavaScript (ES6), and TypeScript.

## Screenshots

### Add Improvement View

![Add Improvement View](src/assets/add%20improvement.PNG)
_Add improvement displays various improvements each with specific resource production and consumption._

### Edit Improvement View

![Edit Improvement View](src/assets/edit%20improvement%20view.PNG)
_Edit improvement allows users to upgrade, downgrade or remove the improvement_

### Alien Invasion View

![Alien Invasion View](src/assets/alien%20invasion.PNG)
_Alien invasion functionality allows to steal random amount of resources from the user_
