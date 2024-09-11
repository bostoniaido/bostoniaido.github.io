document.addEventListener("DOMContentLoaded", function () {
  //Use navlink to toggle between views
  document
    .querySelector("#faqs")
    .addEventListener("click", () => load_page("faqs"));
  document
    .querySelector("#history")
    .addEventListener("click", () => load_page("history"));
  document
    .querySelector("#instructors")
    .addEventListener("click", () => load_page("instructors"));
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
  // Track the view switch event with Google Analytics
  gtag('event', 'page_switch', {
      'event_category': 'View',
      'event_label': page
  });

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
          Eishin-Ryu is one of the oldest martial art forms in Japan.
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
          As a result, who people consider soke generally depends on the organization they belong to.
          </p>
      </div>

      <div class="container">
        <h1 class="text-center display-6 mb-3 fw-semibold lh-small">World MJER Iaido Federation</h1>
        <h2 class="text-center mb-3">Founder Esaka Seigen</h2>
        <p class="">Esaka Hiroshi Seigen-Sensei founded the World MJER Iaido Federation (Japanese: 一般社団法人  正統正流無雙直傳英信流居合道国際連盟, lit. Seito Seiryu Muso Jikiden Eishin Ryu Iaido Kokusai Renmei) in April 2010 after leaving his post as co-founder at the All Japan Iaido Federation. 
        Esaka-Sensei was a direct student of Kono Minoru Hyakuren, the 20th soke, and the 21st Soke, Fukui Tarao. Esaka-sensei taught at his dojos in Shibuya (Tokyo) and Kita-Matsudo(Northeast of Tokyo). 
        He held a 10th dan and regulary instructed iaido practictioners of all levels in Japan, North America, and Europe. Esaka-sensei passed away in 2023.
        </p>
        <h2 class="text-center mb-3">Chairman Kobara Kenichi</h2>
        <p class="">Kobara Kenichi-Sensei was a student of Esaka-Sensei since 1972 who also co-founded the World MJER Iaido Federation. Kobara-Sensei acts a direct assistant to Esaka-sensei and was appointed as a federation official instructor.
        He earned his 8th dan (Hanshi) in 2011. As of May 2021, Esaka-Sensei designated Kobara-Sensei as the new Representative Director of the federation. Kobara-sensei's dojo in Kisarazu, Chiba became the new headquaters.
        </p>
      <div>
      <br>
      <div class="container">
      <h1 class="text-center display-6 mb-3 fw-semibold lh-small">Waza or Techniques of MJER</h1>
      <h4 class="text-center mb-3 fw-semibold ">Battou Hou - Kihon/Basics (Omori Ryu)</h4>
      <div class="container">
        <div class="row">
            <div class="col">
            </div>
            <div class="col">
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
            </div>
            <div class="col">
            </div>
        </div>
      </div>
      <h4 class="text-center mb-3 fw-semibold ">Seiza no Bu - Shoden/Beginner (Omori Ryu)</h4>
      <div class="container">
        <div class="row">
            <div class="col">
            </div>
            <div class="col">
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
            </div>
            <div class="col">
            </div>
        </div>
      </div>
      <h4 class="text-center mb-3 fw-semibold ">Oku no Kata</h4>
      <div class="container">
        <div class="row">
            <div class="col">
            </div>
            <div class="col">
            <ol type ="1">
              <li>Zenteki Gyakutou</li>
              <li>Tatekito</li>
              <li>Kouteki Gyakutou</li>
              <li>Kouteki Nukiuchi</li>
            </ol>
            </div>
            <div class="col">
            </div>
        </div>
      </div>
      <h4 class="text-center mb-3 fw-semibold ">Tatehiza no Bu - Chuden/Intermediate (Eishin Ryu)</h4>
      <div class="container">
        <div class="row">
            <div class="col">
            </div>
            <div class="col">
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
            </div>
            <div class="col">
            </div>
        </div>
      </div>
      <h4 class="text-center mb-3 fw-semibold ">Okuiai Iwaza no Bu - Okuden (Inner transmission)</h4>
      <div class="container">
        <div class="row">
            <div class="col">
            </div>
            <div class="col">
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
            </div>
            <div class="col">
            </div>
        </div>
      </div>
      <h4 class="text-center mb-3 fw-semibold ">Okuiai Tachiwaza no Bu - Okuden (Inner transmission)</h4>
      <div class="container">
      <div class="row">
          <div class="col">
          </div>
          <div class="col">
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
        <div class="col">
        </div>
    </div>
    <h4 class="text-center mb-3 fw-semibold ">Tachi Uchi no Kurai</h4>
      <div class="container">
      <div class="row">
          <div class="col">
          </div>
          <div class="col">
          <ol type="1">
            <li>Deai</li>
            <li>Kobushitori</li>
            <li>Zetsumyoken</li>
            <li>Dokumyoken</li>
            <li>Tsubadome</li>
            <li>Ukenagashi</li>
            <li>Mappo</li>
          </ol>
        </div>
        <div class="col">
        </div>
      </div>
    </div>
    <h4 class="text-center mb-3 fw-semibold ">Bangai no Bu</h4>
      <div class="container">
      <div class="row">
        <div class="col">
        </div>
        <div class="col">
        <ol type="1">
        </ol>
      </div>
      <div class="col">
      </div>
    </div>
  </div>
    <p style="text-align:center">More information can be found on the official <a href="https://mjer-iaido.github.io">World MJER Iaido Federation</a> site</p>
  </div>
      </div>
    </div>
  </div>
</div>
</div>
    `;
  }

  if (page == "instructors") {
    document.querySelector("#other").style.display = "block";
    document.querySelector("#main").style.display = "none";

    const display = document.querySelector("#other");
    display.innerHTML = `
    <div class="container mt-4 pb-4">
      <div class="container">
          <h1 class="text-center mb-3">Instructors</h1>
          <div class="row">
            <div class="col" style="text-align:center"><img src="img/sensei.jpg" alt="Sensei Cuong" width="200" height="300"><p> Sensei Cuong Nguyen, 7th Dan, Renshi</p></div>
          </div>
          <div class="row">
            <div class="col" style="text-align:center"><img src="img/tien.jpg" alt="Tien" width="200" height="300"><p> Tien Dao, 5th Dan</p></div>
            <div class="col" style="text-align:center"><img src="img/vlad.jpg" alt="Vlad" width="200" height="300"><p> Vladimir Grinev, 3rd Dan</p></div>
            <div class="col" style="text-align:center"><img src="img/chad.jpg" alt="Chad" width="200" height="300"><p> Chad Taylor, 4th Dan</p></div>
          <div>
          <div class="row">
            <div class="col" style="text-align:center"><img src="img/greg.jpg" alt="Greg" width="200" height="300"><p> Greg Lynch, 4th Dan</p></div>
            <div class="col" style="text-align:center"><img src="img/justin.jpg" alt="Justin" width="200" height="300"><p> Justin Kosuk, 4th Dan</p></div>
            <div class="col" style="text-align:center"><img src="img/luigi.jpg" alt="Luigi" width="200" height="300"><p> Luigi Guatieri, 3rd Dan</p></div>
          </div
      </div>
    </div>
          `;
  }

  if (page == "faqs") {
    document.querySelector("#other").style.display = "block";
    document.querySelector("#main").style.display = "none";

    const display = document.querySelector("#other");
    // display.innerHTML = `<p class="h1 text-center display-5 mb-3 fw-semibold lh-small">Coming Soon!</p>`
    display.innerHTML = `
    <div class="container">
      <div class="accordion" id="accordionExample">
    <div class="accordion-item">
      <h2 class="accordion-header" id="headingOne">
        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
          I want to check out a class! How do I start?
        </button>
      </h2>
      <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
        <div class="accordion-body">
        <p>Great! For the Cambridge branch, attend any Monday or Thursday evening class at 7:15pm at the War Memorial Recreation Center with loose clothing such as a t-shirt and sweatpants. Please make it before 7:20pm as the front desk won't allow anyone past that time. </p>
        <p>For the Salisbury branch, please let us know through the contact form so the instructor can prepare for your arrival. </p>
        <strong>How old do I need to be able to practice Iaido?</strong>
        <p class="lh-base"> Minimum age is 16. If you are younger, please feel free to come watch a class and speak with Sensei. </p>
        <strong>I never done martial arts before. What do I need to prepare myself?</strong>
        <p class="lh-base"> Nothing! Just loose clothing and show up. </p>
        <strong>I have a martial arts background. Is it transferable?</strong>
        <p class="lh-base"> Many of our students have various martial arts background that were able to transfer some skills. Since it is a swordsmanship, not many of us has a weapons background. Discipline and eagerness to learn are most definitely transferable! </p>
        <strong>I did Kendo and would like to do Iaido. Is it difficult to transition over?</strong>
        <p class="lh-base"> Depends on your training. You will quickly learn that Kendo and Iaido are two sides of the same coin. </p>
        <strong>I have an injury. Can I still do Iaido?</strong>
        <p class="lh-base"> Depending on the injury, we can work with you on other techniques to ensure safety and won't exacerbate injuries. </p>
        <strong>How much does it all cost?</strong>
        <p class="lh-base"> Tuition is $70 a month. Most online shops sell uniforms starting around $100. The practice sword (iaito) can start around $300. Typically, we do not make students get the uniform or iaito as soon as they start. Measurement assistance and permission to move on from a wooden sword to a practice sword will given by Sensei. Wooden swords are loaned out during class.</p> <p> If money is a barrier, please speak to Sensei or a senior student to see if we can work it out </p>
        <strong>What federation are we a part of?</strong>
        <p class="lh-base"> We are part of the World MJER Iaido Federation (一般社団法人　 正統正流無雙直傳英信流居合道国際連盟) (Ippan Shadan Hojin Seito Seiryu Muso Jikiden Eishin Ryu Iaido Kokusai Renmei) under Chairman Kenichi Kobara-Sensei. </p>
        </div>
      </div>
    </div>
    <div class="accordion-item">
      <h2 class="accordion-header" id="headingTwo">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
          I've decided to join the dojo, what do I need?!
        </button>
      </h2>
      <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
        <div class="accordion-body">
        <p>Wonderful!  Here's a short list of vendors and equipment we can recommend: </p>

          <strong>Reputable Vendors</strong>
          <p><a href="https://tozandoshop.com">Tozando</a></p>
          <p><a href="https://seidoshop.com">Seido Shop</a></p>
          <p><a href="https://e-bogu.com">E-bogu</a></p>
          <p><a href="https://budo-aoi.com">Aoi Budogu</a></p>

          <strong>Iaido Uniform</strong>
          <p class="lh-base">As far as iaido practice clothing, you'll need a gi, hakama, obi, and knee pads.  Some students wear a juban (undershirt) as well.  Here are a few links to get you started:</p>
          <p>Gi, Juban (undershirt), Hakama, Obi package (recommend adding a kaku-obi for an additional $22)
          <p><a href="https://tozandoshop.com/collections/iaido-uniform-sets/products/basic-tetron-iaido-uniform-set">Basic Tetron Iaido Uniform Set</a></p>
          
          <p>Gi & Hakama set
          <p><a href="https://www.e-bogu.com/Iaido-Gi-BLACK-Tetron-Hakama-Set-p/ebo-com-iai-giset.htm">Iaido Gi Black Tetron Hakama Set</a></p>
          
          <strong>Bokuto - Wooden Sword</strong>
          <p class="lh-base"> For your sword, it is recommended that beginners start with a bokuto (wooden sword) and saya (sheath):
          <p><a href="https://www.e-bogu.com/product-p/ebg-com-iai-boksaya-set-w.htm">E-Bogu Bokuto and Saya Set</a></p>
          
          <p><a href="https://tozandoshop.com/collections/iaido-bokuto/products/the-nyumon-iaido-beginners-set">Tozando Nyumon Iaido Beginner Set</a></p>
          
          <strong>Iaito - Practice Sword</strong>

          <p class="lh-base">When you're ready to purchase an iaito, please confer with Sensei or a senior student before purchasing:</p>

          <p><a href="https://tozandoshop.com/collections/iaito">Tozando Iaito Collection</a></p>
          
          <p><a href="https://www.seidoshop.com/collections/minosaka-iaito">Seido Shop Minosaka Iaito</a></p>
        </div>
      </div>
    </div>
    <div class="accordion-item">
      <h2 class="accordion-header" id="headingThree">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
          Been practicing with us for a while?
        </button>
      </h2>
      <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
        <div class="accordion-body">
          <strong>Terminology, Definitions, Ranks and Titles</strong>
          <p><a href="https://www.bostoniaido.com/iaido_terminology.pdf" target="_blank" rel="noopener noreferrer">Download here</a></p>
          <strong>Etiquette</strong>
          <p class="lh-base"> Coming Soon! </p>
          <strong>Code of Conduct</strong>
          <p class="lh-base"> Coming Soon! </p>
          <strong>Are there any supplemental reading I can do?</strong>
          <p class="lh-base"> Coming soon! </p>
        </div>
      </div>
    </div>
    <div class="accordion-item">
      <h2 class="accordion-header" id="headingFour">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
          Waza(Techniques) of MJER
        </button>
      </h2>
      <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
        <div class="accordion-body">
        <div class="container">
        <h1 class="text-center display-6 mb-3 fw-semibold lh-small">Waza or Techniques of MJER</h1>
        <h4 class="text-center mb-3 fw-semibold ">Battou Hou - Kihon/Basics (Omori Ryu)</h4>
        <div class="container">
          <div class="row">
              <div class="col">
              </div>
              <div class="col">
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
              </div>
              <div class="col">
              </div>
          </div>
        </div>
        <h4 class="text-center mb-3 fw-semibold ">Seiza no Bu - Shoden/Beginner (Omori Ryu)</h4>
        <div class="container">
          <div class="row">
              <div class="col">
              </div>
              <div class="col">
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
              </div>
              <div class="col">
              </div>
          </div>
        </div>
        <h4 class="text-center mb-3 fw-semibold ">Oku no Kata</h4>
        <div class="container">
          <div class="row">
              <div class="col">
              </div>
              <div class="col">
              <ol type ="1">
                <li>Zenteki Gyakutou</li>
                <li>Tatekito</li>
                <li>Kouteki Gyakutou</li>
                <li>Kouteki Nukiuchi</li>
              </ol>
              </div>
              <div class="col">
              </div>
          </div>
        </div>
        <h4 class="text-center mb-3 fw-semibold ">Tatehiza no Bu - Chuden/Intermediate (Eishin Ryu)</h4>
        <div class="container">
          <div class="row">
              <div class="col">
              </div>
              <div class="col">
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
              </div>
              <div class="col">
              </div>
          </div>
        </div>
        <h4 class="text-center mb-3 fw-semibold ">Okuiai Iwaza no Bu - Okuden (Inner transmission)</h4>
        <div class="container">
          <div class="row">
              <div class="col">
              </div>
              <div class="col">
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
              </div>
              <div class="col">
              </div>
          </div>
        </div>
        <h4 class="text-center mb-3 fw-semibold ">Okuiai Tachiwaza no Bu - Okuden (Inner transmission)</h4>
        <div class="container">
        <div class="row">
            <div class="col">
            </div>
            <div class="col">
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
          <div class="col">
          </div>
      </div>
    </div>
      <p style="text-align:center">More information can be found on the official <a href="mjer-iaido.github.io">World MJER Iaido Federation</a> site</p>
    </div>
        </div>
      </div>
    </div>
  </div>
</div>
    `
  }

  if (page == "events") {
    document.querySelector("#other").style.display = "block";
    document.querySelector("#main").style.display = "none";

    const display = document.querySelector("#other");
    display.innerHTML = `
        <div class="container">
        <h1 class="display-6 mb-3 fw-semibold lh-small">2025 Boston - International Kokusai Renmei Seminar</h1>
        <p class="">Dates: September 19 - 21, 2025<br>
        Location: War Memorial Recreation Center, Cambridge, MA 02139 <br>
        Seminar Details: TBD </p>
        </div>

        <div class="container">
        <h1 class="display-6 mb-3 fw-semibold lh-small">The 10th Taikai - International Kokusai Renmei Seminar</h1>
        <p class="">Date: November 16th (Saturday), 2024<br>
        Location: 2 Chome-60-1 Denenchofu, Ota City, Tokyo 145-0071, Japan <br>
        Seminar Details: TBD </p>
        </div>

        <div class="container">
        <h1 class="display-6 mb-3 fw-semibold lh-small">Boston Iaido 21st Anniversary Seminar</h1>
        <p class="">Date: October 20th (Sunday), 2024<br>
        Location: War Memorial Recreation Center, Cambridge, MA 02139 <br>
        Seminar Details: TBD </p>
        </div>

        <div class="container">
        <h1 class="display-6 mb-3 fw-semibold lh-small">Japan Society of Boston Gakusensai</h1>
        <p class="">Date: October 11th (Friday), 2024 at 3:00pm<br>
        Location: The Foundry: Red Room, 101 Rogers St, Cambridge MA 02142 <br>
        Seminar Details: https://www.japansocietyboston.org/events/japan-society-of-boston-gakusensai</p>
        </div>

        <div class="container">
        <h1 class="display-6 mb-3 fw-semibold lh-small">2024 European Kokusai Renmei Seminar</h1>
        <p class="">Date: September 12th - 15th2024<br>
        Location: Sportzentrum, Puschkinstraße 2, 15537 Grünheide (Mark), Kienbaum, Germany <br>
        Instructors: Kobara Kenichi Sensei, DeNoon Yoshihito Daniel Sensei, Matsumoto Hideaki Sensei
        Seminar Details: <a href="https://iaidoverband.org/lehrgaenge/">Seminar Information</a></p>
        </div>

        <div class="container">
        <h1 class="display-6 mb-3 fw-semibold lh-small">2024 Vancouver - International Kokusai Renmei Seminar</h1>
        <p class="">Date: Jun 7th - Jun 9th, 2024<br>
        Location: UBC Student Recreation Centre Main Gym, 6000 Student Union Blvd, Vancouver, BC V6T 1Z1 <br>
        Seminar Details:  <a href="https://www.vancouveriaido.com/registration">Seminar Information</a></p>
        </div> </p>
        </div>

        <div class="container">
        <h1 class="display-6 mb-3 fw-semibold lh-small">Japan Festival Boston</h1>
        <p class="">Date: April 27th - April 28th, 2024<br>
        Location: Boston Common<br>
        16 Charles Street, Boston, MA 02108<br>
        Event Details: <a href="https://www.japanfestivalboston.org/2024-festival">Information</a></p>
        </div>

        <div class="container">
        <h1 class="display-6 mb-3 fw-semibold lh-small">The 9th Taikai - International Kokusai Renmei Seminar</h1>
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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.1756891454265!2d-71.10993557461218!3d42.37471402663452!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e37716f3ce0889%3A0x60896f2ae8ddbfac!2sBoston%20Iaido!5e0!3m2!1sen!2sus!4v1702438187904!5m2!1sen!2sus"
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
      <input type="hidden" name="_webhook" value="https://discord.com/api/webhooks/1283242304747995208/dUBGVXN3QhhXLJlIZ2vJ2YudeJF64PmcvYZzjBkO5ZxJQssbK2ZXnwUkC6Io0iLf94Ro">
      </form>
    </div>
  </div>
</div>
      `
  }
}
