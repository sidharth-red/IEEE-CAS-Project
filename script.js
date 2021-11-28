//alert("Loading");
function addNewWEField() {
    
    //console. Log("Adding new field");

    let newNode= document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('weField');
    newNode.classList.add('mt-2');
    newNode.setAttribute('rows', 3);
    newNode.setAttribute('placeholder', "Enter your Work Experience");

    let weOb = document.getElementById("we");
    let weAddButtonOb= document.getElementById("weAddButton");

    weOb.insertBefore(newNode, weAddButtonOb);
}
function addNewAQField(){
    let newNode= document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("eqField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows", 3);
    newNode.setAttribute("placeholder", "Enter your Academic Qualifications");

    let aqOb = document.getElementById("aq");
    let aqAddButtonOb= document.getElementById("aqAddButton");

    aqOb.insertBefore(newNode, aqAddButtonOb);
}

function addNewSkillsField(){
    let newNode= document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("skillField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows", 1);
    newNode.setAttribute("placeholder", "Enter your Skills");

    let skillOb = document.getElementById("skill");
    let skillAddButtonOb= document.getElementById("skillAddButton");

    skillOb.insertBefore(newNode, skillAddButtonOb);
}

// function textbox()
// {
//     document.getElementById('textbox').style.borderColor='purple';
//     document.getElementById('textbox').style.backgroundColor='#4AC9DF';
//     document.getElementById('textbox').style.color='white';

// }

//Generating CV
function generateCV()
{
    // Name, Contact, Social Media Links
    let nameField=document.getElementById('nameField').value;
    let nameT1=document.getElementById('nameT1');
    nameT1.innerHTML=nameField;
    document.getElementById('nameT2').innerHTML=nameField;


    let contactField=document.getElementById('contactField').value;
    let contactT=document.getElementById('contactT');
    contactT.innerHTML=contactField;

    let addressField=document.getElementById('addressField').value;
    let addressT=document.getElementById('addressT');
    addressT.innerHTML=addressField;

    let linkedField=document.getElementById('linkedField').value;
    let linkedT=document.getElementById('linkedT');
    linkedT.innerHTML=linkedField;

    let fbField=document.getElementById('fbField').value;
    let fbT=document.getElementById('fbT');
    fbT.innerHTML=fbField;

    let instaField=document.getElementById('instaField').value;
    let instaT=document.getElementById('instaT');
    instaT.innerHTML=instaField;


    //Objective
    let objectiveField=document.getElementById('objectiveField').value;
    let objectiveT=document.getElementById('objectiveT');
    objectiveT.innerHTML=objectiveField;

    // Skills
    let skills=document.getElementsByClassName('skillField');
   let str='';
    for(let e of skills)
    {
        str+= `<li> ${e.value} </li>`;
    }
    document.getElementById("skillT").innerHTML=str;

    // Work Experience
    let wes=document.getElementsByClassName('weField');
    let str1='';
    for(let e of wes)
    {
        str1+= `<li> ${e.value} </li>`;
    }
    document.getElementById("weT").innerHTML=str1;

    // Academic Qualification

    let aqs=document.getElementsByClassName('eqField');
    let str2='';
    for(let e of aqs)
    {
        str2+= `<li> ${e.value} </li>`;
    }
    document.getElementById("aqT").innerHTML=str2; 

        
    //code for setting image

    let file=document.getElementById('imgField').files[0];
    console.log(file);
    let reader=new FileReader();
    reader.readAsDataURL(file);
    console.log(reader.result);
    //Setting image to the template
    reader.onloadend = function(){
        document.getElementById("imgTemplate").src=reader.result;
    }


    document.getElementById('cv-form').style.display='none';
    document.getElementById('cv-template').style.display='block';
    document.body.style.background="white"
    document.body.style.color="black"
}


//Download Resume

window.onload = function () {
    document.getElementById("Download")
        .addEventListener("click", () => {
            const template = this.document.getElementById("cv-template");
            var opt = {
                filename: 'myresume.pdf',
                image: { type: 'jpeg', quality: 0.98 },
                html2canvas: { scale: 2 },
                jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
            };
            html2pdf().from(template).set(opt).save();
            document.getElementById('Download').style.display='none';
        })
}

