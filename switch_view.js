document.addEventListener("DOMContentLoaded", function () {
  //Use navlink to toggle between views
  document
    .querySelector("#faqs")
    .addEventListener("click", () => load_page("faqs"));
  document
    .querySelector("#history")
    .addEventListener("click", () => load_page("history"));
  document
    .querySelector("#home")
    .addEventListener("click", () => load_page("home"));
  document
    .querySelector("#events")
    .addEventListener("click", () => load_page("events"));
  document
    .querySelector("#location")
    .addEventListener("click", () => load_page("location"));
  document
    .querySelector("#contact")
    .addEventListener("click", () => load_page("contact"));

  // Load main
  // load_page('main');
});

function load_page(page) {
  // if home page, load html
  if (page == "home") {
    window.location = "index.html";
  }

  if (page == "contact") {
    document.querySelector("#other").style.display = "block";
    document.querySelector("#main").style.display = "none";

    const display = document.querySelector("#other");
    display.innerHTML = ` 
    <div class="container pb-4">
    <h1 class="text-center display-6 mb-3 fw-semibold lh-small" id="contact">Contact Us</h1>
    <div class="container">
      <p class="text-center">If you are interested in joining or watching the class, please let us know which dojo location and fill out this form!</p>
    </div>
    <div class="container">
        <form target="_blank" action="https://formsubmit.co/2d13ee5b4ce63284cf2979c6ce5e3352" method="POST">
        <div class="form-group">
          <div class="row">
            <div class="col">
              <input type="text" name="name" class="form-control" placeholder="Full Name" required>
            </div>
            <div class="col">
              <input type="email" name="email" class="form-control" placeholder="Email Address" required>
            </div>
          </div>
        </div>
        <div class="form-group">
          <br>
          <textarea placeholder="Your Message" class="form-control" name="message" rows="5" required></textarea>
          <br>
        </div>
        <div class="d-grid gap-2">
        <button type="submit" class="btn btn-dark btn-primary">Submit Form</button>
      </div>
      <input type="hidden" name="_cc" value="bostoniaido@gmail.com">
      <input type="hidden" name="_subject" value="Boston Iaido Interest!">
      </form>
    </div>
  </div>
    `;
  }

  if (page == "history") {
    document.querySelector("#other").style.display = "block";
    document.querySelector("#main").style.display = "none";

    const display = document.querySelector("#other");
    display.innerHTML = `
    <div class="container mt-4 pb-4">
      <div class="container">
          <h1 class="text-center mb-3">History of Eishin-Ryu</h1>
          <p class="">According to the Original Manuscript for the Art of Muso Jikiden Eishin-ryu Iaido from Muso Jikiden Eishin-ryu, 
          meaning "Peerless, Direct Transmission, True-Faith Style", is the most widely practiced style of Iaido in Japan. With a lineage of about 450 years, 
          Eishin-Ryu is the second oldest martial art form in Japan.
          </p>

          <p class="">The founder of Eishin-ryu was Hayashizaki Jinsuke Minamoto Shigenobu, who is also credited as the father of Shimmei Muso-ryu ("Divinely Inspired, Unparalleled Style"). 
          As the style has been passed down from teacher to student through the present day, Hayashizaki's iaido has taken on other names. 
          It is considered the foundation for the two major styles of iaido practiced today: Eishin-ryu and Muso Shinden ryu.
          </p>

          <p class="">Eishin-Ryu claims an unbroken line of transmission from Hayashizaki Jinsuke through twenty-two generations to the present day successor, Ikeda Takashi soke. 
          The name of Eishin-ryu is inspired by the seventh generation successor of the art, Hasegawa Chikaranosuke Eishin.
          </p>

          <p class="">Today, Eishin-ryu is practiced by two to three thousand people in Japan, with many more dojos rapidly appearing all over the world. The administration of the system is primarily handled by the Eishin-ryu Traditions Association, led by the soke (the headmaster), 
          and by the All Japan Iaido Federation or Zen Nippon Iaido Renmei (ZNIR) (Japanese: 全日本居合道連盟), which oversees competitions and promotions in different iaido styles. However, since the 21st soke, the the lineage of Eishin-ryu has been contested which led to the creation of many organizations. 
          As a result, people consider soke generally depends on the organization they belong to.
          </p>
      </div>

      <div class="container">
        <h1 class="text-center display-6 mb-3 fw-semibold lh-small">World MJER Iaido Federation</h1>
        <h2 class="text-center mb-3">Founder Esaka Seigen</h2>
        <p class="">Esaka Hiroshi Seigen-Sensei founded the World MJER Iaido Federation (Japanese: 一般社団法人  正統正流無雙直傳英信流居合道国際連盟, lit. Seito Seiryu Muso Jikiden Eishin Ryu Iaido Kokusai Renmei) in April 2010 after leaving his post as co-founder at the All Japan Iaido Federation. 
        Esaka-Sensei is a direct student of Kono Minoru Hyakuren, the 20th soke, and the 21st Soke, Fukui Tarao. Esaka-sensei teaches at his dojos in Shibuya (Tokyo) and Kita-Matsudo(Northeast of Tokyo). 
        He holds a 10th dan and regulary instructs iaido practictioners of all levels in Japan, North America, and Europe. Esaka-sensei passed away in 2023.
        </p>
        <h2 class="text-center mb-3">Chairman Kobara Kenichi</h2>
        <p class="">Kobara Kenichi-Sensei is a student of Esaka-Sensei since 1972 who also co-founded the World MJER Iaido Federation. Kobara-Sensei acts a direct assistant to Esaka-sensei and was appointed as a federation official instructor.
        He has earned his 8th dan (Hanshi) in 2011. As of May 2021, Esaka-Sensei designated Kobara-Sensei as the new Representative Director of the federation. Kobara-sensei's dojo in Kisarazu, Chiba became the new headquaters.
        </p>
      <div>
      <br>
      <div class="container">
        <h1 class="text-center display-6 mb-3 fw-semibold lh-small">Waza or Techniques of MJER</h1>
        <h4 class="text-center mb-3 fw-semibold ">Battou Hou - Kihon/Basics (Omori Ryu)</h4>
        <ol type ="1">
          <li>Juntou</li>
          <li>Juntou Sono Ichi</li>
          <li>Juntou Sono Ni</li>
          <li>Tsuigekitou</li>
          <li>Shatou</li>
          <li>Shihoutou Sono Ichi</li>
          <li>Shihoutou Sono Ni</li>
          <li>Zantsotsutou</li>
        </ol>
        <h4 class="text-center mb-3 fw-semibold ">Seiza no Bu - Shoden/Beginner (Omori Ryu)</h4>
        <ol type ="1">
          <li>Mae</li>
          <li>Migi</li>
          <li>Hidari</li>
          <li>Ushiro</li>
          <li>Yaegaki</li>
          <li>Ukenagashi</li>
          <li>Kaishaku</li>
          <li>Tsukekomi</li>
          <li>Tsukikage</li>
          <li>Oikaze</li>
          <li>Nukiuchi</li>
        </ol>
        <h4 class="text-center mb-3 fw-semibold ">Oku no Kata</h4>
        <ol type ="1">
          <li>Zenteki Gyakutou</li>
          <li>Tatekito</li>
          <li>Kouteki Gyakutou</li>
          <li>Kouteki Nukiuchi</li>
        </ol>
        <h4 class="text-center mb-3 fw-semibold ">Tatehiza no Bu - Chuden/Intermediate (Eishin Ryu)</h4>
        <ol type="1">
          <li>Yokogumo</li>
          <li>Toraissoku</li>
          <li>Inazuma</li>
          <li>Ukigumo</li>
          <li>Oroshi</li>
          <li>Iwanami</li>
          <li>Urokogaeshi</li>
          <li>Namigaeshi</li>
          <li>Takiotoshi</li>
          <li>Makkou</li>
        </ol>
        <h4 class="text-center mb-3 fw-semibold ">Okuiai Iwaza no Bu - Okuden (Inner transmission)</h4>
        <ol type="1">
          <li>Kasumi</li>
          <li>Sunegakoi</li>
          <li>Tozome</li>
          <li>Towaki</li>
          <li>Shihougiri</li>
          <li>Tanashita</li>
          <li>Ryouzume</li>
          <li>Torabashiri</li>
        </ol>
        <h4 class="text-center mb-3 fw-semibold ">Okuiai Tachiwaza no Bu - Okuden (Inner transmission)</h4>
        <ol type="1">
          <li>Yukizure</li>
          <li>Tsuredachi</li>
          <li>Sou Makuri</li>
          <li>Sou Dome</li>
          <li>Shinobu</li>
          <li>Yukichigai</li>
          <li>Sode Surigaeshi</li>
          <li>Moniri</li>
          <li>Kabezoe</li>
          <li>Ukenagashi</li>
          <li>Itomagoi Sono Ichi</li>
          <li>Itomagoi Sono Ni</li>
          <li>Itomagoi Sono San</li>
        </ol>
      </div>

      <p>More information can be found on the official <a href="mjer-iaido.github.io">World MJER Iaido Federation</a> site</p>
    </div>
    `;
  }

  if (page == "faqs") {
    document.querySelector("#other").style.display = "block";
    document.querySelector("#main").style.display = "none";

    const display = document.querySelector("#other");
    display.innerHTML = `<p class="h1 text-center display-5 mb-3 fw-semibold lh-small">Coming Soon!</p>`
//     display.innerHTML = `
//     <div class="container">
//       <div class="accordion" id="accordionExample">
//     <div class="accordion-item">
//       <h2 class="accordion-header" id="headingOne">
//         <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
//           I want to check out a class! How do I start?
//         </button>
//       </h2>
//       <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
//         <div class="accordion-body">
//         <p><strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow. </p>
//         <strong>I never done martial arts before. What do I need to prepare myself?</strong>
//         <p class="lh-base"> Text Here </p>
//         <strong>I have a martial arts background. Is it transferable?</strong>
//         <p class="lh-base"> Text Here </p>
//         <strong>I did kendo and would like to do Iaido. Is it difficult to transition over?</strong>
//         <p class="lh-base"> Text Here </p>
//         <strong>I have an injury. Can I still do Iaido?</strong>
//         <p class="lh-base"> Text Here </p>
//         <strong>How much does it all cost?</strong>
//         <p class="lh-base"> Text Here </p>
//         <strong>What federation are we a part of?</strong>
//         <p class="lh-base"> Text Here </p>
//         </div>
//       </div>
//     </div>
//     <div class="accordion-item">
//       <h2 class="accordion-header" id="headingTwo">
//         <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
//           Been practicing with us for a while?
//         </button>
//       </h2>
//       <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
//         <div class="accordion-body">
//           <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
//         </div>
//       </div>
//     </div>
//     <div class="accordion-item">
//       <h2 class="accordion-header" id="headingThree">
//         <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
//           Waza(Techniques) of MJER
//         </button>
//       </h2>
//       <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
//         <div class="accordion-body">
//           <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
//         </div>
//       </div>
//     </div>
//   </div>
// </div>

    // `
    // // display.innerHTML = `
    //   <div class="container">
    //   <p class="h1 text-center display-5 mb-3 fw-semibold lh-small">Frequently Asked Questions</p>
    //   <p class="h4 mb-3 fw-semibold lh-small">I want to check out a class. How do I start?</p>
    //   <p class="lh-base"> Text Here </p>
    //   <p class="h4 mb-3 fw-semibold lh-small">I never done martial arts before. What do I need to prepare myself?</p>
    //   <p class="lh-base"> Text Here </p>
    //   <p class="h4 mb-3 fw-semibold lh-small">I have a martial arts background. Is it transferable?</p>
    //   <p class="lh-base"> Text Here </p>
    //   <p class="h4 mb-3 fw-semibold lh-small">I did kendo and would like to do iaido. Is it difficult to transition over?</p>
    //   <p class="lh-base"> Text Here </p>
    //   <p class="h4 mb-3 fw-semibold lh-small">I have an injury. Can I still do iaido?</p>
    //   <p class="lh-base"> Text Here </p>
    //   <p class="h4 mb-3 fw-semibold lh-small">How much does it all cost?</p>
    //   <p class="lh-base"> Text Here </p>
    //   <p class="h4 mb-3 fw-semibold lh-small">What federation are we a part of?</p>
    //   <p class="lh-base"> Text Here </p>
    //   </div>
    //   <div class="container">
    //   <p class="h1 mb-3 fw-semibold lh-small">Been practicing for a while?</p>
    //   <p class="h4 mb-3 fw-semibold lh-small">How do I buy a uniform?</p>
    //   <p class="lh-base"> Text Here </p>
    //   <p class="h4 mb-3 fw-semibold lh-small">How do I get an iaito?</p>
    //   <p class="lh-base"> Text Here </p>
    //   <p class="h4 mb-3 fw-semibold lh-small">What about kneepads?</p>
    //   <p class="lh-base"> Text Here </p>
    //   <p class="h4 mb-3 fw-semibold lh-small">Are there any supplemental reading I can do?</p>
    //   <p class="lh-base"> Esaka Sensei's book </p>
    //   </div>
    //   <div class="container">
    //   <p class="h2 mb-3 fw-semibold lh-small">Waza List here</p>
    //   <p class="lh-base"> Text Here </p>
    //   <p class="lh-base"> Text Here </p>
    //   <p class="lh-base"> Text Here </p>
    //   </div>
    //   <div class="container">
    //   <h1 class="display-6 mb-3 fw-semibold lh-small">More on MJER Research</h1>
    //     <p>- wikipedia
    //     - mjer world site</p>
    //   </div>
    //     `;
  }

  if (page == "events") {
    document.querySelector("#other").style.display = "block";
    document.querySelector("#main").style.display = "none";

    const display = document.querySelector("#other");
    display.innerHTML = `
        <div class="container">
        <h1 class="display-6 mb-3 fw-semibold lh-small">The 9th Taikai - International Kokusa Renmei Seminar</h1>
        <p class="">Date: November 18th (Saturday), 2023<br>
        Location: Tokyo Budo-Kan<br>
        日本、〒120-0005 東京都足立区綾瀬３丁目２０−１<br>
        Seminar Details: <a href="https://mjer-iaido.github.io/en/post/information-about-the9th-taikai/">Information</a></p>
        </div>

        <div class="container">
        <h1 class="display-6 mb-3 fw-semibold lh-small">Boston Iaido's 20th Anniversary </h1>
        <p class="">Save the date!: Oct 22nd (Sunday), 2023<br>
        Location: Cambridge War Memorial Recreation Center<br>
        1640 Cambridge St., Cambridge, MA 02138, USA<br>
        Honored Guests: Alejandro Mirles and Felita Go - <a href="https://www.byakkoiba.com">Byakko Dojo</a>, 
        Sensei Barry Poitras - <a href="https://www.doshikai.org/">Doshikai Dojo</a>,
        Sensei Brian Durnham - <a href="https://sanshinkai.org/">San Shin Kai, Concord, NH</a>,
        Sensei Mike Caruso - <a href="https://shutokukan.org/contact-berkshire-dojo/">Shinbu Dojo, Templeton, MA</a></p>
        </div>

        <div class="container">
        <h1 class="display-6 mb-3 fw-semibold lh-small">2023 Alameda - International Kokusai Renmei Seminar</h1>
        <p class="">Dates: June 16th (Friday), June 17th (Saturday), June 18th (Sunday), 2023<br>
        Location: Patton (Old) Gym at Alameda High School<br>
        2267 Alameda Ave, Alameda, CA 94501, USA<br>
        Instructors: Mochizai Shuichi Sensei (Hanshi 8th dan)<br> 
        Seminar Details: <a href="https://genwakan.github.io/seminar">Genwaken Seminar</a></p>
        </div>

        <div class="container">
        <h1 class="display-6 mb-3 fw-semibold lh-small">Iaido Demonstration</h1>
        <p class="">Date: Feb 6, 2023<br>
        Location: St. James Men's Club <br>
        Watertown, MA </p>
        </div>

        <div class="container">
        <h1 class="display-6 mb-3 fw-semibold lh-small">2018 Boston Iaido - International Kokusai Renmei Seminar</h1>
        <p class="">Dates: June 7th - 10th, 2018<br>
        Location: Cambridge War Memorial Recreation Center<br>
        1640 Cambridge St., Cambridge, MA 02138, USA.<br>
        Instructors: 
        Mochizai Shuichi Sensei (Hachidan 8th Dan), Utsunomiya (Hachidan 8th Dan), Hiro Inoue (Shichidan 7th Dan), Faiquenblat Mikhail (Renshi 6th Dan)
        </div> 

        <div class="container">
        <h1 class="display-6 mb-3 fw-semibold lh-small">2017 Vancouver - International Kokusai Renmei Seminar</h1>
        <p class="">Dates: June 2nd (Friday), 3rd (Saturday), 4th (Sunday), 2017<br>
        Location: UBC Student Recreation Centre Gym<br>
        University of British Colombia<br>
        Vancouver BC, Canada<br>
        Instructors: Denoon Sensei, Gunstone Peter Sensei
        </div>

        <div class="container">
        <h1 class="display-6 mb-3 fw-semibold lh-small">2014 Boston Iaido - International Kokusai Renmei Seminar</h1>
        <p class="">Dates:  August 1st (Friday), 2nd (Saturday), 3rd (Sunday), 2014<br>
        Location: Cambridge War Memorial Recreation Center<br>
        1640 Cambridge St., Cambridge, MA 02138, USA<br>
        Instructor: Nashima Masao Sensei (Hanshi 10th Dan), Kaneda Hisato (8th Hachidan), Hiro Inoue (6th Rokudan)
        </div>

        <div class="container">
        <h1 class="display-6 mb-3 fw-semibold lh-small">2014 Germany - International Kokusai Renmei Seminar</h1>
        <p class="">July 17 – 20 international seminar in Lindow, Germany<br>
        Instructor:
        </div>

        <div class="container">
        <h1 class="display-6 mb-3 fw-semibold lh-small">2013 Vancouver - International Kokusai Renmei Seminar</h1>
        <p class="">Dates: May 24th (Friday), 25th (Saturday), 26th (Sunday), 2013<br>
        Location: UBC Student Recreation Centre Gym<br>
        University of British Colombia<br>
        Vancouver BC, Canada<br>
        Instructors: Esaka Sensei (Hanshi 10th Dan), Kaneda Sensei (8th Dan), Masumura Sensei (7th Dan)
        </div>

        <div class="container">
        <h1 class="display-6 mb-3 fw-semibold lh-small">Boston Iaido Seminar with Hiro Inoue Sensei and Wout Verschueren Sensei</h1>
        <p class="">September 25-27, Boston, Massachusetts<br>
        Instructor: Hiro Inoue Sensei, Wout Verschueren Sensei
        </div>

        <div class="container">
        <h1 class="display-6 mb-3 fw-semibold lh-small">2010 Iaido Seminar with Esaka Sensei</h1>
        <p class="">November 5–7, Melsbroek, Belgium<br>
        Instructor: Esaka Sensei (10th Dan Hanshi)
        </div>

        <div class="container">
        <h1 class="display-6 mb-3 fw-semibold lh-small">2009 Iaido Seminar with Esaka Sensei</h1>
        <p class="">November 26-29, Regensburg (Germany, Bavaria)<br>
        Instructor: Esaka Sensei (10th Dan Hanshi)
        </div>

        `;
  }

  if (page == "location") {
    document.querySelector("#other").style.display = "block";
    document.querySelector("#main").style.display = "none";

    const display = document.querySelector("#other")

    display.innerHTML = `
    <div class="container">
    <h1 class="text-center display-6 mb-3 fw-semibold lh-small" id="location">Where And When</h1>
    <div class="row justify-content-center">
      <div class="row">
        <div class="col">
          <p>Cambridge Location:<br>
            <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d256.7889750049269!2d-71.10979141170108!3d42.374632506101364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e37716f3ce0889%3A0x60896f2ae8ddbfac!2sBoston%20Iaido!5e0!3m2!1sen!2sus!4v1673154929993!5m2!1sen!2sus"
              width="250" height="250" style="border:0;" allowfullscreen="" loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"></iframe><br>
          </div>
              Cambridge War Memorial Recreation Center<br>
              1640 Cambridge Street<br>
              Cambridge, MA 02138</p>
            </div>
            <div class="col">
              <p>Cambridge Schedule:<br>
                Monday: 7:15 PM to 9:15 PM<br>
                Thursday: 7:15 PM to 9:15 PM</p>
            </div>
            <div class="col">
              <p>Tuition:<br>
              $70 a month</p>
            </div>
          </div>
          <div class="row">
            <div class="col">
              <p>Salisbury Location:<br>
              <div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13920.199470146217!2d-70.8820164694001!3d42.8229779722617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e2e1fc17c8e2f3%3A0xda9ff8179cc2cdf3!2sInternal%20Arts%20New%20England!5e0!3m2!1sen!2sus!4v1701328123618!5m2!1sen!2sus" width="250" height="250" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe><br>
              </div>
                  Internal Arts New England<br>
                  102 Bridge Road<br>
                  Salisbury, MA 01952</p>
                </div>
                <div class="col">
                  <p>Salisbury Schedule:<br>
                    Tuesday: 7:45 PM to 9:45 PM<br></p>
                </div>
                <div class="col">
                <p>Tuition:<br>
                $70 a month with the ability to go the Cambridge dojo in case of Salisbury dojo closure.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-5 mb-3" id="spacer"></div>
  <div class="container pb-4">
    <h1 class="text-center display-6 mb-3 fw-semibold lh-small" id="contact">Contact Us</h1>
    <div class="container">
      <p class="text-center">Still have more questions? If you are interested in joining or watching the class, please let us know which dojo location and fill out this form!</p>
    </div>
    <div class="container">
        <form target="_blank" action="https://formsubmit.co/2d13ee5b4ce63284cf2979c6ce5e3352" method="POST">
        <div class="form-group">
          <div class="row">
            <div class="col">
              <input type="text" name="name" class="form-control" placeholder="Full Name" required>
            </div>
            <div class="col">
              <input type="email" name="email" class="form-control" placeholder="Email Address" required>
            </div>
          </div>
        </div>
        <div class="form-group">
          <br>
          <textarea placeholder="Your Message" class="form-control" name="message" rows="5" required></textarea>
          <br>
        </div>
        <div class="d-grid gap-2">
        <button type="submit" class="btn btn-dark btn-primary">Submit Form</button>
      </div>
      <input type="hidden" name="_cc" value="bostoniaido@gmail.com">
      <input type="hidden" name="_subject" value="Boston Iaido Interest!">
      </form>
    </div>
  </div>
</div>
      `
  }
}
