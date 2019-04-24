//Here the global varibles are defined to be used in the functions.
const mainDiv = document.querySelector('.page');
const students = document.getElementsByTagName('li');

/***
    -Here a function is created that takes in the parameters of the
     list of students and the page number that they will be on.
    -A for loop is created so that each individual list item is iterated
     through to determine which page they will be displayed on.
***/
const showPage = (list, page) => {
      const pageItems = 10;
      const listLength = list.length;
      let startList = (page * pageItems) - pageItems -1;
      let endList = page * pageItems;

      for (let i = 0; i < listLength; i++)
          if ([i] >= startList && [i] < endList) {
            list[i].style.display = 'block';
          } else {
              list[i].style.display = 'none';
          }
};

/***
   Create the `appendPageLinks function` to generate, append, and add
   functionality to the pagination buttons.
***/
const appendPageLinks = (list) => {
      let div = document.createElement('div');
      let ul = document.createElement('ul');
      div.className = 'pagination'
      mainDiv.appendChild(div);
      div.appendChild(ul);

      a.addEventListener('click' (e) => {
        for (let i = 0; i < list.length; i++) {

        }
      })
};
