# Village Simulator

## Description

Village Simulator is a React application that allows users to build and manage a village by placing various improvements and consuming resources. The goal is to balance resource production and consumption while expanding the village.

## Features

**Map:** A grid of cells where users can add improvements.
**Resources Management:** Tracks the amount of each resource in stock.
**Improvements:** Various improvements (Pyramid, Aqueduct, Sphinks, Market, Masonry) each with specific resource production and consumption.
**Upgrading and Downgrading:** Improvements can be upgraded or downgraded to adjust resource management.
**Interactive Dialogs:** Add or edit improvements through interactive forms.

## Contributors

<a href="https://github.com/Yulia182">Yulia Hernandez</a>
<a href="https://github.com/nbrendel27"> Nickolas Brendel</a>

## Rules

1. Costs are deducted and resources are added when an improvement is placed.
2. An improvement cannot be placed if the costs exceed the available resources.
3. Upgrades multiply costs and benefits, downgrades reduce them.
4. Actions are disabled if they would result in negative resources.

## Technology Used

This project was generated with React version 18.2.0, HTML, CSS, JavaScript (ES6), and TypeScript.
