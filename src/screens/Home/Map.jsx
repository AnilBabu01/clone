import React, { useEffect } from "react";
import logo from "../../assests/sideimg.jpeg";
import money from "../../assests/new.jpg";
import slider1 from "../../assests/slider1.jpg";
import slider2 from "../../assests/slider2.jpg";
import slider3 from "../../assests/slider3.jpg";
import { useNavigate } from "react-router-dom";

import "./Map.css";
const Map = () => {
  const navigation = useNavigate();
  return (
    <>
      <div className="main_Map">
        <div className="main_Map_innear">
          <div className="main_Map_innear10">1</div>
          <div className="main_Map_innear11">
            <h2>पहुचमार्ग</h2>
            <p>
              कुंडलपुर से दमोह (जिला मुख्यालय) से लगभग 35 किलोमीटर दूर पटेरा
              तहसील में बुन्देखण्ड का शिरर्मोर्य तीर्थ है I कुंडलपुर
              “कुण्डलगिरी” नामक अर्द्धचन्द्राकार पहाड़ियों पर स्थित है
            </p>
          </div>
        </div>

        <div className="main_Map_innear">
          <div className="main_Map_innear12">
            <h2>अतिशय</h2>
            <p>
              “सरोवर का, अन्तरंग छुपा क्यों? तरंग वश !” “– तीर्थंकर क्यों, आदेश
              नहीं देते, सो ज्ञात हुआ
            </p>
          </div>
          <div className="main_Map_innear13">
            <img
              src={money}
              alt="d"
              style={{ width: "100%", height: "100%" }}
            />
          </div>
        </div>
      </div>

      <div className="main_text_div_hai_na">
        <div className="main_text_div_hai_na1">
          <h2>नित्य कार्यक्रम</h2>
          <p>” मोक्षमार्ग तो, भीतर अधिक है, बाहर कम</p>
        </div>
        <div className="main_text_div_hai_na12">
          <h2>
            ” :- पूज्य बड़े बाबा जी की नगरी श्री दिगम्बर जैन सिद्ध क्षेत्र
            कुंडलगिरी कुण्डलपुर दमोह म.प्र. में आप सभी साधर्मी बन्धुओं का
            हार्दिक स्वागत, बंदन ,अभिनन्दन है क्षेत्र की बन्दना कर सातिशय
            पुण्यार्जन कर इस मानव जीवन को सफल बनाये सादर……”
          </h2>
        </div>
        <div className="main_bri_aur_pade">
          <button> और पढ़ें</button>
        </div>
        <div className="main_text_div_hai_na1" style={{ marginTop: "2rem" }}>
          <h2>फोटो गैलरी</h2>
          <p>” मोक्षमार्ग तो, भीतर अधिक है, बाहर कम</p>
        </div>
        <div className="main_gallery">
          <img src={slider1} alt="dd" />
          <img src={slider2} alt="dd" />
          <img src={slider3} alt="dd" />
          <img src={slider1} alt="dd" />
          <img src={slider2} alt="dd" />
          <img src={slider3} alt="dd" />
          <img src={slider1} alt="dd" />
          <img src={slider2} alt="dd" />
        </div>
      </div>
    </>
  );
};

export default Map;
