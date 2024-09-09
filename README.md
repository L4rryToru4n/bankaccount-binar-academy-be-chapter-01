# Simple Bank Account
## Introduction
Simple Bank Account is a program that has basic functions of calculations on an account's balance.
The purpose of creating this program is to support the build iteration of Basic Banking System firstly by developing the main functions.

## Functionality
The program has two main basic functionalities. These functions are:
- `tambahSaldo()` (Performing Addition)
- `kurangiSaldo()` (Performing Subtraction)

Each function has several supporting functions that perform checks on inputs before processing. For example, `tambahSaldo()` will first parse the received value into a float type number then will perform checks if the value is a numerical type and finally if it is a numerical it will check if the value is not more than the maximum number of the built in datatype.

## Tech Stack Used
The program only use a plain JavaScript and HTML for displaying outputs.

## Setup
In order to do demo, clone the project by typing this command into the terminal: `git clone https://github.com/L4rryToru4n/bankaccount-binar-academy-be-chapter-01.git` or download the project then extract the .zip file.

## Usage Instructions
After downloading or cloning the repository, open the directory project using a browser and type `index.html` to view the program. For performing a calculation, input any numbers in the input box then either click `Tambah Saldo` button or `Kurangi Saldo` button. The result should be then displayed above the input elements.
