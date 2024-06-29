# Village Simulator

Village Simulator is a React application that allows users to build and manage a village by placing various improvements and consuming resources. The goal is to balance resource production and consumption while expanding the village.

## Features

**Map:** A grid of cells where users can add improvements.
**Resources Management:** Tracks the amount of each resource in stock.
**Improvements:** Various improvements (House, Field, Pasture, Lumber Mill, Well) each with specific resource production and consumption.
**Upgrading and Downgrading:** Improvements can be upgraded or downgraded to adjust resource management.
**Interactive Dialogs:** Add or edit improvements through interactive forms.

## Contributors

<a href="https://github.com/Yulia182">Yulia Hernandez</a> <a href="https://github.com/nbrendel27"> Nickolas Brendel</a>

## Rules

Costs are deducted and resources are added when an improvement is placed.
An improvement cannot be placed if the costs exceed the available resources.
Upgrades multiply costs and benefits, downgrades reduce them.
Actions are disabled if they would result in negative resources.
