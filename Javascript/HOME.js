//STATS COUNTERS
const stats = document.querySelector('.stats');
const counters = document.querySelectorAll('.counter');
let bol = false;



/*Get Stats section offset from the top of the 
page + the stats element height*/
const sectionOffset = stats.offsetTop + stats.offsetHeight;


/*Start the counter when the page is scrolled to the stats
section*/
window.addEventListener("scroll", () => {
    /* Get Page Offset from top + the whole screen height*/

    const pageOffset = window.innerHeight + pageYOffset;

    /*Run the updateCount function if the page is scrolled past the stats
    section, and run only once*/

    if(pageOffset > sectionOffset && bol === false)
    {
        // Select all Counters
        counters.forEach((counter) => {
            function updateCount(){
                /*Set variables and overwrite them every
                time with the '+' shorthand*/
                const target = +counter.getAttribute('data-target');
                const speed = +counter.getAttribute('data-speed');
                const count = +counter.innerText;



                //Check if target is reached
                if(count < target)
                {
                    //Increment
                    counter.innerText = count + 1;

                    //Call function every ms
                    setTimeout(updateCount, speed);
                    //When the target is reached
                }
                else
                {
                    //Stop counting
                    counter.innerText = target;
                }
            }
            //Run The UpdateCount Function
            updateCount();
            /*Run the function only once by breaking one of the 
            conditions in the if statement*/

            /*This stops the updateCount function from running every
            time you scroll past this section*/
            bol = true;
        })
    }

})