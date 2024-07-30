# Profile Page Plan

1. On first load, the user will be presented with a button that says, "Add new category". The top of the page will greet the user with their username. The bottom half of the page will show all available boxes.
- After the user adds a box (adding function will be controlled by regular JS), the user will have the ability to add options inside of the box, which will be converted into a checklist. This will be coded by pure JS only. We will track the box count with react, or not, don't know yet.
- After adding desired boxes, the user will click save. This will save the following information into Firestore:
    - Box Count
    - Content Inside Box (perhaps through array)

2. After the user reloads, we need to make sure that the user is able to see the stored boxes. Maybe we use React for this? Not sure yet.
