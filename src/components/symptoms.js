import React from "react";



const Work = () => {

  return (
    <div className="symptoms-section-wrapper">
      <div className="content">
        <div className="work-section-top">
          <h2 className="work-heading">Symptoms Checker</h2>
          <br></br>
          <p>There has been a ten-fold increase in dengue cases between the years 2000 and 2019, according to an analysis by the World Health</p>

        </div>
        <article>
  <section class="card">
    <div class="card-text-content">
      <h3>Acute Fever</h3>
      <li>Have you had a sudden high fever (above 102°F or 38°C) for 2-7 days?</li>
      <br></br>

      <div className="radio-group">
      <label htmlFor="radioOption1" className="radio-label">
        <input type="radio" id="radioOption1" name="skinRash" value="option1" className="radio-input" />
        Yes
      </label>
      <label htmlFor="radioOption2" className="radio-label">
        <input type="radio" id="radioOption2" name="skinRash" value="option2" className="radio-input" />
        No
      </label>
    </div>   
    <br></br>
    <li>Does the fever feel like burning or arching behind your eyes?</li>
      <br></br>

      <div className="radio-group">
      <label htmlFor="radioOption1" className="radio-label">
        <input type="radio" id="radioOption1" name="skinRash" value="option1" className="radio-input" />
        Yes
      </label>
      <label htmlFor="radioOption2" className="radio-label">
        <input type="radio" id="radioOption2" name="skinRash" value="option2" className="radio-input" />
        No
      </label>
    </div>   
     </div>
    <div class="visual">
      <img src="https://www.yabibo.com/wp-content/uploads/2015/07/Natural-Remedies-For-Fever-768x510.jpg" alt="" />
    </div>
  </section> 

  <section class="card">
    <div class="card-text-content">
      <h3>Body Aches and Pain</h3>
      <li>Do you experience intense muscle and joint pain, especially in the legs, arms and back?</li>
<br></br>
      <div className="radio-group">
      <label htmlFor="radioOption1" className="radio-label">
        <input type="radio" id="radioOption1" name="skinRash" value="option1" className="radio-input" />
        Yes
      </label>
      <label htmlFor="radioOption2" className="radio-label">
        <input type="radio" id="radioOption2" name="skinRash" value="option2" className="radio-input" />
        No
      </label>
    </div>   
    <br></br>
    <li>Is the pain severe enough to interfere with daily activities?</li>
      <br></br>

      <div className="radio-group">
      <label htmlFor="radioOption1" className="radio-label">
        <input type="radio" id="radioOption1" name="skinRash" value="option1" className="radio-input" />
        Yes
      </label>
      <label htmlFor="radioOption2" className="radio-label">
        <input type="radio" id="radioOption2" name="skinRash" value="option2" className="radio-input" />
        No
      </label>
    </div>   
     </div>
    <div class="visual">
      <img src="https://assets.thehansindia.com/hansindia-bucket/4854_chronic.jpg" alt="" />
    </div>
  </section> 

  <section class="card">
    <div class="card-text-content">
      <h3>Skin Rash</h3>
      <li>Have you developed a red, itchy rash, tht starts on the face and spreadsto the arms and legs?</li>
      <br></br>

      <div className="radio-group">
      <label htmlFor="radioOption1" className="radio-label">
        <input type="radio" id="radioOption1" name="skinRash" value="option1" className="radio-input" />
        Yes
      </label>
      <label htmlFor="radioOption2" className="radio-label">
        <input type="radio" id="radioOption2" name="skinRash" value="option2" className="radio-input" />
        No
      </label>
    </div>   
    <br></br>
    <li>Does the fever feel like burning or arching behind your eyes?</li>
      <br></br>

      <div className="radio-group">
      <label htmlFor="radioOption1" className="radio-label">
        <input type="radio" id="radioOption1" name="skinRash" value="option1" className="radio-input" />
        Yes
      </label>
      <label htmlFor="radioOption2" className="radio-label">
        <input type="radio" id="radioOption2" name="skinRash" value="option2" className="radio-input" />
        No
      </label>
    </div>   
     </div>
    <div class="visual">
      <img src="https://www.samanthagladden.com/wp-content/uploads/2017/01/healeczema-4.jpg" alt="" />
    </div>
  </section> 

  <section class="card">
  <div class="card-text-content">
    <h3>Other Symptoms</h3>
    <li>Have you experienced any of the following?</li>
    <br></br>
    <div class="checkboxes">
      <input type="checkbox" id="symptom1" name="symptoms" value="symptom1" />
      <label for="symptom1">Headache</label><br />

      <input type="checkbox" id="symptom2" name="symptoms" value="symptom2" />
      <label for="symptom2">Nausea and vomiting</label><br />

      <input type="checkbox" id="symptom3" name="symptoms" value="symptom3" />
      <label for="symptom3">Fatigue</label><br />

      <input type="checkbox" id="symptom4" name="symptoms" value="symptom4" />
      <label for="symptom4">Loss of appetite</label><br />

      <input type="checkbox" id="symptom5" name="symptoms" value="symptom5" />
      <label for="symptom5">Swollen lymph nodes</label><br />

      <input type="checkbox" id="symptom6" name="symptoms" value="symptom6" />
      <label for="symptom6">Bleeding from the nose or gums</label><br />

      <input type="checkbox" id="symptom7" name="symptoms" value="symptom7" />
      <label for="symptom7">Abdominal pain</label><br />
    </div>
  </div>
  <div class="visual">
    <img src="https://th.bing.com/th/id/OIP.2GESL8D4TwXVqGk6s1Q1cQHaEK?rs=1&pid=ImgDetMain" alt="" />
  </div>
</section>

<section class="card">
    <div class="card-text-content">
      <h3>Additional</h3>
      <li>Have you recently traveled to an are with dengue fever?</li>
      <br></br>

      <div className="radio-group">
      <label htmlFor="radioOption1" className="radio-label">
        <input type="radio" id="radioOption1" name="additional" value="option1" className="radio-input" />
        Yes
      </label>
      <label htmlFor="radioOption2" className="radio-label">
        <input type="radio" id="radioOption2" name="additional" value="option2" className="radio-input" />
        No
      </label>
    </div>   
    <br></br>
    <li>Has anyone in your community been diagnosed with dengue fever recently?</li>
      <br></br>

      <div className="radio-group">
      <label htmlFor="radioOption1" className="radio-label">
        <input type="radio" id="radioOption1" name="skinRash" value="option1" className="radio-input" />
        Yes
      </label>
      <label htmlFor="radioOption2" className="radio-label">
        <input type="radio" id="radioOption2" name="skinRash" value="option2" className="radio-input" />
        No
      </label>
    </div>   
    <br></br>
    <li>Are you pregnant or breastfeeding? (pregnant and breastfeeding women are at higher risk of complications from dengue)</li>
      <br></br>

      <div className="radio-group">
      <label htmlFor="radioOption1" className="radio-label">
        <input type="radio" id="radioOption1" name="skinRash" value="option1" className="radio-input" />
        Yes
      </label>
      <label htmlFor="radioOption2" className="radio-label">
        <input type="radio" id="radioOption2" name="skinRash" value="option2" className="radio-input" />
        No
      </label>
    </div>  
     </div>
    <div class="visual">
      <img src="https://cebudailynews.inquirer.net/files/2020/04/04-27-dengue.jpg" alt="" />
    </div>
  </section> 

</article>
        <button className="check-button">
            Check Dengue
          </button>
      </div>
    </div>
  );
};

export default Work;
