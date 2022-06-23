/*Research Details Table*/

const researchTable = document.querySelector(".main");

const research = [
  {
    title: "Target : www.talent.com",
    authors:
      "Bug : Broken Auth & Session Management.",
    conferences:
      "This bug can let an attacker login to victim's account without any autorization, Just by hijacking his/her cookies & injecting it on his own cookies field.",
    researchYr: 2021,
    citebox: "popup1",
    image: "assets/images/research-page/1.png",
    citation: {
      vancouver:
        "With the detailed report about this bug & remediation in the same report, they offered me 600$ bounty. For me the bounty was little low, as the vulnerability was found on two places. 1) Jobseeker's login page 2) Employer's login page.",
    },
    abstract:
      "I submitted this report with a .mp4 format poc video while showing the vulnerability in detailed.",
    absbox: "absPopup1",
  },

  {
    title: "Target : www.talent.com",
    authors:
      "Bug : Reflected XSS.",
    conferences:
      "This is a common bug which fetch & execute any payload from the target's database.",
    researchYr: 2022,
    citebox: "popup2",
    image: "assets/images/research-page/2.png",
    citation: {
      vancouver:
        "I submitted this report without any video poc in it, as they test request against the site. Right after 3 days they offered me 100$ and said that the parameter was still in underdevelopment so they had some vulnerabilities like this.",
    },
    abstract:
      "While submitting this bug, I gave them three things in report 1) Vulnerable Url with parameter 2) Captured request with payload in it 3) The payload I used to trigger XSS.",
    absbox: "absPopup2",
  },

  {
    title:
      "Target : www.talent.com",
    authors: "Bug : Logical Bug",
    conferences:
      "This logical bug was able to make any employer logout by a POST request URL",
    researchYr: 2022,
    citebox: "popup3",
    image: "assets/images/research-page/3.png",
    citation: {
      vancouver:
        "I didn't really had any expectations of bounty with this one, as it required victim's interaction with the attacker. The time victim open's the POST request URL from attacker he'll left with no choice but to click yes log me out option. For this logical bug they offeref me 75$ bounty through paypal.",
    },
    abstract:
      "I gave them .mp4 format POC with the vulnerable URL.",
    absbox: "absPopup3",
  },

  {
    title:
      "Target : www.talent.com",
    authors:
      "Bug : Reflected XSS",
    conferences:
      "This is a common bug which fetch & execute any payload from the target's database.",
    researchYr: 2021,
    citebox: "popup4",
    image: "assets/images/research-page/4.png",
    citation: {
      vancouver:
        "I submitted this report without any video poc in it, as they test request against the site. Right after 3 days they offered me 100$ and said that the parameter was still in underdevelopment so they had some vulnerabilities like this.",
    },
    abstract:
      "While submitting this bug, I gave them three things in report 1) Vulnerable Url with parameter 2) Captured request with payload in it 3) The payload I used to trigger XSS.",
    absbox: "absPopup4",
  },

  {
    title: "Target : www.talent.com",
    authors: "Bug : Logical Bug",
    conferences:
      "By this bug any attacker can manipulate OTP's length for email verification",
    researchYr: 2021,
    citebox: "popup5",
    image: "assets/images/research-page/5.png",
    citation: {
      vancouver:
        "I started capturing requests right after submitting my email & soon I encountered a parameter length=4, which clearly shows that the otp length will be 4 in your email's inbox. I just changed the length=4 to 8,5,9,12 & I saw those lengths of otp being recieved in my inbox. They offered me 100$ bounty for this bug.",
    },
    abstract:
      "I gave them this report with the request I made with 8 lengths of otp in it.",
    absbox: "absPopup5",
  },

  {
    title: "Target : www.talent.com",
    authors: "Bug : Quickbooks Misconfiguration",
    conferences:
      "This bug had only impact & that was the leakage of some financial accounts.",
    researchYr: 2022,
    citebox: "popup6",
    image: "assets/images/research-page/6.jpeg",
    citation: {
      vancouver:
        "I came across a great & free VPS with 16gb ram which was made for developers but it had terminal in it. I installed few tools in it for fuzzing & recon like gobuster. I ran gobuster with a seclist wordlist & left my phone on charging, after a while like 2 hours I opened a file containing outputs of fuzzing which I used for gobuster. Fortunately, I came across with a page which had some leaks of financial accounts in it. I reported this & after a few days they offered me 300$ for this bug.",
    },
    abstract:
      "I gave them this report with the URL which was containing leaks in it.",
    absbox: "absPopup6",
  },
  
  {
    title: "Target : www.talent.com",
    authors: "Bug : Two Reflected XSS",
    conferences:
      "This is a common bug which fetch & execute any payload from the target's database.",
    researchYr: 2022,
    citebox: "popup7",
    image: "assets/images/research-page/7.jpeg",
    citation: {
      vancouver:
        "While I was testing their website I encountered a signup & login page where I started exploring every functionality & luckily within 5 to 8 minutes of testing I found 2 Reflected XSS, As this was their new standards for client side XSS they gave me 250$ for each reflected XSS which made 500$ total. Other thing as you can see in the screenshot is one reflected XSS report was duplicate by them.",
    },
    abstract:
      "I submitted these 2 reflected XSS report with captured request in it.",
    absbox: "absPopup7",
  },

  {
    title: "Target : www.talent.com",
    authors: "Bug : Site Leaking Crucial Data",
    conferences:
      "This bug was leaking some data regarding the server.",
    researchYr: 2022,
    citebox: "popup8",
    image: "assets/images/research-page/8.jpg",
    citation: {
      vancouver:
        "This bug I found with the help of gobuster & free VPS of 16 gb ram. I found some things which shouldn't be disclosed for normal users, example : SERVER_ADDRESS , SERVER_ADMIN , WEBSITE_HOSTED_PATH & more. After reporting this issue they offered me 400$ for this.",
    },
    abstract:
      "I gave them this report with URL which was leaking this data to the normal visitors.",
    absbox: "absPopup8",
  },
  
];
AOS.init();
const fillData = () => {
  let output = "";
  research.forEach(
    ({
      image,
      title,
      authors,
      conferences,
      researchYr,
      citebox,
      citation,
      absbox,
      abstract,
    }) =>
      (output += `
            <tr data-aos="zoom-in-left"> 
                <td class="imgCol"><img src="${image}" class="rImg"></td>
                <td class = "researchTitleName">
                    <div class="img-div">
                        <span class="imgResponsive">
                            <img src="${image}" class="imgRes">
                        </span>
                    </div>
                    <a href="#0" class="paperTitle"> ${title} </a> 
                    <div class = "authors"> ${authors} </div> 
                    
                    <div class="rConferences"> ${conferences} 
                        <div class="researchY">${researchYr}</div>
                    </div>
                    
                    <!--CITE BUTTON-->
                    <div class="d-flex" style="margin-right:5%;">
                        <button class="button button-accent button-small text-right button-abstract " type="button" data-toggle="collapse" data-target="#${absbox}" aria-expanded="false" aria-controls="${absbox}">
                            VIEW
                        </button>
                
                        <button class="button button-accent button-small text-right button-abstract " type="button" data-toggle="collapse" data-target="#${citebox}" aria-expanded="false" aria-controls="${citebox}">
                            Bounty
                        </button>
                    </div>
                    <div id="${absbox}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
                        <div class="card-body">
                            ${abstract}    
                        </div>
                    </div>
                    <div id="${citebox}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
                        <div class="card-body">
                            ${citation.vancouver}    
                        </div>
                    </div>
                </td>
            </tr>`)
  );
  researchTable.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", fillData);
