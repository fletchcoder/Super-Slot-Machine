# Super Slot Machine

Super Slot Machine is a fake slot machine that simulates an actual slot machine and is complete with a spin lever, machine with six possible results per slot, a form to input balance and bet information, and a result form that tells the user if they won or not. 

Each piece of the page is controlled by JavaScript and changes styling with CSS media queries at five different breakpoints. 

## Built With 
* HTML
* CSS 
* JavaScript 

## Balance Info 
<img align="left" width="47%" src="https://github.com/fletchcoder/Super-Slot-Machine/assets/131314453/80dc9433-0126-4c8e-b175-4ebde2c3f3d6"/>
<img align="left" width="47%" src="https://github.com/fletchcoder/Super-Slot-Machine/assets/131314453/81085600-0ff3-44e1-ab3d-83c3ae219b8b"/><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />

In order to spin the lever for the machine, the user needs to fill out both the balance and the bet information. If either the balance or the bet is entered with a non-number or left empty, the user will be alerted to input dollar amounts for both. If the bet that the user enters is more than the balance, the user will be alerted that they need to reduce it. The same bet will be applied to each line, so the user will need to be thinking of the bet amount multiplied by three. After the user successfully enters balance and bet information, the balance and bet will be displayed above the machine.

## The Machine
![image](https://github.com/fletchcoder/Super-Slot-Machine/assets/131314453/a49e952e-7b0a-44a6-9dd4-9450592b1b2c)

Prior to being spun, the lever sits at the top of its housing and the machine has a default assortment of the various slots that it contains. The user will be unable to click the "SPIN" button at the top of the lever until the bet and balance information is filled out. Once this is done, the spin function will become active and the user can spin the machine. 

![image](https://github.com/fletchcoder/Super-Slot-Machine/assets/131314453/dfba2653-e787-43fe-8785-c3ce4e109480)

After the lever is activated, it will move to the bottom of the housing and the slots will randomly change themselves based on a random number generation for each image. The user will need to have all five slots in a row match in order to have a win for that row. If there are no matches, the user's balance will deplete by the bet amount multiplied by three. If there are matches, the balance will increase by the amount bet multiplied by an additional multiplier that is applied. Matches of bells will trigger a x10 multiplier and matches of gold bars will trigger a x100 multiplier for the bet. Otherwise, the additional multiplier is just set to x1. Having the same set of matches in multiple rows will apply an additional multiplier: x2 for two rows being the same and x3 for all three rows having the same match. If there are different sets of matches between rows, each row will be calculated separately and added together to increase the balance.

## The Result
<img align="left" width="47%" src="https://github.com/fletchcoder/Super-Slot-Machine/assets/131314453/2c073b05-c5b8-4800-b278-63c0841857a9"/>
<img align="left" width="48%" src="https://github.com/fletchcoder/Super-Slot-Machine/assets/131314453/69253811-f973-445c-9e74-7a35473e0af8"/><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />

At first, the result section is left blank because the machine has not spun yet. After spinning, the result will show up in the section, indicating whether the user won or lost. If the user won, the result will tell the user which rows have matches and display a jackpot message if there are matching bells or gold bars in the rows. If the user lost, it will display a "you lose!" message. Either way, a green checkmark and red x will display. The green checkmark will reset the spin lever and allow the user to play again and again until the balance is depleted. The red x will take the user to the thank you page. If the user depletes the entire balance, they will be forced to enter the thank you page via the "End Game" button.

## Thank You 
![image](https://github.com/fletchcoder/Super-Slot-Machine/assets/131314453/b4bf984b-5562-4af4-b616-946092b32770)

After the user is done playing, they are redirected to another page that thanks them for playing Super Slot Machine. If the user would like to play again, they can click the button labeled "Play Again" to go back to the slot machine page.
