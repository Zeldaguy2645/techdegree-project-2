//Here the global varibles are defined to be used in the functions.
const mainDiv = document.querySelector('.page');
const students = document.getElementsByTagName('li');
let div = document.createElement('div');
let ul = document.createElement('ul');

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
  - Here a function is created that appends the ul and li elements to create
    the page number links on each individual page.
  - An event listener is added so that when clicked the links will show the
    correct page number and correct number of students.
***/
const appendPageLinks = (list) => {
      let li = document.createElement('li');
      let a = document.createElement('a');
      let pages = Math.ceil(list.length / 10);
      div.className = 'pagination';
      mainDiv.appendChild(div);
      div.appendChild(ul);


      for (let i = 0; i <= pages; i++) {
          ul.appendChild(li);
          li.appendChild(a);
          a.textContent.value = pages[i];
        }

      for () {
        a.addEventListener('click', (e) => {
          a.target.event = showPage(students, 4);
        })
      }
};
showPage(students, 1);
appendPageLinks(students);
