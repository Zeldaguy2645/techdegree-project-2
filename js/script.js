
const students = document.getElementsByTagName('li');
const pageItems = 10;




/***
   Create the `showPage` function to hide all of the items in the
   list except for the ten you want to show.

   Pro Tips:
     - Keep in mind that with a list of 54 students, the last page
       will only display four.
     - Remember that the first student has an index of 0.
     - Remember that a function `parameter` goes in the parens when
       you initially define the function, and it acts as a variable
       or a placeholder to represent the actual function `argument`
       that will be passed into the parens later when you call or
       "invoke" the function
***/
const showPage = (list, page) => {
      let startList = (page * pageItems) - pageItems;
      let endList = page * pageItems;

      for (let i = 0, i <= students.length, i++) {
          if [i] >= startList && [i] <= endList {
            [i].style.display = 'block';
          } else {
              [i].style.display = 'none';
          }

      }

}



/***
   Create the `appendPageLinks function` to generate, append, and add
   functionality to the pagination buttons.
***/
const appendPageLinks = (list) => {


}




// Remember to delete the comments that came with this file, and replace them with your own code comments.
