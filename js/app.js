/** Global variables */
const nav = document.querySelector(".nav");
const container = document.querySelector(".section-container");


/** Building content  */
function buildContent(){
    const list = document.createElement("ul");

    for(let i = 1; i < 5; i++){
        // Building Menu-nav
        const item = document.createElement("li");
        //item.id = `link${i}`;
        item.classList.add(`section${i}`);
        item.classList.add("links");
        item.textContent = `Section ${i}`;
        item.addEventListener("click", goSection);
        list.appendChild(item);

        //Building Sections
        container.insertAdjacentHTML("beforeend", `<section id="section${i}">
                                                        <h1>Section ${i}</h1>
                                                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad delectus quo 
                                                            porro beatae est, fuga nesciunt explicabo quibusdam facilis repellendus 
                                                            assumenda tenetur quod maxime soluta ab iure veniam? Saepe cupiditate 
                                                            quaerat dolor facilis voluptatibus? Voluptate, doloribus nisi? Reiciendis 
                                                            explicabo fuga soluta quam officiis repudiandae, qui ea quae modi quas 
                                                            dignissimos veniam nobis eligendi ad corporis voluptatibus, dolorem nisi 
                                                            a ab tempora beatae aliquam illum! Numquam, ipsa quos architecto corporis 
                                                            facere eum ad minus harum! Aliquid, non quam neque cumque eos eum amet 
                                                            minima modi? Accusantium et, consequuntur tenetur officia neque rerum 
                                                            veritatis repellendus temporibus quaerat illum, culpa consequatur dolorem 
                                                            iste molestias ad laboriosam modi numquam placeat minus non exercitationem 
                                                            aspernatur eius. Ab doloremque neque iusto facere nobis perferendis quis 
                                                            sapiente ad impedit in incidunt laborum, repellat vel consectetur eos 
                                                            nostrum! Soluta doloribus nesciunt velit cupiditate quo laboriosam at 
                                                            praesentium laborum ullam libero, omnis quod architecto sapiente eum nemo? 
                                                            Fuga debitis totam architecto dolores accusamus assumenda recusandae quo, 
                                                            nostrum illum numquam blanditiis nam! Eum iste voluptas nemo accusantium at 
                                                            fugiat qui, cupiditate praesentium quia aliquam illo nam, officiis eaque 
                                                            sapiente quidem commodi consequuntur. Magni debitis voluptatibus dolorem 
                                                            aspernatur optio. Eaque ipsam, officiis repellat vel minus obcaecati qui, 
                                                            eum fugiat corporis nulla dolorum? Quos quasi alias dolor iusto, magni ad 
                                                            adipisci hic autem atque cumque obcaecati dolores, odit ducimus assumenda 
                                                            ab totam harum? Magni explicabo ea sapiente, rem placeat soluta quasi. Rerum 
                                                            odio odit porro magnam quaerat, officia exercitationem, pariatur ratione, 
                                                            accusamus quis architecto maxime consectetur tempore hic inventore eos 
                                                            sapiente ut voluptatum dolor voluptates fugiat ipsum doloremque repellendus 
                                                            perferendis? Ea quae, veniam commodi dolor, odit qui quia sequi dolore maiores 
                                                            doloribus aliquam quidem voluptate eligendi fuga dolorum expedita alias? 
                                                            Labore minima repellat dolorum totam saepe tenetur illo, aliquid quo earum 
                                                            quisquam, consequuntur odio odit possimus doloremque vero magnam dolores 
                                                            nesciunt culpa modi temporibus amet necessitatibus!
                                                        </p>
                                                    </section>`);
    }
    nav.appendChild(list);
}

// Add class 'active' to section when near top of viewport
function activeContent(){
    const sections = document.querySelectorAll("section");

    // Getting all sections
    for(const section of sections){
        const sectionBox = section.getBoundingClientRect();
        const text = "."+section.id;
        const listItem = document.querySelector(text);

        //verifing sectionBox position
        if(sectionBox.top <= 100 && sectionBox.bottom >= 100){
            section.classList.add("active");
            listItem.classList.add("active-link");
        }
        else{
            section.classList.remove("active");
            listItem.classList.remove("active-link");
        }
    }
}

//Call functions 
//Content
buildContent();

//Active Content
/**
* Creat an event linstener to call the funtion 
* to match the current section with the active Menu-nav item 
*/ 
document.addEventListener("scroll", activeContent);

/** 
* Get value of scrolling area 
* function update() {
*     const section = document.querySelector("#section1");
*     const viewport_element = section.getBoundingClientRect();
*
*    for (let key in viewport_element) {
*         if(typeof viewport_element[key] !== "function") {
*             console.log(`${ key } : ${ viewport_element[key] }`);
*         }
*     }
* }
*/

// Match Manu-nav item with the right section  
function goSection(event){
    event.preventDefault();
    //console.log(this.classList[0]);
    
    // Getting the section id through the menu-nav className
    const secItem = document.getElementById(this.classList[0]);
    secItem.scrollIntoView({behavior:"smooth", block:"start", inline:"nearest"});
}